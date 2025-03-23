
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define user type
export interface User {
  id: string;
  email: string;
  name?: string;
  title?: string;
  avatar?: string;
  location?: string;
  website?: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
  };
}

// Define authentication context type
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
  updateUser: (updatedUser: User) => Promise<User>; // Changed return type from void to User
  error: string | null;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {},
  updateUser: async () => {
    return {} as User; // Updated to return a User object
  },
  error: null,
});

// Auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check for existing user session on mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error restoring auth state:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);

      // In a real app, you would validate against a backend
      // For now, we'll simulate a check against localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const foundUser = users.find((u: any) => 
        u.email === email && u.password === password
      );

      if (!foundUser) {
        throw new Error('Invalid email or password');
      }

      // Create user session without the password
      const { password: _, ...userWithoutPassword } = foundUser;
      
      // Store in localStorage and state
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);
    } catch (error) {
      setError((error as Error).message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign up function
  const signUp = async (email: string, password: string, name: string) => {
    try {
      setIsLoading(true);
      setError(null);

      // Get existing users or initialize empty array
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if email is already in use
      if (users.some((u: any) => u.email === email)) {
        throw new Error('Email already in use');
      }

      // Create new user
      const newUser = {
        id: `user-${Date.now()}`,
        email,
        password, // In a real app, you would hash this
        name,
        createdAt: new Date().toISOString(),
      };

      // Save to "database" (localStorage)
      const updatedUsers = [...users, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      // Create user session without the password
      const { password: _, ...userWithoutPassword } = newUser;
      
      // Store in localStorage and state
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);
    } catch (error) {
      setError((error as Error).message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Update user profile
  const updateUser = async (updatedUser: User) => {
    try {
      setIsLoading(true);
      setError(null);

      // Get existing users
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Find and update the user in the "database"
      const updatedUsers = users.map((u: any) => 
        u.id === updatedUser.id ? { ...u, ...updatedUser } : u
      );
      
      // Save updated users array
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      // Update current user session
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      
      return updatedUser;
    } catch (error) {
      setError((error as Error).message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Sign out function
  const signOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  // Value to be provided by the context
  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    signIn,
    signUp,
    signOut,
    updateUser,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
