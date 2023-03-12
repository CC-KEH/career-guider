import './App.css'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/authentication/Register/Register'
import Login from './components/authentication/Login/Login'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import TemplateScreen from './components/resumebuilder/TemplateScreen'
import Navbar from './components/otherComponents/Navbar/Navbar'
import Chatscreen from './chatbot/Chatscreen'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Register/>}/> */}
        {/* <Route path='/' element={<TemplateScreen/>}/> */}
        {/* <Route path='/' element={<Navbar/>}/> */}
        <Route path='/' element={<Chatscreen/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
