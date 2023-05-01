//TODO: Add Signup and Login only on Welcome Navbar

import React from 'react';
import './App.css';
import Welcome from './welcome/Welcome'
import Connect from './Connect/Connect';
import JobPortal from './Jobs/Jobs';
import Prompt from './Prompt/Prompt';
import CourseScreen from './Courses/Courses';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './authentication/Signup/Signup';
import Login from './authentication/Login/Login';
import TemplateScreen from './ResumeBuilder/TemplateScreen';
import BlogEditor from './Blog/Body/Editor/Editor';
import Community from './community/Community';
import HomeScreen from './HomeScreen/HomeScreen';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Prompt' element={<Prompt/>}/>
      <Route path='/ResumeBuilder' element={<TemplateScreen/>}/>
      <Route path='/Blog' element={<BlogEditor/>}/>
      <Route path='/Community' element={<Community/>}/>
      <Route path='/Jobs' element={<JobPortal/>}/>
      <Route path='/Courses' element={<CourseScreen/>}/>
      <Route path='/Connect' element={<Connect/>}/>
      <Route path='/HomeScreen' element={<HomeScreen/>}/>
    </Routes>
    </BrowserRouter>
  )
}
