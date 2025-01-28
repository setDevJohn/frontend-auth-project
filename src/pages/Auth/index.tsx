import { useState } from "react";
import { InputWithLabel } from "../../components/InputWithLabel";
import { login, register } from "./inputList";
import authImage from "../../assets/gifs/auth-image.gif"
import { 
  AuthImage,
  Container,
  Form,
  FormContainer,
  FormTitle,
  ImageAnchor, 
  ImageContainer,
  ImageTitle,
  SpanTextForm
} from "./styles";

type TLoginChange = {
  name: string,
  value: string,
}
type TLoginForm = {
  email: string,
  password: string,
}
type TRegisterForm = {
  name: string,
  email: string,
  password: string,
}

const defaultLoginForm = {
  email: '',
  password: '',
}
const defaultRegisterForm = {
  name: '',
  email: '',
  password: '',
}

export function Auth() {
  const [loginForm, setLoginForm] = useState<TLoginForm>(defaultLoginForm)
  const [registerForm, setRegisterForm] = useState<TRegisterForm>(defaultRegisterForm)
  const [registerStatus, setRegisterStatus] = useState<boolean>(false);

  function handleLoginChange({ name, value }: TLoginChange) {
    setLoginForm(prev => ({...prev, [name]: value}))
  }
  function handleRegisterChange({ name, value }: TLoginChange) {
    setRegisterForm(prev => ({...prev, [name]: value}))
  }

  return (
    <Container>
      <FormContainer>
        <Form>
          <FormTitle>REGISTRO</FormTitle>

          {register.map((curField, i) => (
            <InputWithLabel
              key={i}
              name={curField.name}
              label={curField.label}
              value={registerForm[curField.name as keyof TRegisterForm]}
              handleChange={(target) => handleRegisterChange(target)}
            />
          ))}

          <SpanTextForm onClick={() => setRegisterStatus(false)}>
            Já possui um cadastro? Faça login
          </SpanTextForm>
        </Form>
      </FormContainer>

      <FormContainer>
        <Form>
          <FormTitle>LOGIN</FormTitle>

          {login.map((curField, i) => (
            <InputWithLabel
              key={i}
              name={curField.name}
              label={curField.label}
              value={loginForm[curField.name as keyof TLoginForm]}
              handleChange={(target) => handleLoginChange(target)}
            />
          ))}

          <SpanTextForm onClick={() => setRegisterStatus(true)}>
            Não possui um cadastro? Se inscreva!
          </SpanTextForm>
        </Form>
      </FormContainer>

      <ImageContainer $register={registerStatus}>
        <ImageTitle>
          {registerStatus 
            ? 'Novo por aqui? crie sua conta agora!' 
            : 'Bem-vindo de volta! Acesse já sua conta.'}
        </ImageTitle>

        <ImageAnchor href="https://storyset.com/user" target="_blank">
          <AuthImage src={authImage} alt="Imagem de autenticação do StorySet" />
        </ImageAnchor>
      </ImageContainer>
    </Container>
  )
}