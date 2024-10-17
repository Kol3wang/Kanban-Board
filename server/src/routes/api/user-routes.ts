import express, { Request, Response } from 'express';
import { User } from '../../models/user.js'; 

const router = express.Router();

// GET /users - Get all users
router.get('/', async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll(); // Retrieve all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

// GET /users/:id - Get a user by id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id); // Retrieve user by primary key
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
});
// POST /users - Create a new user
router.post('/', async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body); // Create a new user with request body data
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});
// PUT /users/:id - Update a user by id
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body); // Update the user with request body data
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});
// DELETE /users/:id - Delete a user by id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const rowsDeleted = await User.destroy({ where: { id: req.params.id } }); // Delete user by ID
    if (rowsDeleted) {
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

export { router as userRouter };