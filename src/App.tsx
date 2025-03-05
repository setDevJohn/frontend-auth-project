import { AppRoutes } from 'router';
import { Slide, ToastContainer } from 'react-toastify';
import { AuthProvider } from 'context/Auth/auth';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/globalStyles';
import { theme } from '@styles/theme';

export function App () {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}