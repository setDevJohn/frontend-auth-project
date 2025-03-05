import { Dispatch, ReactNode, SetStateAction } from 'react';


export type AuthProviderProps = {
  children: ReactNode;
};

export type LoginProps = {
  login: string;
  pass: string;
};

export type TTokenData = {
  companyId: number;
  userId: number;
  email: string;
  role: string | null;
  verified: boolean
}

export type AuthContextProps = {
  user: TTokenData | null;
  loading: boolean;
  setUser: Dispatch<SetStateAction<TTokenData>>;
  getUserData: () => TTokenData;
  handleLogin: (credentials: LoginProps) => Promise<void>;
  handleLogout: () => void;
};