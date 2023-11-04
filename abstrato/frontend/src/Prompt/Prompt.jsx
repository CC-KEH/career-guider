import React from 'react'
import background from '../images/background4.png'
import { useState } from 'react';
import styles from './Prompt.module.css';
import Axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';

const Prompt=()=> {
const [navigate, setNavigate] = useState(false);
const [section, setSection] = useState(0);
const [isFadingOut, setIsFadingOut] = useState(false);
const [skills, setSkills] = useState('');
const [certifications, setCertifications] = useState('');
const [education, setEducation] = useState('');
const [resources, setResources] = useState('');
const [techInterest, setTechInterest] = useState('');
const [dreamJob, setDreamJob] = useState('');
const [idealCompany, setIdealCompany] = useState('');

const sendFormDataToDjango = async (formData) => {
  try {
    const response = await Axios.post('http://127.0.0.1:8000/accounts/get-data', formData);
    console.log('Data sent successfully:', response.data);
    const { roadmap, summary } = response.data;
    navigate('/HomeScreen', { roadmap, summary});
  } catch (error) {
    console.error('Error sending data:', error);
  }
};



const handleNextSection = () => {
    setIsFadingOut(true);

    setTimeout(() => {
      setSection(section + 1);
      setIsFadingOut(false);
    }, 500);
  };

  const handlePreviousSection = () => {
    setIsFadingOut(true);

    setTimeout(() => {
      setSection(section - 1);
      setIsFadingOut(false);
    }, 500);
  };

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      skills: skills,
      certifications: certifications,
      education: education,
      resources: resources,
      techInterest: techInterest,
      dreamJob: dreamJob,
      idealCompany: idealCompany,
    };
    sendFormDataToDjango(formData);
  };

const renderSectionLinks = () => {
    return (
        
      <div className="section-links">
        <span className={section === 0 ? 'active' : ''} onClick={() => setSection(0)}>Section 0</span>
        <span className={section === 1 ? 'active' : ''} onClick={() => setSection(1)}>Section 1</span>
        <span className={section === 2 ? 'active' : ''} onClick={() => setSection(2)}>Section 2</span>
      </div>
    );
  };


  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50" >
  <img src={background} alt="" className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"  width="100%" height="100%" />
  <div className="relative bg-white px-6 py-10 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10 my-10  max-h-fit">
  {section === 0 && (
    <div className="mx-auto max-w-md">
      <h6>Abstrato</h6>
      <div className="divide-y divide-gray-300/50">
        <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
          <h1>Lets get you started</h1>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokelinecap="round" strokelinejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p className="ml-4">
                Tell us about yourself and your career goals  
              </p>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokelinecap="round" strokelinejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p className="ml-4">
                Let us get best resources and path for you
              </p>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokelinecap="round" strokelinejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p className="ml-4">Tracking your learning journey</p>
            </li>
          </ul>
          <p>Don't wory, You can fill this prompt as many times as you want.</p>
        </div>
        <div className="pt-8 text-base font-semibold leading-7">
          <p className="text-gray-900">Want to dig deeper?</p>
          <p>
            <a href="https://github.com/CC-KEH/career-guider" className="text-sky-500 hover:text-sky-600">Want to help us? &rarr;</a>
          </p>
          <div className={styles.card_links}>
            {section < 1 ? <span onClick={() => handleNextSection(section + 1)}>Next Section</span> : null}
            </div>
        </div>
      </div>
    </div>
    )}
    {section === 1 && (
          <div className={isFadingOut ? styles.fadeOut : styles.fadeIn}>
          <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
            <p className="font-bold text-xl">Career Goals and Aspirations</p>
            <p className="ml-1">Let's start with your current skills.</p>
            <input className={styles.input} type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />

            <p className="ml-1">Do you have any certifications, If yes then please link them down.</p>
            <input className={styles.input} type="text" value={certifications} onChange={(e) => setCertifications(e.target.value)} />
            
            <p className="ml-1">Tell us about your education background.</p>
            <input className={styles.input} type="text" value={education} onChange={(e) => setEducation(e.target.value)} />
            
            <p className="ml-1">Ever taken any online course? If yes please link them down.</p>
            <input className={styles.input} type="text" value={resources} onChange={(e) => setResources(e.target.value)} />
            
            <div className={styles.card_links}>
                {section > 0 ? <span onClick={() => handlePreviousSection(section - 1)}>Previous Section</span> : null}
                {section < 2 ? <span onClick={() => handleNextSection(section + 1)}>Next Section</span> : null}
              </div>
          </div>
          </div>
        )}
          {section === 2 && (
              <div className={isFadingOut ? styles.fadeOut : styles.fadeIn}>
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                  <p className="font-bold text-xl ml-0.5">Lets talk about you future now</p>
                  
                  <p className="ml-0.5 text-xm">List down some skills you want learn.</p>
                  <input className={styles.input} type="text" value={techInterest} onChange={(e) => setTechInterest(e.target.value)} />
                  
                  <p className="ml-1">What kind of job or company would be your dream position in the tech industry?</p>            
                  <input className={styles.input} type="text" value={dreamJob} onChange={(e) => setDreamJob(e.target.value)} />

                  <p className="ml-1">What kind of company would be your dream position in the tech industry?</p>
                  <input className={styles.input} type="text" value={idealCompany} onChange={(e) => setIdealCompany(e.target.value)} />

                  <div className={styles.card_links}>
                     {section > 0 ? <span onClick={() => handlePreviousSection(section - 1)}>Previous Section</span> : null}
                 </div>
                    <button className={styles.button} onClick= {handleSubmit}>Submit</button>                  
              </div>
              </div>
          )}
  </div>
</div>
    </div>
  );
}

export default Prompt