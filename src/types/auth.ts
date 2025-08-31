export interface FormData {
    name?: string;
    email: string;
    password: string;
    otp: string;
    keepLoggedIn?: boolean;
  }
  
  export interface AuthResponse {
    token: string;
    user: { id: string };
    error?: string;
  }
  
  export type AuthType = 'signin' | 'signup';
  