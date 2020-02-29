import validation from '../../../utils/validation';
import {
  SearchBooksResponse,
  QuerySearchBooksArgs,
} from '../../../types/types';
import Book from '../../../entities/Book';
import { Like } from 'typeorm';

const resolvers = {
  Query: {
    SearchBooks: async (
      _,
      args: QuerySearchBooksArgs,
      context,
    ): Promise<SearchBooksResponse> => {
      try {
        const books = await Book.find({
          where: {
            title: Like(`%${args.title}%`),
          },
          take: args.max || 10,
        });

        return {
          ok: true,
          error: null,
          books,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        };
      }
    },
  },
};
export default resolvers;
