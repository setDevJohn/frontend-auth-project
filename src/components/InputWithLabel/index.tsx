import { InputContainer, InputEntrie, InputLabel } from "./styles";

type ComponentProps = {
  label: string,
  name: string,
  value: string,
  handleChange: (target: EventTarget & HTMLInputElement) => void,
  type?: string | null,
}

export function InputWithLabel({label, value, name, type, handleChange}: ComponentProps) {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputEntrie 
        type={type || "text"}
        name={name}
        value={value}
        onChange={({target}) => handleChange(target)}
      />
    </InputContainer>
  )
}