import styled from 'styled-components';

type TSpanTextFrom = {
  $loading: boolean;
}

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 15px;
  height: 100vh;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const FormTitle = styled.h2`
  font-size: 2.7rem;
  margin-bottom: 10px;
  color: #5151a2;
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
  color: #004;
  font-size: 1.3rem;
  text-decoration: underline;
  margin: 0 auto;
  cursor: pointer;
  opacity: ${({ $loading }) => $loading ? 0.8 : 1};
  pointer-events: ${({ $loading }) => $loading && 'none'};
`;
