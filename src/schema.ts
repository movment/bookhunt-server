import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

const typesArray = fileLoader(path.join(__dirname, './api/**/*.graphql'));
const resolversArray = fileLoader(
  path.join(__dirname, './api/**/*.resolvers.ts'),
);

export const typeDefs = mergeTypes(typesArray);
const resolvers = mergeResolvers(resolversArray);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
