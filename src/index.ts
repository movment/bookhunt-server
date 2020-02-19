import { Options } from 'graphql-yoga';
import app from './app';

const appOptions: Options = {
  port: 4000,
  endpoint: '/graphql',
  playground: '/playground',
};

app.start(appOptions, () => {
  console.log('Listening on port 4000');
});
