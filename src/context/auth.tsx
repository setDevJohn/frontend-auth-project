import { api } from '@services/api';
import { authApi } from '@services/auth/authApi';
import { toastError } from '@utils/toast';
import { jwtDecode } from 'jwt-decode';
import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

type AuthProviderProps = {
  children: ReactNode;
};

type LoginProps = {
  login: string;
  pass: string;
};

export type TTokenData = {
  companyId: number;
  userId: number;
  role: string | null;
  verified: boolean
}

type AuthContextProps = {
  user: TTokenData | null;
  setUser: (user: TTokenData | null) => void;
  getUserData: () => TTokenData;
  handleLogin: (credentials: LoginProps) => Promise<void>;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  getUserData: () => ({
    companyId: 0,
    userId: 0,
    role: null,
    verified: false,
  }),
  handleLogin: async () => {},
  handleLogout: async () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<TTokenData | null>(null);

  const getUserData = useCallback((): TTokenData => {
    try {
      const localToken = localStorage.getItem('token');
      if (!localToken) return null;

      const decoded: TTokenData = jwtDecode(localToken);
      return decoded;
    } catch (err) {
      toastError('Erro ao decodificar o token');
      throw new Error(err instanceof Error ? err.message : 'Erro desconhecido');
    }
  }, []);

  useEffect(() => {
    const userToken = getUserData();
    if (!userToken) return setUser(null);
    setUser(userToken);
  }, []);

  const handleLogin = useCallback(async (credentials: LoginProps) => {
    try {
      const { resource } = await authApi.login(credentials);
      localStorage.setItem('token', resource);
      api.defaults.headers.common.Authorization = `Bearer ${resource}`;

      const decoded: TTokenData = jwtDecode(resource);
      setUser(decoded);
    } catch (err) {
      console.error('Erro ao fazer login:', err);
      throw (err);
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  const authValue = useMemo(() => ({
    user,
    setUser,
    getUserData,
    handleLogin,
    handleLogout,
  }), [user, handleLogin, handleLogout, getUserData]);

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};