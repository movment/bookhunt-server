import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

const typesArray: GraphQLSchema[] = fileLoader(
  path.join(__dirname, './api/**/*.graphql'),
);
const resolversArray = fileLoader(
  path.join(__dirname, './api/**/*.resolver.ts'),
);

export const typeDefs = mergeTypes(typesArray);
const resolvers = mergeResolvers(resolversArray);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
