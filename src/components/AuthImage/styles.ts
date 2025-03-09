import styled from 'styled-components';
import { device } from './../../constants/mediaSizes';

type ImageContainerProp = {
  $register: boolean
};

export const ImageContainer = styled.div<ImageContainerProp>`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: ${({ theme }) => theme.mainColor};
  transition: transform 0.8s ease, clip-path 0.8s ease-out 0.1s;
  transform: translateX(${({ $register }) => $register ? '100%' : '0%'});
  clip-path: polygon(${({ $register }) =>  !$register ? '0% 0%, 100% 0%, 96% 100%, 0% 100%' : '0% 0%, 100% 0%, 100% 100%, 6% 100%'});
  padding: 50px;
  width: 50%;
  height: 100vh;

  @media ${device.tablet} {
    display: none;
  }
`;
export const ImageTitle = styled.p`
  color: ${({ theme }) => theme.lightTextColor};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;
export const ImageAnchor = styled.a`
  max-width: 90%;
`;
export const LoginImage = styled.img`
  width: 100%;
  max-width: 500px;
`;