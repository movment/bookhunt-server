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
      const { type, page = 1, sort } = args;
      let createdAt = sort?.toLowerCase() === 'views' ? 'views' : 'createdAt';
      try {
        if (type === 'MY') {
          if (!context.req.user) {
            throw new Error('로그인 먼저');
          }
          const [lists, max] = await Booklist.findAndCount({
            where: { userId: context.req.user },
            order: {
              createdAt: 'DESC',
              id: 'DESC',
            },
            skip: 20 * ((page as number) - 1),
            take: 20,
          });
          // const user = await User.findOne(context.req.user, {
          //   relations: ['lists'],
          // });
          return {
            ok: true,
            error: null,
            lists,
            max,
          };
        }
        const [lists, max] = await Booklist.findAndCount({
          order: {
            [createdAt || 'views']: 'DESC',
            id: 'DESC',
          },
          skip: 20 * ((page as number) - 1),
          take: 20,
        });
        return {
          ok: true,
          error: null,
          lists,
          max,
        };
      } catch (error) {
        console.log(error.message);
        return {
          ok: false,
          error: error.message,
        };
      }
    },
  },
};
export default resolvers;
