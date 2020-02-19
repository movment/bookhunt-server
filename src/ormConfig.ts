import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  database: 'hackathon',
  synchronize: true,
  logging: false,
  entities: ['entities/**/*.*'],
  host: 'localhost',
  port: 3306,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
};

export default connectionOptions;
