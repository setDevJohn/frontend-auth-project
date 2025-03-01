import { Button, ButtonContainer, LoadingContainer } from './styles';
import { LoadingDots } from '@components/LoadingDots';

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
        value={loading ? '' : (text || 'ENTRAR')}
      />
      {loading && (
        <LoadingContainer>
          <LoadingDots/>
        </LoadingContainer>
      )}
    </ButtonContainer>
  );
}