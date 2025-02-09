import styled from 'styled-components';

type TResetPassword = {
  $resetModal: boolean;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;




export const ResetPassword = styled.div<TResetPassword>`
  position: absolute;
  background-color: #527493;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ $resetModal }) => $resetModal ? '100vh' : '0px'};
  transition: all 0.4s ease;
`;