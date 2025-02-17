import { GlobalStyle } from '@styles/globalStyles';
import { AuthProvider } from 'context/auth';
import { Slide, ToastContainer } from 'react-toastify';
import { AppRoutes } from 'router';

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