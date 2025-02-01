import { useState } from 'react';

import { RegisterForm } from '@components/RegistForm';
import { LoginForm } from '@components/LoginForm';
import { AuthImage } from '@components/AuthImage';
import { Container } from './styles';

export type TLoginForm = {
  login: string,
  pass: string,
}
export type TRegisterForm = {
  name: string,
  email: string,
  password: string,
  socialReason: string,
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
  password: '',
  socialReason: '',
  tradingName: '',
  cnpj: '',
};

export function Auth () {
  const [loginForm, setLoginForm] = useState<TLoginForm>(defaultLoginForm);
  const [registerForm, setRegisterForm] = useState<TRegisterForm>(defaultRegisterForm);
  const [registerStatus, setRegisterStatus] = useState<boolean>(false);
  const [errorFields, setErrorFields] = useState<string[]>(['']);

  const handleChangeForm = () => {
    setRegisterStatus(prev => !prev);

    setTimeout(() => {
      setErrorFields([]);
      setLoginForm(defaultLoginForm);
      setRegisterForm(defaultRegisterForm);
    }, 500);
  };

  return (
    <Container>
      <RegisterForm 
        errorFields={errorFields}
        setErrorFields={setErrorFields}
        registerForm={registerForm}
        setRegisterForm={setRegisterForm}
        handleChangeForm={handleChangeForm}
      />      

      <LoginForm
        errorFields={errorFields}
        setErrorFields={setErrorFields}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        handleChangeForm={handleChangeForm}
      />

      <AuthImage registerStatus={registerStatus}/>    
    </Container>
  );
}