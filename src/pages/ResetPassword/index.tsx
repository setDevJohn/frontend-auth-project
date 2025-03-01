import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toastError, toastSuccess, toastWarn } from '@utils/toast';
import { userApi } from '@services/user/userApi';
import { InputWithLabel } from '@components/InputWithLabel';
import { FormButton } from '@components/Form/FormButton';
import { Container, FormContainer, RouteBack, Form, Title } from './styles';

export type TUser = {
  active: boolean;
  companyId: number;
  created_at: Date;
  email: string;
  id: number;
  name: string;
  password_reset_token: string | null;
  account_verification_token: string | null;
  role: string;
  updated_at: Date;
  verified: boolean;
}

export function ResetPassword () {
  const [user, setUser] = useState<TUser | null>(null);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string[]>([]);


  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser () {
      const [userParams, token] = location.search?.split('&') || []; 
      const userId = +userParams?.split('=')[1];
      const userToken = token?.split('=')[1];
  
      if (!userId || !userToken) navigate('/');

      try {
        const { resource } = await userApi.fetch(userId);
        if (resource.password_reset_token !== userToken) navigate('/');       
        setUser(resource);
      } catch (err) {
        console.error('Erro ao buscar usuário:', err.message);
        toastError(err.message);
      }
    }

    fetchUser();
  }, [location]);

  function handleChangeInput ({ name, value }) {
    setError(prev => prev.filter(field => field !== name));    
    if (name === 'password') return setPassword(value);
    setConfirmPassword(value);
  }

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setLoading(true);
      if (!password) setError(prev => [...prev, 'password']);
      if (!confirmPassword) setError(prev => [...prev, 'confirmPassword']);
      if ([password, confirmPassword].some(field => !field)) return;

      if (password !== confirmPassword) return toastWarn('Senhas diferentes, tente novamente. ');
      await userApi.resetPassword(user.id, password);

      setPassword('');
      setConfirmPassword('');
      toastSuccess('Senha atualizada com sucesso');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      console.error('Erro ao redefinir senha:', err.message);      
      toastError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
          
      <FormContainer>
        <RouteBack onClick={() => navigate('/')}>
          {'< voltar'}
        </RouteBack>
    
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Title>Redefinição de senha!</Title>
    
          <InputWithLabel
            name='password'
            type='password'
            label="Nova senha"
            error={error.includes('password')}
            value={password}
            handleChange={(target) => handleChangeInput(target)}
            styles={{ minWidth: '243px', marginBottom: '10px' }}
          />

          <InputWithLabel
            name='confirmPassword'
            type='password'
            label="Confirmar senha"
            error={error.includes('confirmPassword')}
            value={confirmPassword}
            handleChange={(target) => handleChangeInput(target)}
            styles={{ minWidth: '243px' }}
          />
    
          <FormButton loading={loading} text="ATUALIZAR"/>
        </Form>
      </FormContainer>
    </Container>
  );
}
