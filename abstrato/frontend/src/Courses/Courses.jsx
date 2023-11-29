import React from "react";
import Courses from './courses.json';
import Navbar from "../components/Navbar/Navbar";
import styles from './Courses.module.css';
export default function CourseScreen() {
    return(
            <div>
                <Navbar/>
                <div className="hidden md:flex container mx-auto space-x-3 pt-10"></div>
                <div className="container flex justify-center mx-auto pt-16">
                 <div>
                     <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto pt-11">Sacrifice your pizza for these courses </h1>
                 </div>
             </div>
             <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
            <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {
            Courses.map(course => {
            return(
                <a href={course.url} target="_blank">
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 h-100px">
                <div className={styles.card}>
                    <div className={styles.card_details}>  
                    <div className={styles.text_title}>{course.title}</div>
                    <p className={styles.text_body}>{course.description}</p>
                    </div>
                </div>
              </div> 
            </a>
            )
            })
        }
            </div>
            </div>
            </div>
            </div>
        );
    }
               