import { device } from 'constants/mediaSizes';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin-top: 5%;
  text-align: center;

  @media ${device.mobile} {
    font-size: 2.2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;

  @media ${device.mobile} {
    font-size: 1.2rem;
  }
`;

export const Anchor = styled.a`
  display: flex;
`;

export const Image = styled.img`
  max-width: 100%;
`;
