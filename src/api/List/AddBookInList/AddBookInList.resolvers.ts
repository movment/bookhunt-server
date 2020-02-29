import validation from '../../../utils/validation';
import {
  AddBookInListResponse,
  MutationAddBookInListArgs,
} from '../../../types/types';
import Booklist from '../../../entities/Booklist';

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
          const list = await Booklist.findOne({
            where: {
              id: args.listId,
              userId: context.req.user,
            },
          });
          if (!list) {
            return {
              ok: true,
              error: '내 서재가 아닙니다.',
            };
          }
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
