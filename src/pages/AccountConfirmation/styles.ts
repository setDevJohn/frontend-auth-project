import styled from 'styled-components';

type TSpanTextFrom = {
  $loading: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100vh;
`;
export const FormContainer = styled.div`
  box-shadow: 1px 2px 20px -4px #0004;
  margin-top: 18vh;
  padding: 20px;
  border-radius: 7px;
`;
export const RouteBack = styled.p`
  cursor: pointer;
  font-size: 1.3rem;
  color: #5151a2;
  margin-bottom: 10px;
  width: 100%;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  font-size: 2.7rem;
  color: #5151a2;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  color: #686868;
  font-size: 1.3rem;
  margin-bottom: 18px;
  width: 100%;
`;
export const SpanTextForm = styled.span<TSpanTextFrom>`
  color: #004;
  font-size: 1.3rem;
  border-bottom: 1px solid #9c9cc5;
  margin: 10px auto 0 auto;
  cursor: pointer;
  opacity: ${({ $loading }) => $loading ? 0.8 : 1};
  pointer-events: ${({ $loading }) => $loading && 'none'};
`;


