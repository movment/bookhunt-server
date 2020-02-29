import { QueryGetBooksArgs, GetBooksResponse } from '../../../types/types';
import Book from '../../../entities/Book';

const resolvers = {
  Query: {
    GetBooks: async (
      _,
      args: QueryGetBooksArgs,
      context,
    ): Promise<GetBooksResponse> => {
      try {
        if (args.id) {
          const book = await Book.findOne(args.id);
          if (!book) {
            return {
              ok: true,
              error: '잘못된 Book',
            };
          }
          return {
            ok: true,
            error: null,
            books: [book],
          };
        }

        const books = await Book.find({ order: { id: 'DESC' }, take: 20 });
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
