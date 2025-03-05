import styled from 'styled-components';

type TInputEntrie = {
  $error: boolean;
  styles?: React.CSSProperties;
}

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const InputLabel = styled.label`
  position: absolute;
  top: 11px;
  left: 15px;
  color: ${({ theme }) => theme.darkTextColor};
  font-family: ${({ theme }) => theme.secondaryFont};
  font-size: 1.4rem;
  line-height: 6px;
  transition: all 0.3s ease;
  pointer-events: none;
`;
export const InputEntrie = styled.input<TInputEntrie>`
  color: ${({ theme }) => theme.darkTextColor};
  font-family: ${({ theme }) => theme.secondaryFont};
  font-size: 1.3rem;
  border: ${({ $error }) => `1px solid ${$error ? '#e23333' : '#eee'}`};
  border-radius: 4px;
  box-shadow: 1px 2px 7px -2px #0004;
  padding: 5px 7px 4px 13px;
  width: 100%;
  max-width: 243px;
  ${({ styles }) => styles && { ...styles }};
  
  &:focus {
    outline: none;
  }
  &:focus + label,
  &:not([value=""]) + label {
    top: -3px;
    left: 10px;
    background-color: ${({ theme }) => theme.backgroundColor};
    font-size: 1.2rem;
    line-height: 6px;
  }
`;