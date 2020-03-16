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
      const { bookId, page = 1 } = args;

      // 상세검색
      if (bookId) {
        try {
          const book: any = await Book.findOne(bookId, {
            relations: ['users', 'reviews'],
          });
          book.views += 1;
          await book.save();
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
        const [books, max]: any = await Book.findAndCount({
          order: { [sort]: 'DESC', id: 'DESC' },
          skip: 20 * ((page as number) - 1),
          take: 20,
        });

        return {
          ok: true,
          error: null,
          books,
          max,
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
