import { GraphQLServer } from 'graphql-yoga';
import cors from 'cors';
import logger from 'morgan';
import rateLimit from 'express-rate-limit';
import passport from 'passport';
import bodyParser from 'body-parser';
import passportConfig from './utils/passport';
import schema from './schema';
import { getUserId } from './utils/jwt';
import jwt from 'jsonwebtoken';

class App {
  public app: GraphQLServer;

  constructor() {
    this.app = new GraphQLServer({
      schema,
      context: (params) => {
        return {
          req: params.request,
        };
      },
    });
    this.middlewares();
  }

  private middlewares = (): void => {
    this.app.express.use(logger('dev'));
    this.app.express.use(
      cors({
        origin: 'http://localhost:3000',
        credentials: true,
      }),
    );
    this.app.express.use(
      rateLimit({
        windowMs: 60 * 1000,
        max: 100,
        message: JSON.stringify({
          message: 'Too Many Requests',
        }),
      }),
    );
    this.app.express.use(bodyParser.urlencoded({ extended: false }));
    this.app.express.use(bodyParser.json());

    passportConfig();
    this.app.express.use(passport.initialize());

    this.app.express.post('/auth/signin', (req, res, next) => {
      passport.authenticate(
        'local',
        { session: false },
        (error, user, message) => {
          if (!user) {
            return res.status(401).json({
              error: message.message,
            });
          }
          return req.logIn(user, { session: false }, (err) => {
            if (err) next(err);
            const token = jwt.sign(
              { id: user.id },
              process.env.JWT_SECRET as string,
            );
            return res.json({ token });
          });
        },
      )(req, res, next);
    });
    this.app.express.get('/auth/naver/signin', passport.authenticate('naver'));
    this.app.express.get('/auth/naver/callback', (req, res, next) => {
      passport.authenticate(
        'naver',
        {
          // successRedirect: 'http://localhost:3000',
          session: false,
        },
        (error, user, message) => {
          console.log(user);
          const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET as string,
          );
          res.cookie('jwt', token, { httpOnly: false });
          return res.redirect('http://localhost:3000');
        },
      )(req, res, next);
    });
    this.app.express.use(getUserId);
  };
}

export default new App().app;
