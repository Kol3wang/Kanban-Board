import axios from 'axios';
import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await axios.post('/api/auth/login', userInfo);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error); // Log the full error for debugging
    throw error;
  }
};

export { login };