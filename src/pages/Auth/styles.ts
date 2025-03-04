import { device } from 'constants/mediaSizes';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media ${device.laptop} { 
    display: flex;
    flex-direction: column;
  }
`;
export const LogoContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  margin-bottom: 5vh;
  width: 100%;

  @media ${device.laptop} {
    display: flex;
  }
`;
export const LogoImage = styled.img`
  width: 35px;
`;
export const Title = styled.h1`
  font-size: 20px;
`;
