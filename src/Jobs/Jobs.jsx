import React from 'react'
import Jobs from './jobs.json'

function JobPortal() {
	const handleClick = (url) => {
		// window.location.href = url;
		window.open(url, '_blank', 'noopener,noreferrer');
	};

    return (
    <div className="min-h-screen bg-gray-50">
	<div className="bg-white w-full h-20 mb-10 shadow-md px-4 md:px-0 fixed z-10">
		<div className="flex container mx-auto justify-between items-center h-full">
			<img className="h-12 w-auto" src="https://www.ziprecruiter.com/zrs/f810ae13/img/logos/ziprecruiter-blacktext.svg"/>
			<div className="flex self-end items-end h-full w-auto space-x-4">
				<a href="#" className="hidden sm:flex font-bold text-xl text-gray-800 border-b-4 border-green-700 pb-2 px-3 items-center h-5/6">Jobs</a>
				<a href="#" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6 ">Salaries</a>
				<a href="#" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6">Messages</a>
				<a href="#" className="hidden md:flex text-xl text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3 items-center h-5/6">Profile</a>
        <svg className="text-gray-600 rounded-full hover:bg-gray-100 h-14 w-14 self-center p-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path></svg>
        <svg className="text-gray-600 rounded-full hover:bg-gray-100 h-14 w-14 self-center p-3"  stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"  height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
			</div>
		</div>
	</div>
  <div className="hidden md:flex container mx-auto space-x-3 pt-28">
    <input className="rounded border py-2 w-72 pl-2" type="text" placeholder="Search job title or keyword"></input>
    <input className="rounded border py-2 w-72 pl-2" type="text" placeholder="Miami, Fl"></input>
    	<button className="bg-green-700 font-bold border py-2 px-10 rounded-3xl text-white focus:outline-none hover:bg-green-900">Search Jobs</button>

  </div>
	<div className="flex container mx-auto space-x-3 md:mt-14 px-4 md:px-0 pt-28 md:pt-0">
		<button className="font-bold text-lg text-gray-800 border-b-4 border-green-700 pb-2 px-3">Suggested Jobs</button>
		<button className="text-lg text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3">Applied Jobs</button>
		<button className="text-lg text-gray-500 border-b-4 border-transparent hover:border-gray-200 pb-2 px-3">Saved Jobs</button>
	</div>
		{
			Jobs.map(job =>{
				return(
					<div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-7 px-4 md:px-0">
			<div
				className="shadow-lg rounded-xl border border-gray-100 px-7 pt-12 bg-white relative transform transition duration-200 hover:-translate-y-2 hover:shadow-xl  overflow-hidden">
				<img className="h-10 mb-3" src="https://www.ziprecruiter.com/zrs/a6ce9cc6/img/candidate/default_company_logo.svg" />
				<h2 className="text-lg font-bold text-gray-600 leading-6 mb-2">{job.title}</h2>
				<h3 className="text-gray-600 text-lg">{job.company}</h3>
				<h3 className="text-gray-600 text-lg">{job.location}</h3>
				<div className="border border-gray-300 rounded-lg flex justify-between items-center p-2 mt-3 mb-4">
					<div className="flex items-center">
						<img className="pr-2" src="https://www.ziprecruiter.com/zrs/ecd8ffed/img/candidate/web_insights/good_match.svg"/>
						<p className="text-sm">{job.education}, Months Experience: {job.months_experience}</p>
					</div>
				</div>
				<div className="flex items-center">
					<svg className="text-gray-400" stroke="currentColor" fill="currentColor" stroke-width="0"
						viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<g>
							<path fill="none" d="M0 0h24v24H0z"></path>
							<path
								d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.5-8v2H11v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5.5V8H13V6h-2v2h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 1 1 0 1H8.5z">
							</path>
						</g>
					</svg>
					<p className="text-gray-600 text-base pl-2">{job.sal_low} to {job.sal_high} Annually</p>
				</div>
				<div className="flex items-center">
					<svg className="text-gray-400" stroke="currentColor" fill="currentColor" stroke-width="0"
						viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 2.013L9 2.013 9 9 2 9 2 15 9 15 9 21.987 15 21.987 15 15 22 15 22 9 15 9z"></path>
					</svg>
					<p className="text-gray-600 text-base pl-2">Medical</p>
				</div>
				<div className="flex items-center">
					<svg className="text-gray-400" stroke="currentColor" fill="currentColor" stroke-width="0"
						viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z">
						</path>
					</svg>
					<p className="text-gray-600 text-base pl-2">{job.Employment_type} </p>
				</div>
				<div className="mt-6">
					<p className="text-gray-400 leading-5 text-sm">
					</p>
				</div>
				<div className="absolute bottom-0 left-0 bg-gradient-to-t from-white w-full h-24">
				</div>
				<div className="flex justify-center w-full absolute bottom-9 left-0">
					<button className="text-green-700 font-bold border py-2 px-10 rounded-3xl bg-white focus:outline-none hover:bg-gray-100" onClick={()=>{handleClick(job.post_url)}} >Apply</button>
				</div>
			</div>
			</div>
			);
			})
		}
		</div>
    );
}

export default JobPortal