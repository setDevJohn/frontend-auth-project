import { fadeIn } from '@styles/animations';
import { device } from 'constants/mediaSizes';
import styled from 'styled-components';

type TSpanTextFrom = {
  $loading: boolean;
}

export const FormContainer = styled.div`
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 100vh;
  animation: ${fadeIn} 0.5s ease;

  @media ${device.tablet} {
    justify-content: start;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const FormTitle = styled.h2`
  font-size: 2.7rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.mainColor};

  @media ${device.mobile} {
    width: 243px;
    margin: 0 auto 10px auto; 
  }
`;
export const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 30px;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SpanTextForm = styled.span<TSpanTextFrom>`
  color: ${({ theme }) => theme.contrastTextColor};
  font-size: 1.3rem;
  line-height: 11px;
  border-bottom: 1px solid #9c9cc5;
  margin: 0 auto;
  cursor: pointer;
  opacity: ${({ $loading }) => $loading ? 0.8 : 1};
  pointer-events: ${({ $loading }) => $loading && 'none'};
`;
