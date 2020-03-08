import { QueryGetListsArgs, GetListsResponse } from '../../../types/types';
import User from '../../../entities/User';
import Booklist from '../../../entities/Booklist';
import validation from '../../../utils/validation';

const resolvers = {
  Query: {
    GetLists: async (
      _,
      args: QueryGetListsArgs,
      context,
    ): Promise<GetListsResponse> => {
      try {
        if (args.type === 'MY') {
          if (!context.req.user) {
            throw new Error('로그인 먼저');
          }
          console.log('start');
          const user = await User.findOne(context.req.user, {
            relations: ['lists'],
          });
          return {
            ok: true,
            error: null,
            lists: user?.lists,
          };
        }
        const lists = await Booklist.find({
          order: {
            id: 'DESC',
          },
          take: 20,
        });
        return {
          ok: true,
          error: null,
          lists,
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
