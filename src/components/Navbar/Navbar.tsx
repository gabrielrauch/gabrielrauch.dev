import React from 'react'
import { NavbarContainer, StyledNavbar } from './Navbar.styles'

interface NavbarProps {
  children: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <StyledNavbar>
      <NavbarContainer>{children}</NavbarContainer>
    </StyledNavbar>
  )
}

export { Navbar }
