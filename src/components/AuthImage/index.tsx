import image from '@assets/gifs/auth-image.gif';
import { 
  ImageContainer,
  ImageTitle,
  ImageAnchor,
  LoginImage,
} from './styles';

export function AuthImage ({ registerStatus }: {registerStatus: boolean}) {
  return (
    <ImageContainer $register={registerStatus}>
      <ImageTitle>
        {registerStatus 
          ? 'Novo por aqui? crie sua conta agora!' 
          : 'Bem-vindo de volta! Acesse já sua conta.'}
      </ImageTitle>

      <ImageAnchor href="https://storyset.com/user" target="_blank">
        <LoginImage src={image} alt="Imagem de autenticação do StorySet" />
      </ImageAnchor>
    </ImageContainer>
  );
}