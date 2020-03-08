import validation from '../../../utils/validation';
import { MutationAddReviewArgs, AddReviewResponse } from '../../../types/types';
import Review from '../../../entities/Review';

enum Rating {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
}
const resolvers = {
  Mutation: {
    AddReview: validation(
      async (
        _,
        args: MutationAddReviewArgs,
        context,
      ): Promise<AddReviewResponse> => {
        const { bookId, comment, rating } = args;
        const {
          req: { user },
        } = context;
        try {
          const review = new Review();
          review.bookId = bookId;
          review.userId = user;
          review.comment = comment;
          review.rating = Rating[rating];

          await review.save();
          return {
            ok: true,
            error: null,
            reviewId: review.id,
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
