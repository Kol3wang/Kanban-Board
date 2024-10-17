import { Router, Request, Response } from 'express';
import { User } from '../models/user.js'; // Adjust the path if necessary
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Use the correct Sequelize query structure
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    
    // Compare passwords using bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
    
    // Generate JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    
    // Send the token to the client
    return res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;