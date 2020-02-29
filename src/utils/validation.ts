const validation = (resolver) => async (parent, args, context, info) => {
  if (!context.req.user) {
    throw new Error('No JWT');
  }
  return await resolver(parent, args, context, info);
};

export default validation;
