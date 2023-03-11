import './App.css'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/authentication/Signup'
import Login from './components/authentication/Login'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import TemplateScreen from './components/resumebuilder/TemplateScreen'
import Navbar from './components/otherComponents/Navbar/Navbar'
import Nav from './components/otherComponents/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Navbar/>}/> */}
        <Route path='/' element={<TemplateScreen/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
