import { MutationSignUpArgs, SignUpResponse } from '../../types/types';
import User from '../../entities/User';

const resolvers = {
  Mutation: {
    SignUp: async (_, args: MutationSignUpArgs): Promise<SignUpResponse> => {
      const { name, email, password, career, image } = args;
      try {
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;
        user.career = career;
        user.image = image;
        await user.save();

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
  },
};

export default resolvers;
