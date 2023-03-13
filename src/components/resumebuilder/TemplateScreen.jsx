import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Navbar from '../otherComponents/Navbar/Navbar'
function TemplateScreen() {
  return (
    <div styles={'background: linear-gradient(125.36deg, #D4E7FE 1.55%, #FFFFFF 44.5%)'}>
      <Navbar />
      <Header />
      <Body />
    </div>
  )
}

export default TemplateScreen
