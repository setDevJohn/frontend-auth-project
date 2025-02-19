import { Auth } from '@pages/Auth';
import { AuthContext } from 'context/auth';
import { useContext } from 'react';
import { getRoutes } from 'routes/privatesRoutes';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  const { getUserData } = useContext(AuthContext);
  const user = getUserData();

  return (
    <BrowserRouter>
      <Routes>
        {!user 
          ? <Route path='/' element={<Auth />} />
          : (
            <>
              <Route path='/' element={<Navigate to={getRoutes(user)[0].path} />} />
              {getRoutes(user).map((route, i) => (
                <Route key={i} path={route.path} element={route.element} />
              ))}
            </>
          ) 
        }
        <Route path='*' element={<h2>Page not found!</h2>} />
      </Routes>
    </BrowserRouter>
  );
};