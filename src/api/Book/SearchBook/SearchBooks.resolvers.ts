import validation from '../../../utils/validation';
import {
  SearchBooksResponse,
  QuerySearchBooksArgs,
} from '../../../types/types';
import Book from '../../../entities/Book';
import { Like } from 'typeorm';

const resolvers = {
  Query: {
    SearchBooks: validation(
      async (
        _,
        args: QuerySearchBooksArgs,
        context,
      ): Promise<SearchBooksResponse> => {
        const books = await Book.find({
          where: {
            title: Like(`%${args.title}%`),
          },
          take: args.max || 20,
        });

        return {
          ok: true,
          error: null,
          books,
        };
      },
    ),
  },
};
export default resolvers;
