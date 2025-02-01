import { Button } from './styles';

type ComponetProps = {
  text?: string
}

export function FormButton ({ text }: ComponetProps) {
  return (
    <Button type="submit" value={text || 'ENTRAR'}/>
  );
}