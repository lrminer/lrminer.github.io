import styled from 'styled-components'

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 25px;
  cursor: pointer;
  //display: flex;
  font-size: 0.5rem;
  //justify-content: space-between;
  //margin: 0 auto;
  //overflow: hidden;
  //padding: 0.5rem;
  //position: relative;
  //top: 50px;
  width: 3rem;
  max-height: 2rem;
  //height: 4rem;

  
`;
export default ToggleContainer;