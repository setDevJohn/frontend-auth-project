import { InputContainer, InputEntrie, InputLabel } from './styles';

type ComponentProps = {
  label: string,
  name: string,
  value: string,
  handleChange: (target: EventTarget & HTMLInputElement) => void,
  error?: boolean,
  type?: string | null,
  styles?: React.CSSProperties,
}

export function InputWithLabel ({ 
  label,
  value,
  name,
  handleChange,
  type,
  error = false,
  styles,
}: ComponentProps) {
  return (
    <InputContainer>
      <InputEntrie 
        type={type || 'text'}
        name={name}
        value={value}
        $error={error}
        styles={styles}
        onChange={({ target }) => handleChange(target)}
      />

      <InputLabel>{label}</InputLabel>
    </InputContainer>
  );
}