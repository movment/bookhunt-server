import { QueryGetListsArgs, GetListsResponse } from '../../../types/types';
import User from '../../../entities/User';
import Booklist from '../../../entities/Booklist';
import validation from '../../../utils/validation';

const resolvers = {
  Query: {
    GetLists: validation(
      async (
        _,
        args: QueryGetListsArgs,
        context,
      ): Promise<GetListsResponse> => {
        try {
          if (args.type === 'MY') {
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
    ),
  },
};
export default resolvers;
