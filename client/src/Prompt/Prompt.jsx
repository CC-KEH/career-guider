import React from 'react'
import background from '../images/background4.png'
import { useState } from 'react';
import styles from './Prompt.module.css';
import { Navigate, useNavigate } from 'react-router-dom'

const Prompt=()=> {

  const initialFormData = {
    section1: {
      name: "",
      email: "",
      phone: "",
      experience: "",
    },
    section2: {
      skills: "",
      certifications: "",
      education: "",
      achievements: "",
    },
    section3: {
      dreamJob: "",
      techInterest: "",
      resources: "",
      idealCompany: "",
    },
  };

const [section, setSection] = useState(0);
const [isFadingOut, setIsFadingOut] = useState(false);

const [currentJobTitle, setCurrentJobTitle] = useState('');
const [jobTitleDuration, setJobTitleDuration] = useState('');
const [educationBackground, setEducationBackground] = useState('');
const [technicalSkills, setTechnicalSkills] = useState('');
const [favoriteTools, setFavoriteTools] = useState('');

const [currentJobChallenges, setCurrentJobChallenges] = useState('');
const [projectInterests, setProjectInterests] = useState('');
const [longTermGoals, setLongTermGoals] = useState('');
const [techAreasToLearn, setTechAreasToLearn] = useState('');
const [dreamJob, setDreamJob] = useState('');

const [coursesResources, setCoursesResources] = useState('');


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
    navigate('/Courses');
  };

const renderSectionLinks = () => {
    return (
        
      <div className="section-links">
        <span className={section === 0 ? 'active' : ''} onClick={() => setSection(0)}>Section 0</span>
        <span className={section === 1 ? 'active' : ''} onClick={() => setSection(1)}>Section 1</span>
        <span className={section === 2 ? 'active' : ''} onClick={() => setSection(2)}>Section 2</span>
        <span className={section === 3 ? 'active' : ''} onClick={() => setSection(3)}>Section 3</span>
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
            <p className="font-bold text-xl ml-1">Current Position and Skills</p>
            <p className="ml-1">What is your current job title?</p>
            <input className={styles.input} type="text" value={currentJobTitle} onChange={(e) => setCurrentJobTitle(e.target.value)} />
            <p className="ml-1">How long have you been in this role?</p>
            <input className={styles.input} type="text" value={jobTitleDuration} onChange={(e) => setJobTitleDuration(e.target.value)} />
            <p className="ml-1">What is your educational background?</p>
            <input className={styles.input} type="text" value={educationBackground} onChange={(e) => setEducationBackground(e.target.value)} />
            <p className="ml-1">What programming languages or technical skills are you proficient in?</p>
            <input className={styles.input} type="text" value={technicalSkills} onChange={(e) => setTechnicalSkills(e.target.value)} />
            <p className="ml-1">What are your favorite technology tools or platforms that you use regularly?</p>
            <input className={styles.input} type="text" value={favoriteTools} onChange={(e) => setFavoriteTools(e.target.value)} />
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
            <p className="font-bold text-xl">Career Goals and Aspirations</p>
            <p className="ml-1">What are some of the biggest challenges you face in your current job?</p>
            <input className={styles.input} type="text" value={currentJobChallenges} onChange={(e) => setCurrentJobChallenges(e.target.value)} />
            <p className="ml-1">What kind of projects are you interested in working on, and what motivates you about them?</p>
            <input className={styles.input} type="text" value={projectInterests} onChange={(e) => setProjectInterests(e.target.value)} />
            <p className="ml-1">What are your long-term career goals in the tech industry, and what steps are you taking to achieve them?</p>
            <input className={styles.input} type="text" value={longTermGoals} onChange={(e) => setLongTermGoals(e.target.value)} />
            <p className="ml-1">Are there any specific areas of technology that you would like to learn more about?</p>
            <input className={styles.input} type="text" value={techAreasToLearn} onChange={(e) => setTechAreasToLearn(e.target.value)} />
            <p className="ml-1">What kind of job or company would be your dream position in the tech industry?</p>            
              <input className={styles.input} type="text" value={dreamJob} onChange={(e) => setDreamJob(e.target.value)} />
              <div className={styles.card_links}>
                {section > 0 ? <span onClick={() => handlePreviousSection(section - 1)}>Previous Section</span> : null}
                {section < 3 ? <span onClick={() => handleNextSection(section + 1)}>Next Section</span> : null}
              </div>
          </div>
          </div>
        )}
          {section === 3 && (
              <div className={isFadingOut ? styles.fadeOut : styles.fadeIn}>
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                  <p className="font-bold text-xl ml-0.5">Your prevous courses and resources</p>
                  <p className="ml-0.5 text-xm">What kind of courses or resources have you used in the past to improve your technical skills?</p>
                  <input className={styles.input} type="text" value={coursesResources} onChange={(e) => setCoursesResources(e.target.value)} />
                  <div className={styles.card_links}>
                     {section > 0 ? <span onClick={() => handlePreviousSection(section - 1)}>Previous Section</span> : null}
                 </div>
                    <button className={styles.button} disabled={!coursesResources} onClick={() => {handleSubmit}}>Submit</button>                  
              </div>
              </div>
          )}
  </div>
</div>
    </div>
  );
}

export default Prompt