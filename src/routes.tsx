import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from 'context/Auth/auth';
import { getRoutes, publicRoutes } from 'routes/routeList';
import { NotFound } from '@pages/NotFound';

export const AppRoutes = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <BrowserRouter>
      <Routes>
        {!user 
          ? publicRoutes.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))
          : (
            <>
              <Route path='/' element={<Navigate to={getRoutes(user)[0].path} />} />
              {getRoutes(user).map((route, i) => (
                <Route key={i} path={route.path} element={route.element} />
              ))}
            </>
          )
        }
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};