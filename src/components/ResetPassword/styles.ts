import styled from 'styled-components';

type TContainer = {
  $resetModal: boolean;
}

export const Container = styled.div<TContainer>`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: ${({ $resetModal }) => $resetModal ? '100vh' : '0px'};
  transition: all 0.8s ease;
`;
export const FormContainer = styled.div`
  box-shadow: 1px 2px 20px -4px #0004;
  margin-top: 18vh;
  padding: 20px;
  border-radius: 7px;

  /* transition: allease 0.7s;
  transform: rotate3d(0, 1, 0, 180deg);
  transform: rotate3d(0, 1, 0, 0deg); */
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
  max-width: 300px;
`;
