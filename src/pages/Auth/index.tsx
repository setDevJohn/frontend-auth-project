import { FormEvent, useState } from "react";
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
  InputGroup,
  InputsContainer,
  SpanTextForm
} from "./styles";
import { FormButton } from "../../components/FormButton";

type TLoginChange = {
  name: string,
  value: string,
}
type TLoginForm = {
  login: string,
  pass: string,
}
type TRegisterForm = {
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
}
const defaultRegisterForm = {
  name: '',
  email: '',
  password: '',
  socialReason: '',
  tradingName: '',
  cnpj: '',
}

export function Auth() {
  const [loginForm, setLoginForm] = useState<TLoginForm>(defaultLoginForm)
  const [registerForm, setRegisterForm] = useState<TRegisterForm>(defaultRegisterForm)
  const [registerStatus, setRegisterStatus] = useState<boolean>(false);
  const [errorFields, setErrorFields] = useState<string[]>(['']);

  function handleLoginChange({ name, value }: TLoginChange) {
    setErrorFields(prev => prev.filter(field => field !== name))
    setLoginForm(prev => ({...prev, [name]: value}))
  }

  function handleRegisterChange({ name, value }: TLoginChange) {
    setErrorFields(prev => prev.filter(field => field !== name))
    setRegisterForm(prev => ({...prev, [name]: value}))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const changeForm = () => {
    setRegisterStatus(prev => !prev);

    setTimeout(() => {
      setErrorFields([]);
      setLoginForm(defaultLoginForm);
      setRegisterForm(defaultRegisterForm);
    }, 500)
  }

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormTitle>REGISTRO</FormTitle>

          <InputsContainer>
            <InputGroup>
              {register.user.map((curField, i) => (
                <InputWithLabel
                  key={i}
                  name={curField.name}
                  label={curField.label}
                  type={curField.type ?? null}
                  error={errorFields.includes(curField.name)}
                  value={registerForm[curField.name as keyof TRegisterForm]}
                  handleChange={(target) => handleRegisterChange(target)}
                />
              ))}
            </InputGroup>

            <InputGroup>
              {register.company.map((curField, i) => (
                <InputWithLabel
                  key={i}
                  name={curField.name}
                  label={curField.label}
                  error={errorFields.includes(curField.name)}
                  value={registerForm[curField.name as keyof TRegisterForm]}
                  handleChange={(target) => handleRegisterChange(target)}
                />
              ))}
            </InputGroup>
          </InputsContainer>

          <FormButton text="REGISTRAR"/>

          <SpanTextForm onClick={changeForm}>
            Já possui um cadastro? Faça login
          </SpanTextForm>
        </Form>
      </FormContainer>

      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormTitle>LOGIN</FormTitle>

          {login.map((curField, i) => (
            <InputWithLabel
              key={i}
              name={curField.name}
              label={curField.label}
              type={curField.type ?? null} 
              error={errorFields.includes(curField.name)}
              value={loginForm[curField.name as keyof TLoginForm]}
              handleChange={(target) => handleLoginChange(target)}
            />
          ))}

          <FormButton text="REGISTRAR"/>

          <SpanTextForm onClick={changeForm}>
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