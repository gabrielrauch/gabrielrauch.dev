import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin: 0;
  &:hover {
    cursor: pointer;
    background-color: yellow;
    transition: 0.2s ease-in-out; 
  }
  @media (max-width: 768px) {
    font-size: 1.0rem;
  }
`

export { StyledTitle }
