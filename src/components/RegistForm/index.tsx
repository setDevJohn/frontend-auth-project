import { Dispatch, FormEvent, SetStateAction } from 'react';
import { mask } from '@utils/mask';
import { toastWarn } from '@utils/toast';
import { TRegisterForm } from '@pages/Auth';
import { register } from '@pages/Auth/inputList';
import { FormButton } from '../FormButton';
import { InputWithLabel } from '../InputWithLabel';
import { 
  FormContainer,
  Form,
  FormTitle,
  InputsContainer,
  InputGroup,
  SpanTextForm,
} from './styles';

type TLoginChange = {
  name: string,
  value: string,
}
type ComponentProps = {
  errorFields: string[],
  setErrorFields: Dispatch<SetStateAction<string[]>>,
  registerForm: TRegisterForm,
  setRegisterForm: Dispatch<SetStateAction<TRegisterForm>>,
  handleChangeForm: () => void,
}

export function RegisterForm ({
  errorFields,
  setErrorFields,
  registerForm,
  setRegisterForm,
  handleChangeForm,
}: ComponentProps) {
  function handleRegisterChange ({ name, value }: TLoginChange) {
    setErrorFields(prev => prev.filter(field => field !== name));
    
    const fieldMask = mask[name as keyof typeof mask]; 
    const formattedValue = fieldMask ? fieldMask(value) : value;

    setRegisterForm(prev => ({ ...prev, [name]: formattedValue }));
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errorFields = Object.entries(registerForm)
      .filter(field => !field[1]);
    if (errorFields.length) {
      setErrorFields(errorFields.map(field => field[0]));
      return toastWarn('Preencha todos os campos');
    }
  }
  
  return (
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

        <SpanTextForm onClick={handleChangeForm}>
          Já possui um cadastro? Faça login
        </SpanTextForm>
      </Form>
    </FormContainer>
  );
}