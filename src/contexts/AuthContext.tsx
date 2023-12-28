import { createContext } from "react";

export type SignUpType = {
  name: string;
  email: string;
  birthdayDate: Date;
  password: string;
  passwordConfirmation: string;
};

export type AuthContextType = {
  user: string | null;
  isUserLoggedIn: boolean;
  signin: (email: string, password: string) => Promise<boolean>;
  signup: (signup: SignUpType) => Promise<boolean>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
