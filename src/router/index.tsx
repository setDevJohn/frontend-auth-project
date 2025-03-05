import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from 'context/Auth/auth';
import { getRoutes, publicRoutes } from 'router/routeList';
import { NotFound } from '@pages/NotFound';
import { LoadingCircular } from '@components/LoadingCircular';

export const AppRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  
  return (
    <BrowserRouter>
      <Routes>
        {loading 
          ? <Route path='*' element={<LoadingCircular/>}/>
          : (
            <>
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
            </>
          )
        }
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};