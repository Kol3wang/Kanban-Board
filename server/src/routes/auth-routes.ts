// src/routes/auth-routes.ts
import { Router, Request, Response } from 'express';
import { User } from '../models/user.js'; // Adjust the path if necessary
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  console.log('Received login attempt for username:', username); // Debugging

  try {
    // Check if user exists
    const user = await User.findOne({ where: { username } });
    if (!user) {
      console.log('Login failed: User not found'); // Debugging
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    
    // Check if the password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Password validation result:', isPasswordValid); // Debugging
    if (!isPasswordValid) {
      console.log('Login failed: Invalid password'); // Debugging
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    
    // Check if JWT Secret is set
    if (!process.env.JWT_SECRET) {
      console.error('JWT Secret is not set in the environment variables'); // Debugging
      return res.status(500).json({ message: 'Server configuration error' });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Login successful, token generated'); // Debugging

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