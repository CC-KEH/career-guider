
import React from 'react'
import ReactDOM from "react-dom";
import Jobs from './jobs.json'
import logo from '../assets/img/logo.png'
import Navbar from '../components/Navbar/Navbar';
import { Navigate, useNavigate,Link } from 'react-router-dom'
import styles from './Jobs.module.css'
function JobPortal() {
	const handleClick = (url) => {
		window.open(url, '_blank', 'noopener,noreferrer');
	};
	const handleRefresh = () => {
		window.location.reload();
	  };
    return (
    <div className="min-h-screen bg-gray-50">
	<Navbar/>
  <div className="hidden md:flex container mx-auto space-x-3 pt-28">
  </div>
  <div class="flex mx-auto space-x-5 md:mt-14 px-4 md:px-0 pt-28 md:pt-0 gap-8 ">
  <button class="font-bold text-lg text-gray-800 border-b-4 border-green-700 pb-2 pt-2 px-3 w-50">Suggested Jobs</button>
  <button class="text-lg text-gray-500 border-b-4 border-transparent hover:border-gray-200 pt-2 pb-2 px-3 w-50">Applied Jobs</button>
  <button class="text-lg text-gray-500 border-b-4 border-transparent hover:border-gray-200 pt-2 pb-2 px-3 w-50">Saved Jobs</button>
	</div>
		{
			Jobs.map(job =>{
				return(	
					<div className="mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-7 px-4 md:px-0">
			<div className="shadow-lg rounded-xl border border-gray-100 px-7 pt-12 bg-white relative transform transition duration-200 hover:-translate-y-2 hover:shadow-xl  overflow-hidden w-50">
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
				<div className="flex gap-3">
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
				</div>
				<div className="mt-6">
					<p className="text-gray-400 leading-5 text-sm">
					</p>
				</div>
				<div className="absolute bottom-0 left-0 bg-gradient-to-t from-white w-full h-24">
				</div>
				<div className="flex justify-center w-full absolute bottom-9 left-0">
					<button className={styles.body_button} onClick={()=>{handleClick(job.post_url)}} >Apply</button>
				</div>
			</div>
			</div>
			
			);
			}
			)
		}
		
		</div>
    );
}

export default JobPortal