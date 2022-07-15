import styled from 'styled-components'

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background: transparent;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  gap: 10px;
  max-width: 1500px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    max-width: 100%;
    padding: 0 20px;
  }
`

export { StyledNavbar, NavbarContainer }
