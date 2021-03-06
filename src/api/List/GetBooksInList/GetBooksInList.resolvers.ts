import {
  QueryGetBooksInListArgs,
  GetBooksInListResponse,
} from '../../../types/types';
import Booklist from '../../../entities/Booklist';

const resolvers = {
  Query: {
    GetBooksInList: async (
      _,
      args: QueryGetBooksInListArgs,
      context,
    ): Promise<GetBooksInListResponse> => {
      const list = await Booklist.findOne(args.listId, {
        relations: ['books'],
      });
      if (list) {
        list.views += 1;
      }
      list?.save();
      return {
        ok: true,
        error: null,
        books: list?.books as any,
        list,
      };
    },
  },
};
export default resolvers;
