import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/Auth/auth';
import { userApi } from '@services/user/userApi';
import { toastError, toastSuccess } from '@utils/toast';
import { InputWithLabel } from '@components/InputWithLabel';
import { FormButton } from '@components/Form/FormButton';
import { Container, FormContainer, RouteBack, Form, Title, Text, SpanTextForm } from './styles';

export function AccountConfirmation () {
  const [token, setToken] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { user, setUser, handleLogout } = useContext(AuthContext);

  const navigate = useNavigate();
 
  function handleChangeInput (value: string) {
    setError(false);    
    setToken(value);
  }

  function handleBack () {
    handleLogout();
    navigate('/');
  }

  async function handleSendEmail () {
    try {
      setLoading(true);
      await userApi.sendConfirmToken(user.email);
      toastSuccess('Email reenviado');
    } catch (err) {
      console.log(err);
      console.error('Erro ao enviar email de confirmação de token:', err.message);
      toastError(err.message);
    } finally {
      setLoading(false);
    }
  };

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (!token) {
      toastError('Token obrigatório');
      return setError(true);
    }

    try {
      setLoading(true);
      const { resource } = await userApi.confirmAccount(user.userId, token);

      localStorage.setItem('token', resource);
      toastSuccess('Conta verificada com sucesso');
      
      setUser(prev => ({ ...prev, verified: true }));
      navigate('/');
    } catch (err) {
      console.error('Erro ao confirmar conta:', err.message);      
      toastError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <FormContainer>
        <RouteBack onClick={() => handleBack()}>
          {'< voltar'}
        </RouteBack>
    
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Title>CONFIRMAÇÃO DE CONTA</Title>
          <Text>
            Digite o token enviado por email para confirmar sua conta
          </Text>
    
          <InputWithLabel
            name='token'
            label="Token de confirmação"
            error={error}
            value={token}
            handleChange={(target) => handleChangeInput(target.value)}
            styles={{ minWidth: '243px' }}
          />

          <FormButton loading={loading} text="CONFIRMAR"/>
    
          <SpanTextForm $loading={loading} onClick={() => handleSendEmail()}>
            Reenviar email
          </SpanTextForm>
        </Form>
      </FormContainer>
    </Container>
  );
}
