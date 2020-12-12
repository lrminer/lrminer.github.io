import styled from 'styled-components'

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.5rem;
  width: 3rem;
  max-height: 2rem;

  &:focus {
    outline: none;
  }
  
`;
export default ToggleContainer;