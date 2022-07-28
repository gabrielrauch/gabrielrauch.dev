import React from 'react'
import { StyledTitle } from './NavbarTitle.styles'

interface NavbarTitleProps {
  children: React.ReactNode
}

const NavbarTitle: React.FC<NavbarTitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default NavbarTitle
