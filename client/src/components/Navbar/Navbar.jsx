import React from 'react'
import { Navigate, useNavigate,Link } from 'react-router-dom'
function Navbar() {
	const handlelogout = async ()=>{
		try{
		  await account.deleteSession("current")
		  navigate('/')
		}catch(error){
		  console.log(error)
		}
	}
  const handleRefresh = () => {
		window.location.reload();
	  };
  return (
    <div className="bg-white w-full h-20 mb-10 shadow-md px-4 md:px-0 fixed z-10 container-fluid">
		<div className="flex container mx-auto justify-between items-center h-full">
		<h1 className="logo me-auto text-2xl img-fluid"><a href="index.html" onClick={handleRefresh}>Abstrato</a></h1>
			<div className="flex self-end items-end h-full w-auto space-x-4">
				<Link to="/Jobs" className="hidden sm:flex font-bold text-xl text-gray-800 border-b-4 border-green-700 pb-2 px-3 items-center h-5/6">Jobs</Link>
				<Link to="/Courses" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6 ">Courses</Link>
				<Link to="/Connect" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6">Connect</Link>
				<Link to="/Community" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6">Community</Link>
				<Link to="/ResumeBuilder" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6">Build Resume</Link>
				<Link to="/HomeScreen" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6">Profile</Link> 	
				<Link to="/" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6">Logout</Link> 	
				<svg className="text-gray-600 rounded-full hover:bg-gray-100 h-14 w-14 self-center p-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path></svg>
        		<svg className="text-gray-600 rounded-full hover:bg-gray-100 h-14 w-14 self-center p-3"  stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"  height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
			</div>
		</div>
	</div>
  )
}

export default Navbar
