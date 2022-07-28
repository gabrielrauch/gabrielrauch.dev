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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  gap: 10px;
  width: 100%;
  max-width: 1500px;
  margin: 500px;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
    height: 100px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0;
  }
`

export { StyledNavbar, NavbarContainer }
