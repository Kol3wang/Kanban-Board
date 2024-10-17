// src/utils/auth.ts
import { JwtPayload, jwtDecode }  from 'jwt-decode';

class AuthService {
  // Decode the token and return the user profile information
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  // Check if the user is logged in by verifying the presence and validity of the token
  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // Returns true if token exists and is not expired
  }

  // Check if the token is expired by comparing the expiration time with the current time
  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<{ exp: number }>(token);
      if (!decoded.exp) return true; // If no expiration in token, assume expired
      return decoded.exp < Date.now() / 1000; // Check if the token has expired
    } catch (error) {
      return true; // If there's an error decoding the token, assume it's expired
    }
  }

  // Retrieve the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Save the token to localStorage and redirect to the home page
  login(idToken: string): void {
    localStorage.setItem('token', idToken);
    window.location.assign('/'); // Redirect to home page after login
  }

  // Remove the token from localStorage and redirect to the login page
  logout(): void {
    localStorage.removeItem('token');
    window.location.assign('/login'); // Redirect to login page after logout
  }
}

export default new AuthService();