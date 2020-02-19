import { GraphQLServer } from 'graphql-yoga';
import schema from './schema';

class App {
  public app: GraphQLServer;

  constructor() {
    this.app = new GraphQLServer({
      schema,
    });
    this.middlewares();
  }

  private middlewares = (): void => {};
}

export default new App().app;