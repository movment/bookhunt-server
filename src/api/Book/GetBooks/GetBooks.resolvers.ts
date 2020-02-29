import { QueryGetBooksArgs, GetBooksResponse } from '../../../types/types';
import Book from '../../../entities/Book';

const resolvers = {
  Query: {
    GetBooks: async (
      _,
      args: QueryGetBooksArgs,
      context,
    ): Promise<GetBooksResponse> => {
      if (args.id) {
        const book = await Book.findOne({ where: { id: args.id } });
        if (book) {
          return {
            ok: true,
            error: null,
            books: [book],
          };
        }
      }

      const books = await Book.find({ order: { id: 'DESC' }, take: 20 });
      return {
        ok: true,
        error: null,
        books,
      };
    },
  },
};

export default resolvers;
