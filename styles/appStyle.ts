import styled from 'styled-components';

interface ButtonInterface {
  num: number;
}

export const StyledButton = styled.button`
  width: 120px;
  height: 80px;
  background-color: ${({ num }: ButtonInterface) => `#${num}00000;`};
  color: red;
`;
