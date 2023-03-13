import './App.css'
import  { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Register from './components/authentication/Register/Register'
import Login from './components/authentication/Login/Login'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import TemplateScreen from './components/resumebuilder/TemplateScreen'
import Navbar from './components/otherComponents/Navbar/Navbar'
import Chatscreen from './chatbot/Chatscreen'
import HomeScreen from './components/HomeScreen/HomeScreen'
import BlogPage from './components/BlogPage/BlogPage'
import CommunityPage from './components/CommunityPage/CommunityPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/ResumeBuilder' element={<TemplateScreen/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/Blog' element={<BlogPage/>}/>
        <Route path='/Community' element={<CommunityPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
