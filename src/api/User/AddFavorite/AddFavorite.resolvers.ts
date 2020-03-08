import validation from '../../../utils/validation';
import {
  AddFavoriteResponse,
  MutationAddFavoriteArgs,
} from '../../../types/types';
import User from '../../../entities/User';
import Book from '../../../entities/Book';

const resolvers = {
  Mutation: {
    AddFavorite: validation(
      async (
        _,
        args: MutationAddFavoriteArgs,
        context,
      ): Promise<AddFavoriteResponse> => {
        const [user, book] = await Promise.all([
          User.findOne(context.req.user, { relations: ['books'] }),
          Book.findOne(args.bookId),
        ]);
        if (!user) {
          return {
            ok: true,
            error: '잘못된 USER',
          };
        }
        if (!book) {
          return {
            ok: true,
            error: '잘못된 BOOK',
          };
        }

        const index = user.books.findIndex((cur) => cur.id === book.id);
        index !== -1 ? user.books.splice(index, 1) : user.books.push(book);
        await user.save();
        return {
          ok: true,
          error: null,
        };
      },
    ),
  },
};
export default resolvers;
