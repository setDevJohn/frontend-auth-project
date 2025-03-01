import notFoundImage from '@assets/gifs/not-found.gif';
import { Container, Title, Text, Image, Anchor } from './styles';

export function NotFound () {
  return (
    <Container>
      <Title>Página não encontrada</Title>
      <Text>Ops! Parece que você se perdeu no caminho.</Text>

      <Anchor href="https://storyset.com/work" target="_blank">
        <Image src={notFoundImage} alt="Imagen de página não encontrada" />
      </Anchor>
    </Container>
  );
}
