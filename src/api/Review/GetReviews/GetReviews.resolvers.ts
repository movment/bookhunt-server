import { GetReviewsResponse, QueryGetReviewsArgs } from '../../../types/types';
import Review from '../../../entities/Review';

const resolvers = {
  Query: {
    GetReviews: async (
      _,
      args: QueryGetReviewsArgs,
      context,
    ): Promise<GetReviewsResponse> => {
      const { bookId } = args;
      try {
        const reviews: any = await Review.find({
          where: {
            bookId,
          },
          order: {
            id: 'DESC',
          },
        });
        return {
          ok: true,
          error: null,
          reviews,
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
