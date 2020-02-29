import { GetCelebListResponse } from '../../../types/types';
import Celeb from '../../../entities/Celeb';
const resolvers = {
  Query: {
    GetCelebList: async (): Promise<GetCelebListResponse> => {
      const result = await Celeb.find({ relations: ['list'] });
      console.log(result);
      return {
        ok: true,
        error: null,
        Celebs: result,
      };
    },
  },
};

export default resolvers;
