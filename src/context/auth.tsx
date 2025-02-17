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

type AuthContextProps = {
  token: string;
  setToken: (token: string) => void;
  user: null | object;
  setUser: (user: object | null) => void;
  handleLogin: (credentials: LoginProps) => Promise<void>;
};

const AuthContext = createContext<AuthContextProps>({
  token: '',
  setToken: () => {},
  user: null,
  setUser: () => {},
  handleLogin: async () => {},
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
  const [user, setUser] = useState<null | object>(null);

  useEffect(() => {
    const localTokem = localStorage.getItem('token');
    if (localTokem) return setToken(localTokem);
    console.log(localTokem);
    setUser(null);
  }, []);

  const handleLogin = useCallback(async (credentials: LoginProps) => {
    try {
      const { resource } = await authApi.login(credentials);
      setToken(resource);
      localStorage.setItem('token', resource);
      const decoded = jwtDecode(resource);

      console.log(decoded);
      setUser(decoded);
    } catch (err) {
      console.error(err);
      toastError(err.message);
    }
  }, []);

  const authValue = useMemo(() => ({
    token, handleLogin, user, setUser, setToken
  }), [token, user, handleLogin]);

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
