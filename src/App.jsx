import './App.css'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/authentication/Signup'
import Login from './components/authentication/Login'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import TemplateScreen from './components/resumebuilder/TemplateScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TemplateScreen/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
