import passport from 'passport';
import passportLocal from 'passport-local';
import passportNaver from 'passport-naver';
import passportJWT from 'passport-jwt';
import bcrypt from 'bcrypt';
import User from '../entities/User';
import { TokenExpiredError } from 'jsonwebtoken';

const LocalStrategy = passportLocal.Strategy;
const NaverStartegy = passportNaver.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

export default () => {
  //Local Strategy
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        console.log('Local Startegy');
        try {
          const user = await User.findOne({
            where: {
              email,
            },
          });
          if (!user) {
            return done(null, false, { message: 'Incorrect email' });
          }
          if (!user.comparePassword(password)) {
            return done(null, false, { message: 'Incorrect password' });
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      },
    ),
  );

  passport.use(
    new NaverStartegy(
      {
        clientID: process.env.NAVER_ID as string,
        clientSecret: process.env.NAVER_SECRET as string,
        callbackURL: 'http://localhost:4000/auth/naver/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const user = await User.findOne({
            where: {
              email: profile['_json'].email,
            },
          });

          if (!user) {
            const newUser = new User();
            newUser.email = profile['_json'].email;
            newUser.name = profile['_json'].nickname || 'NAVER';
            newUser.naverId = profile['_json'].id;
            await newUser.save();
          }

          done(null, user);
        } catch (error) {
          done(error);
        }
      },
    ),
  );
  // JWT Strategy
  // passport.use(
  //   new JWTStrategy(
  //     {
  //       // jwtFromRequest: ExtractJWT.fromHeader('X-JWT'),
  //       jwtFromRequest: ExtractJWT.fromExtractors([
  //         (req) => {
  //           const token = req.get('X-JWT');
  //           return token || '';
  //         },
  //       ]),
  //       secretOrKey: process.env.JWT_SECRET,
  //     },
  //     async (payload, done) => {
  //       console.log('JWT Startegy');
  //       try {
  //         const user = await User.findOne(payload.id);
  //         if (!user) {
  //           return done(null, false, { message: 'Incorrect JWT' });
  //         }
  //         return done(null, user);
  //       } catch (error) {
  //         return done(error);
  //       }
  //     },
  //   ),
  // );
};
