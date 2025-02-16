import image from '@assets/gifs/auth-image.gif';
import { 
  ImageContainer,
  ImageTitle,
  ImageAnchor,
  LoginImage,
} from './styles';

export function AuthImage ({ registerImageActive }: {registerImageActive: boolean}) {
  return (
    <ImageContainer $register={registerImageActive}>
      <ImageTitle>
        {registerImageActive 
          ? 'Novo por aqui? crie sua conta agora!' 
          : 'Bem-vindo de volta! Acesse já sua conta.'}
      </ImageTitle>

      <ImageAnchor href="https://storyset.com/user" target="_blank">
        <LoginImage src={image} alt="Imagem de autenticação do StorySet" />
      </ImageAnchor>
    </ImageContainer>
  );
}