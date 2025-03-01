import { AuthProvider } from 'context/Auth/auth';
import { Slide, ToastContainer } from 'react-toastify';
import { AppRoutes } from 'routes';
import { GlobalStyle } from '@styles/globalStyles';

export function App () {
  return (
    <AuthProvider>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer 
        className='custom-toast'
        position="top-center"
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </AuthProvider>
  );
}