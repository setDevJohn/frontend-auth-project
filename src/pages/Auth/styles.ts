import styled from "styled-components";

type ImageContainerProp = {
  $register: boolean
};

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100vh;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const FormTitle = styled.h2`
  font-size: 2.7rem;
  margin-bottom: 10px;
  color: #5151a2;
`;
export const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SpanTextForm = styled.span`
  color: #004;
  font-size: 1.3rem;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
`;
export const ImageContainer = styled.div<ImageContainerProp>`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #5151a2;
  transition: all 0.8s ease;
  transform: translateX(${({$register}) => $register ? '100%' : '0%'}) scale(1.3);
  clip-path: polygon(0% 0%, 87% 0%, 100% 100%, 13% 100%);
  padding: 28px;
  width: 50%;
  height: 100vh;
`;
export const ImageTitle = styled.p`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
`;
export const ImageAnchor = styled.a`
  width: 50%;
`;
export const AuthImage = styled.img`
  max-width: 100%;
`;