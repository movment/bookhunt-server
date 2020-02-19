import { writeFileSync } from 'fs';
import { typeDefs } from '../schema';

writeFileSync('./src/schema.graphql', typeDefs);
