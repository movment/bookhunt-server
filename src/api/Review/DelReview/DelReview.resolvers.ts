import validation from '../../../utils/validation';
import { MutationDelReviewArgs, DelReviewResponse } from '../../../types/types';
import Review from '../../../entities/Review';

const resolvers = {
  Mutation: {
    DelReview: validation(
      async (
        _,
        args: MutationDelReviewArgs,
        context,
      ): Promise<DelReviewResponse> => {
        const { reviewId } = args;

        try {
          const review = await Review.findOne(reviewId);
          if (!review) {
            return {
              ok: true,
              error: '잘못된 리뷰',
            };
          }
          if (review.userId !== context.req.user) {
            return {
              ok: true,
              error: 'Auth Error',
            };
          }
          await review.remove();
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
