import jwt from 'jsonwebtoken';

export const getUserId = (req, res, next) => {
  const token = req.get('X-JWT');
  if (token) {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded.id;
  }
  next();
};
