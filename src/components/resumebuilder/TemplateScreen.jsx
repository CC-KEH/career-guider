import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import NavbarIn from '../otherComponents/Navbar/NavbarIn'
function TemplateScreen() {
  return (
    <div styles={'background: linear-gradient(125.36deg, #D4E7FE 1.55%, #FFFFFF 44.5%)'}>
      <NavbarIn />
      <Header />
      <Body />
    </div>
  )
}

export default TemplateScreen
