import { Dot, LoadingContainer } from './styles';

export const LoadingDots = ({ color = '#fff', size = 8, gap = 6 }) => {
  return (
    <LoadingContainer  $gap={gap}>
      {[...Array(3)].map((_, index) => (
        <Dot key={index} $size={size} $color={color} $index={index} />
      ))}
    </LoadingContainer>
  );
};