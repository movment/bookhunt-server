import { GraphQLServer } from 'graphql-yoga';
import cors from 'cors';
import logger from 'morgan';
import schema from './schema';
import { getUserId } from './utils/jwt';

class App {
  public app: GraphQLServer;

  constructor() {
    this.app = new GraphQLServer({
      schema,
    });
    this.middlewares();
  }

  private middlewares = (): void => {
    this.app.express.use(logger('dev'));
    this.app.express.use(cors());
    this.app.express.use(getUserId);
  };
}

export default new App().app;
