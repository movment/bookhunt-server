import {
  QueryGetListsOfBookArgs,
  GetListsOfBookResponse,
} from '../../../types/types';
import { getRepository, In } from 'typeorm';
import Booklist from '../../../entities/Booklist';

const resolvers = {
  Query: {
    GetListsOfBook: async (
      _,
      args: QueryGetListsOfBookArgs,
    ): Promise<GetListsOfBookResponse> => {
      const { bookId } = args;

      try {
        const lists = await getRepository(Booklist)
          .createQueryBuilder('list')
          .innerJoin('list.books', 'book', 'book.id = :id', { id: bookId })
          .leftJoinAndSelect('list.user', 'user')
          .orderBy({ 'list.views': 'DESC', 'list.id': 'DESC' })
          .take(5)
          .getMany();
        return {
          ok: true,
          errors: null,
          lists,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};

export default resolvers;
