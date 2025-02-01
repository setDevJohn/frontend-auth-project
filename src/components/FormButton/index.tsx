import { LinearProgress } from '@mui/material';
import { Button, ButtonContainer, Loading } from './styles';

type ComponetProps = {
  text?: string
  loading?: boolean;
}

export function FormButton ({ text, loading = false }: ComponetProps) {
  return (
    <ButtonContainer>
      <Button 
        type="submit"
        $loading={loading}
        disabled={loading}
        value={text || 'ENTRAR'}
      />

      {loading && (
        <Loading>
          <LinearProgress />
        </Loading>
      )}
    </ButtonContainer>
  );
}