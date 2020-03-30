import passport from 'passport';

const auth = (resolver) => async (parent, args, context, info) => {
  passport.authenticate('local', (err, user) => {});
  return await resolver(parent, args, context, info);
};

export default auth;
