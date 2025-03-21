import { fadeIn } from '@styles/animations';
import { device } from 'constants/mediaSizes';
import styled from 'styled-components';

type TSpanTextFrom = {
  $lastSpan?: boolean
  $loading: boolean;
}

export const FormContainer = styled.div`
  grid-column: 2/2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 100vh;
  animation: ${fadeIn} .6s ease;

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
`;
export const SpanTextForm = styled.span<TSpanTextFrom>`
  color: ${({ theme }) => theme.contrastTextColor};
  font-size: 1.3rem;
  line-height: 11px;
  border-bottom: 1px solid #9c9cc5;
  margin: 0 auto;
  cursor: pointer;
  margin-top: ${({ $lastSpan }) => $lastSpan && '-4px'};
  opacity: ${({ $loading }) => $loading ? 0.8 : 1};
  pointer-events: ${({ $loading }) => $loading && 'none'};
`;
