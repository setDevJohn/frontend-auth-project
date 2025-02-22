import { FormEvent, useState } from 'react';
import { toastError } from '@utils/toast';
import { InputWithLabel } from '@components/InputWithLabel';
import { FormButton } from '@components/FormButton';
import { Container, Form, FormContainer, RouteBack, Text, Title } from './styles';
import { LoadingDots } from '@components/LoadingDots';
import { userApi } from '@services/user/userApi';
import { useNavigate } from 'react-router-dom';

type TComponent = {
  resetModal: boolean; 
  setResetModal: (value: boolean) => void;
}

export function ResetPassword ({ resetModal, setResetModal } : TComponent) {
  const [email, setEmail] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!emailSent && !email) return toastError('E-mail é obrigatório');
    if (emailSent && !token) return toastError('Token é obrigatório');
  
    try {
      setLoading(true);
      if (emailSent) {
        await userApi.confirmToken(token);
        navigate('/');
      } else {
        await userApi.resetPassword(email);
        setEmailSent(true);
      }
    } catch (err) {
      console.error(emailSent 
        ? 'Erro ao confirmar o token:'
        : 'Erro ao enviar o email:', err.message);
      toastError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const inputSetting = {
    name: emailSent ? 'token' : 'email',
    type: emailSent ? 'token' : 'email',
    label: emailSent ? 'Token' : 'E-mail',
    error: emailSent ? false : false,
    value: emailSent ? '' : email,
    handleChange: (target) => emailSent ? setToken(target.value) : setEmail(target.value),
    styles: { minWidth: '243px' },
  }; 

  return (
    <Container $resetModal={resetModal}>
      
      <FormContainer>
        <RouteBack onClick={() => setResetModal(false)}>{'< voltar'}</RouteBack>

        <Form onSubmit={(e) => handleSubmit(e)}>
          <Title>Redefinição de senha!</Title>
          <Text>
            { emailSent 
              ? 'Informe o token enviado por email para definição da nova senha'
              : 'Informe o email cadastrado e enviaremos um token para definição da nova senha'
            }
          </Text>

          <InputWithLabel {...inputSetting}/>

          <FormButton loading={loading} text="ENVIAR"/>
        </Form>
      </FormContainer>
    </Container>
  );
}