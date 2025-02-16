import { useState } from 'react';

import { RegisterForm } from '@components/RegistForm';
import { LoginForm } from '@components/LoginForm';
import { AuthImage } from '@components/AuthImage';
import { Container } from './styles';
import { ResetPassword } from '@components/ResetPassword';

export type TLoginForm = {
  login: string,
  pass: string,
}
export type TRegisterForm = {
  name: string,
  email: string,
  pass: string,
  companyName: string,
  tradingName: string,
  cnpj: string,
}

const defaultLoginForm = {
  login: '',
  pass: '',
};
const defaultRegisterForm = {
  name: '',
  email: '',
  pass: '',
  companyName: '',
  tradingName: '',
  cnpj: '',
};

export function Auth () {
  const [loginForm, setLoginForm] = useState<TLoginForm>(defaultLoginForm);
  const [registerForm, setRegisterForm] = useState<TRegisterForm>(defaultRegisterForm);
  const [registerFormActive, setRegisterFormActive] = useState<boolean>(false);
  const [registerImageActive, setRegisterImageActive] = useState<boolean>(false);
  const [resetModal, setResetModal] = useState<boolean>(false);
  const [errorFields, setErrorFields] = useState<string[]>(['']);

  function resetForm () {
    setLoginForm(defaultLoginForm);
    setRegisterForm(defaultRegisterForm);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    } 
  }

  const handleChangeForm = () => {
    setRegisterImageActive(prev => !prev);
    setErrorFields([]);
    
    setTimeout(() => {
      resetForm();
      setRegisterFormActive(prev => !prev);
    }, 350);
  };

  return (
    <Container>
      {registerFormActive
        ? (
          <RegisterForm
            errorFields={errorFields}
            setErrorFields={setErrorFields}
            registerForm={registerForm}
            setRegisterForm={setRegisterForm}
            handleChangeForm={handleChangeForm}
          />      
        ) : (
          <LoginForm
            resetForm={resetForm}
            errorFields={errorFields}
            setErrorFields={setErrorFields}
            loginForm={loginForm}
            setLoginForm={setLoginForm}
            handleChangeForm={handleChangeForm}
            setResetModal={setResetModal}
          />
        )
      }

      <AuthImage registerImageActive={registerImageActive}/>

      <ResetPassword resetModal={resetModal} setResetModal={setResetModal}/>
    </Container>
  );
}