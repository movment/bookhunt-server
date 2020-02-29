import { GetCelebListResponse } from '../../../types/types';
import Celeb from '../../../entities/Celeb';
const resolvers = {
  Query: {
    GetCelebList: async (): Promise<GetCelebListResponse> => {
      try {
        const celebs = await Celeb.find({ relations: ['list'] });
        return {
          ok: true,
          error: null,
          celebs,
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
