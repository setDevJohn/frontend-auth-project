import { InputContainer, InputEntrie, InputLabel } from "./styles";

type ComponentProps = {
  label: string,
  name: string,
  value: string,
  handleChange: (target: EventTarget & HTMLInputElement) => void,
}

export function InputWithLabel({label, value, name, handleChange}: ComponentProps) {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputEntrie 
        type="text"
        name={name}
        value={value}
        onChange={({target}) => handleChange(target)}
      />
    </InputContainer>
  )
}