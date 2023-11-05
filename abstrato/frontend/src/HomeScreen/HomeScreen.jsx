import React from "react";
import styles from "./HomeScreen.module.css";
import hiresvg from "../assets/resumebuilder_images/hire.svg";
import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "./ProgressBar";
import Footer from "../components/Footer/Footer";
function HomeScreen() {
  return (
    <>
      <Navbar/>
      <div className="bg-gradient-to-br from-blue-100 to-white py-10">
        <div className="h-3/4 mb-36">
          <div className="container mx-auto space-x-3 pt-4">
            {/* Add user details here, e.g., profile picture, name, etc. */}
          </div>.........................................   

          <div className={styles.header_container}>
            <div className={styles.left}>
              <p className={styles.heading}>
                Welcome back! <span>Arbash</span>.
              </p>

              <p className={styles.heading}>Checkout what to do next.</p>
            </div>

            <div className={styles.right}>
              <img src={hiresvg} alt="Hire" />
            </div>
          </div>
        </div>

        <div className="container mx-auto py-8">
          <div className="mx-auto text-center text-4xl font-mono font-bold mb-10">
            Track your progress
          </div>
          <div className="bg-white px-10 py-4  rounded-lg shadow mb-6 mx-auto w-[83.5rem] flex flex-col justify-between">
            <div className="text-4xl font-bold mx-auto">
              Progress in edX Courses
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col items-center m-auto">
                <ProgressBar />
                <h2 className="pl-6 text-xl font-semibold mb-4">Python</h2>
              </div>

              <div className="flex flex-col items-center m-auto">
                <ProgressBar />
                <h2 className="pl-6 text-xl font-semibold mb-4">Html</h2>
              </div>

              <div className="flex flex-col items-center m-auto">
                <ProgressBar />
                <h2 className="pl-6 text-xl font-semibold mb-4">CSS</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            {/* Add user roadmap component */}
            <div className="bg-white p-10 rounded-lg shadow mb-6 w-2/4 h-[65.5rem] ml-20">
              <h2 className="text-4xl font-bold mb-4">Roadmap</h2>
              - learn python
              <br />
              - learn html
              <br />
              - learn css
              <br />
              - learn javascript
              <br />
              - learn react
              <br />
              - learn django
              <br />
              - learn sql
              <br />

            </div>

            <div className="flex flex-col w-1/3 mx-20">
              {/* Add user summary component */}
              <div className="bg-white p-10 rounded-lg shadow mb-6 w-full h-[32rem]">
                <h2 className="text-4xl font-bold mb-4">Summary</h2>
                - completed 3 courses
                <br />
                - completed 2 projects
                <br />
                - completed 1 certification
                <br />
                
              </div>

              {/* Add user certification component */}
              <div className="bg-white p-10 rounded-lg shadow mb-6 w-full h-[32rem]">
                <h2 className="text-4xl font-bold mb-4">Certifications</h2>
                - No certifications yet.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default HomeScreen;