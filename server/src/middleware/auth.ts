import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): Response<any> | void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Expected format: "Bearer <token>"

  if (!token) {
    // Return 401 if token is missing
    return res.status(401).json({ message: 'Access denied, token missing!' });
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      // Return 403 if token is invalid
      return res.status(403).json({ message: 'Invalid token!' });
    }

    // Attach the decoded user data to the request object
    const payload = decoded as JwtPayload;
    req.user = payload;

    // Explicitly return next() to resolve TypeScript's expectation
    return next();
  });
};