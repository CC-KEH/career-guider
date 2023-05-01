import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProgressBar from '../HomeScreen/ProgressBar';
import styles from './Welcome.module.css';
import { Navigate, useNavigate,Link } from 'react-router-dom'
import frontsvg from  '../assets/resumebuilder_images/frontimage.svg'
function Welcome() {
    const handleRefresh = () => {
		window.location.reload();
	  };
  return (
    <>
    <div className="bg-white w-full h-20 mb-10 shadow-md px-4 md:px-0 fixed z-10 container-fluid">
		<div className="flex container mx-auto justify-between items-center h-full">
		<h1 className="logo me-auto text-2xl img-fluid"><a href="index.html" onClick={handleRefresh}>Abstrato</a></h1>
			<div className="flex self-end items-end h-full w-auto space-x-4">
				<Link to="/Signup" className="hidden sm:flex font-bold text-xl text-gray-800 border-b-4 border-green-700 pb-2 px-3 items-center h-5/6">Jobs</Link>
				<Link to="/Signup" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6 ">Courses</Link>
				<Link to="/Signup" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6">Connect</Link>
				<Link to="/Signup" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6">Community</Link>
				<Link to="/Signup" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6">Build Resume</Link>
				<Link to="/Signup" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6">Signup</Link> 	
				<Link to="/Login" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6">Login</Link> 	
				<svg className="text-gray-600 rounded-full hover:bg-gray-100 h-14 w-14 self-center p-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path></svg>
        		<svg className="text-gray-600 rounded-full hover:bg-gray-100 h-14 w-14 self-center p-3"  stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"  height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
			</div>
		</div>
	</div>
    <div className="hidden md:flex container mx-auto space-x-3 pt-20"></div>
    <div className={styles.header_container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Welcome to <span>Abstrato</span>.
        </p>
        <p className={styles.heading}>
          Need a hand?
        </p>
        <p className={styles.heading}>
        It's <span>free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={frontsvg} alt="Front-Image" />
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <ProgressBar/>
          </div>        
          <div className={styles.text}>
            Python
          </div>
      </div>
      <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <ProgressBar/>
          </div>        
          <div className={styles.text}>
            React
          </div>
      </div>
      <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <ProgressBar/>
          </div>        
          <div className={styles.text}>
            Html
          </div>
      </div>
    </div>
    </>

  )
}

export default Welcome
