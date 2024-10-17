import { UserLogin } from "../interfaces/UserLogin";
import axios from 'axios';


const login = async (userInfo: UserLogin) => {
  try {
    // Make a POST request to the login route with userInfo as the payload
    const response = await axios.post('/api/auth/login', userInfo);
    return response.data; // Assuming the response contains the token or other relevant data
  } catch (error) {
    // Handle any errors that occur during the login request
    console.error('Login failed:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export { login };