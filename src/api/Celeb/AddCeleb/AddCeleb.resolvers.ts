import { MutationAddCelebArgs, AddCelebResponse } from '../../../types/types';
import Celeb from '../../../entities/Celeb';
import validation from '../../../utils/validation';

const resolvers = {
  Mutation: {
    AddCeleb: validation(
      async (_, args: MutationAddCelebArgs): Promise<AddCelebResponse> => {
        const { name, career, image } = args;

        try {
          const celeb = new Celeb();
          celeb.name = name;
          celeb.career = career;
          celeb.image = image;

          await celeb.save();
          return {
            ok: true,
            error: null,
            celeb,
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
