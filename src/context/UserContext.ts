import { createContext } from "react";

export type User = {
  id?: string;
  email: string;
  recordStreak?: number;
  currentStreak?: number;
};

export const UserContext = createContext<
  [user?: User, setUser?: React.Dispatch<React.SetStateAction<User>>]
>([]);
