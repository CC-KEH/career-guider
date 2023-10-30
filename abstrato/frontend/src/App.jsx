import React from "react";
import "./App.css";
import Connect from "./Connect/Connect";
import JobPortal from "./Jobs/Jobs";
import Prompt from "./Prompt/Prompt";
import CourseScreen from "./Courses/Courses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./authentication/Signup/Signup";
import Login from "./authentication/Login/Login";
import TemplateScreen from "./ResumeBuilder/TemplateScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import { Welcome } from "./Welcome/Welcome";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/prompt" element={<Prompt />} />
        <Route path="/resumeBuilder" element={<TemplateScreen />} />
        <Route path="/jobs" element={<JobPortal />} />
        <Route path="/courses" element={<CourseScreen />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/homeScreen" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
