import React from 'react'
import { Navbar as Nav } from 'components/Navbar/Navbar'
import NavbarTitle from 'components/NavbarTitle/NavbarTitle'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Link href={'/'}>
        <NavbarTitle>{'gabrielrauch.dev'}</NavbarTitle>
      </Link>
    </Nav>
  )
}

export default Navbar
