import { CircularProgress } from '@mui/material';
import { LoadingContainer } from './styles';

type CircularLoadingProps = {
  bgColor?: string;
  color?: string;
  size?: number;
};

export function LoadingCircular ({ bgColor, color, size }: CircularLoadingProps) {
  return (
    <LoadingContainer $bgColor={bgColor}>
      <CircularProgress
        size={size || 55}
        style={{ color: `${color || '#004'}` }}
      />
    </LoadingContainer>
  );
}