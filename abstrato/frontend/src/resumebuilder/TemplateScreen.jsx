import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Navbar from '../components/Navbar/Navbar'
function TemplateScreen() {
  return (
      <>
      <Navbar />
      <div className="hidden md:flex container mx-auto space-x-3 pt-28">
      </div>
      <Header />
      <Body />
    </>
  )
}

export default TemplateScreen
