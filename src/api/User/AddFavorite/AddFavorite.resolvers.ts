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
          User.findOne(context.req.user),
          Book.findOne(args.bookId),
        ]);
        console.log(user, book);
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
        user!.books = user!.books || [];

        user?.books.push(book as Book);
        await user?.save();
        return {
          ok: true,
          error: null,
        };
      },
    ),
  },
};
export default resolvers;
