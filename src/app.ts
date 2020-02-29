import { GraphQLServer } from 'graphql-yoga';
import cors from 'cors';
import logger from 'morgan';
import rateLimit from 'express-rate-limit';
import schema from './schema';
import { getUserId } from './utils/jwt';

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
    this.app.express.use(cors());
    this.app.express.use(
      rateLimit({
        windowMs: 60 * 1000,
        max: 100,
        message: JSON.stringify({
          message: 'Too Many Requests',
        }),
      }),
    );
    this.app.express.use(getUserId);
  };
}

export default new App().app;
