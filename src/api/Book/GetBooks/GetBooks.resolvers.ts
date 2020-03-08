import { QueryGetBooksArgs, GetBooksResponse } from '../../../types/types';
import Book from '../../../entities/Book';
import { getRepository } from 'typeorm';

const resolvers = {
  Query: {
    GetBooks: async (
      _,
      args: QueryGetBooksArgs,
      context,
    ): Promise<GetBooksResponse> => {
      const { bookId } = args;

      // 상세검색
      if (bookId) {
        try {
          const book: any = await Book.findOne(bookId, {
            relations: ['users', 'reviews'],
          });

          book.isFav =
            book.users.findIndex((user) => user.id === context.req.user) === -1
              ? false
              : true;

          return {
            ok: true,
            error: null,
            books: [book],
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
          };
        }
      }
      const sort = (args.sort || 'VIEWS').toLowerCase();
      try {
        const books: any = await Book.find({
          order: { [sort]: 'DESC' },
          take: 20,
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
