import './App.css'
import  { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Register from './components/authentication/Register/Register'
import Login from './components/authentication/Login/Login'
import Profile from './components/Profile'
import TemplateScreen from './components/resumebuilder/TemplateScreen'
import HomeScreen from './components/HomeScreen/HomeScreen'
import BlogPage from './components/BlogPage/BlogPage'
import CommunityPage from './components/CommunityPage/CommunityPage'
import Welcome from './components/Welcome/Welcome'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/ResumeBuilder' element={<TemplateScreen/>}/>
        <Route path='/HomeScreen' element={<HomeScreen/>}/>
        <Route path='/Blog' element={<BlogPage/>}/>
        <Route path='/Community' element={<CommunityPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
