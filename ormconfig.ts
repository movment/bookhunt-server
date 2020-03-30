module.exports = {
  type: 'mysql',
  entities: ['src/entities/**/*.*'],
  synchronize: true,
  host: 'localhost',
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: 'books',
  logging: false,
};
