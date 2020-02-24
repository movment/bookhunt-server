import { SignOutResponse } from '../../../types/types';

const resolvers = {
  Mutation: {
    SignOut: (): SignOutResponse => {
      return {
        ok: true,
        error: null,
      };
    },
  },
};

export default resolvers;
