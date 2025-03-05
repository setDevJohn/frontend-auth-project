import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { api } from '@services/api';
import { authApi } from '@services/auth/authApi';
import { toastError } from '@utils/toast';
import { jwtDecode } from 'jwt-decode';
import { AuthContextProps, AuthProviderProps, LoginProps, TTokenData } from './types';

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  setUser: () => {},
  getUserData: () => ({
    companyId: 0,
    userId: 0,
    email: '',
    role: null,
    verified: false,
  }),
  handleLogin: async () => {},
  handleLogout: async () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<TTokenData | null>(null);
  const [loading, setLoading] = useState(true);

  const getUserData = useCallback((): TTokenData => {
    try {
      setLoading(true);
      const localToken = localStorage.getItem('token');
      if (!localToken) return null;

      const decoded: TTokenData = jwtDecode(localToken);
      return decoded;
    } catch (err) {
      toastError('Erro ao decodificar o token');
      throw new Error(err.message);
    } finally {
      setLoading(false);
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
      console.error('Erro ao fazer login:', err.message);
      throw new Error(err.message);
    }
  }, []);

  const handleLogout = useCallback(() => {
    setLoading(true);
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/';
  }, []);

  const authValue = useMemo(() => ({
    user,
    loading,
    setUser,
    getUserData,
    handleLogin,
    handleLogout,
  }), [user, loading, handleLogin, handleLogout, getUserData]);

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};