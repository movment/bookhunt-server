import {
  AddBookListResponse,
  MutationAddBookListArgs,
} from '../../../types/types';
import User from '../../../entities/User';
import Booklist from '../../../entities/Booklist';
import validation from '../../../utils/validation';

const resolvers = {
  Mutation: {
    AddBookList: validation(
      async (
        _,
        args: MutationAddBookListArgs,
        context,
      ): Promise<AddBookListResponse> => {
        try {
          const user = await User.findOne(context.req.user);
          const list = await Booklist.create({
            ...args,
            user,
          });
          await list.save();
          return {
            ok: true,
            error: null,
            list,
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
