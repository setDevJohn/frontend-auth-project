import { AuthContext } from 'context/Auth/auth';
import { useContext } from 'react';
import { SlLogout } from 'react-icons/sl';

export function Home () {
  const { handleLogout } = useContext(AuthContext);

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '25px',
        height: '100svh',
      }}
    >
      <h2 style={{ fontSize: '1.8rem' }}> Página inicial </h2>

      <div 
        onClick={handleLogout}
        style={{
          display: 'flex',
          alignItems:'center',
          gap: '5px',
          fontSize: '1.7rem',
          cursor: 'pointer',
        }}
      >
        <SlLogout size={25} />
        Sair
      </div>
    </div>
  );
}
