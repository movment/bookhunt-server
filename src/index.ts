import 'dotenv/config';
import { Options } from 'graphql-yoga';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';

const appOptions: Options = {
  port: 4000,
  endpoint: '/graphql',
  playground: '/playground',
};

createConnection()
  .then(() => {
    return app.start(appOptions, () => console.log('Listening on port 4000'));
  })
  .catch((error) => console.error(error));
