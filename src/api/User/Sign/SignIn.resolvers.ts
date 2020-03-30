import jwt from 'jsonwebtoken';
import { MutationSignInArgs, SignInResponse } from '../../../types/types';
import User from '../../../entities/User';
import passport from 'passport';

const resolvers = {
  Mutation: {
    SignIn: async (
      _,
      args: MutationSignInArgs,
      context,
    ): Promise<SignInResponse> => {
      const { email, password } = args;

      try {
        const user = await User.findOne({
          where: { email },
        });
        if (!user) {
          return {
            ok: true,
            error: 'verify email',
          };
        }
        if (!user.comparePassword(password)) {
          return {
            ok: true,
            error: 'verify password',
            token: null,
          };
        }
        const token = jwt.sign(
          { id: user.id },
          process.env.JWT_SECRET as string,
        );
        return {
          ok: true,
          error: null,
          token,
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
