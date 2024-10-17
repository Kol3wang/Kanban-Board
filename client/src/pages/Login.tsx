// src/pages/Login.tsx
import { useState, FormEvent, ChangeEvent } from "react";
import Auth from '../utils/auth';
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error before new attempt
    try {
      console.log('Submitting login data:', loginData); // Debugging
      const data = await login(loginData);
      console.log('Login successful, received token:', data.token); // Debugging
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
      setError('Invalid username or password.'); // Set user-friendly error message
    }
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p className='error'>{error}</p>}
        <label>Username</label>
        <input 
          type='text'
          name='username'
          value={loginData.username}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input 
          type='password'
          name='password'
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <button type='submit'>Submit Form</button>
      </form>
    </div>
  );
};

export default Login;