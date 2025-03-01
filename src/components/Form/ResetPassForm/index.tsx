import { FormEvent,  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userApi } from '@services/user/userApi';
import { toastError } from '@utils/toast';
import { InputWithLabel } from '@components/InputWithLabel';
import { FormButton } from '@components/Form/FormButton';
import { Container, Form, FormContainer, RouteBack, Text, Title } from './styles';

type TComponent = {
  resetModal: boolean; 
  setResetModal: (value: boolean) => void;
}

export function ResetPassForm ({ resetModal, setResetModal } : TComponent) {
  const [email, setEmail] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);


  const navigate = useNavigate();

  function handleCloseModal () {
    setResetModal(false);
    setEmail('');
    setToken('');
    setEmailSent(false);
  }

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!emailSent && !email) {
      setError(true);
      return toastError('E-mail é obrigatório');
    }
    if (emailSent && !token) {
      setError(true);
      return toastError('Token é obrigatório');
    }
  
    try {
      setLoading(true);
      if (!emailSent) {
        await userApi.sendResetToken(email);
        return setEmailSent(true);
      }
      const { resource } = await userApi.confirmToken(token, email);
      const { user, token: userToken } = resource;
      navigate(`/account/reset-password?cl=${user.id}&tk=${userToken}`);
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
    error,
    value: emailSent ? token : email,
    styles: { minWidth: '243px' },
    handleChange: (target) => {
      setError(false);
      if (emailSent) return setToken(target.value); 
      setEmail(target.value);
    },
  }; 

  return (
    <Container $resetModal={resetModal}>
      
      <FormContainer>
        <RouteBack onClick={handleCloseModal}>
          {'< voltar'}
        </RouteBack>

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