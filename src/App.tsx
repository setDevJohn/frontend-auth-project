import { Auth } from '@pages/Auth';
import { GlobalStyle } from '@styles/globalStyles';
import { Slide, ToastContainer } from 'react-toastify';

export function App () {
  return (
    <>
      <GlobalStyle />
      <Auth />
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
    </>
  );
}