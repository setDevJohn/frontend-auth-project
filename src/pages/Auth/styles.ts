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
  padding: 15px;
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
  gap: 10px;
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
  transition: transform 0.8s ease, clip-path 0.8s ease-out 0.1s;
  transform: translateX(${({$register}) => $register ? '100%' : '0%'});
  clip-path: polygon(${({$register}) =>  !$register ? '0% 0%, 100% 0%, 88% 100%, 0% 100%' : '0% 0%, 100% 0%, 100% 100%, 14% 100%'});
  padding: 50px;
  width: 50%;
  height: 100vh;
`;
export const ImageTitle = styled.p`
  color: #fff;
  font-size: 2.3rem;
  font-weight: 600;
  text-align: center;
`;
export const ImageAnchor = styled.a`
  width: 90%;
`;
export const AuthImage = styled.img`
  width: 100%;
  max-width: 500px;

`;