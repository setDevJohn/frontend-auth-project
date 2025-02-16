import { FormEvent, useState } from 'react';
import { toastError, toastSuccess } from '@utils/toast';
import { InputWithLabel } from '@components/InputWithLabel';
import { FormButton } from '@components/FormButton';
import { Container, Form, FormContainer, RouteBack, Text, Title } from './styles';
import { LoadingDots } from '@components/LoadingDots';

type TComponent = {
  resetModal: boolean; 
  setResetModal: (value: boolean) => void;
}

export function ResetPassword ({ resetModal, setResetModal } : TComponent) {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  function handleInputChange (target) {
    const { name, value } = target;
    if (name === 'email') {
      return setEmail(value);
    } 
    // Criar mascara para token ? 
    // Se não e essa função for desnecessária passar direto no settings
  }

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // const errorFields = Object.entries(loginForm).filter(field => !field[1]);
    // if (errorFields.length) {
    //   setErrorFields(errorFields.map(field => field[0]));
    //   return toastWarn('Preencha todos os campos');
    // }
  
    try {
      setLoading(true);
      // await authApi.login({ login: loginForm.login, pass: loginForm.pass });
  
      toastSuccess('Login Success');
      // resetForm();
    } catch (err) {
      console.error('Erro ao criar usuário:', err);
      toastError(err || 'Erro ao criar usuário');
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
    handleChange: (target) => emailSent ? () => {} : setEmail(target.value),
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