import validation from '../../../utils/validation';
import {
  AddBookInListResponse,
  MutationAddBookInListArgs,
} from '../../../types/types';
import Booklist from '../../../entities/Booklist';
import Book from '../../../entities/Book';

const resolvers = {
  Mutation: {
    AddBookInList: validation(
      async (
        _,
        args: MutationAddBookInListArgs,
        context,
      ): Promise<AddBookInListResponse> => {
        console.log('BOOKINLIST');
        try {
          const [list, book] = await Promise.all([
            Booklist.findOne(args.listId, {
              where: {
                userId: context.req.user,
              },
              relations: ['books'],
            }),
            Book.findOne(args.bookId),
          ]);

          if (!list) {
            return {
              ok: true,
              error: '내 서재가 아닙니다.',
            };
          }
          if (!book) {
            return {
              ok: true,
              error: 'No Book',
            };
          }
          const index = list.books.findIndex((book) => book.id === args.bookId);
          index !== -1 ? list.books.splice(index, 1) : list.books.push(book);

          await list.save();
          return {
            ok: true,
            error: null,
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
          };
        }
      },
    ),
  },
};

export default resolvers;
