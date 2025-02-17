import { Auth } from '@pages/Auth';
import { AuthContext } from 'context/auth';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {user 
        ? (
          <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='*' element={<h2>Page not found!</h2>} />
          </Routes>
        ) : (
          <Routes>
            <Route path='/' element={<h2>Confirm Page</h2>} />
            <Route path='*' element={<h2>Page not found!</h2>} />
          </Routes>
        ) 
      }
    </BrowserRouter>
  );
};