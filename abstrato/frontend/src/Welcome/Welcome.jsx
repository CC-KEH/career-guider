import React from "react";
import styles from './Welcome.module.css';
import career_progress from '../assets/homescreen/career_progress.svg';
import search from '../assets/homescreen/search.svg';
import mainline from '../assets/homescreen/mainline.svg';
import navline from '../assets/homescreen/navline.svg';
import dropdown from '../assets/homescreen/dropdown.svg';
import body2 from  '../assets/homescreen/body2.svg';
import community from '../assets/homescreen/community.svg';
import trackprogress from '../assets/homescreen/trackprogress.svg';
import resume from '../assets/homescreen/resume.svg';
import { Navigate, useNavigate,Link } from 'react-router-dom'
export const Welcome = () => {
    return (
        <>
      <div className={styles.header}>
        <div className={styles.div}>
          <div className={styles.overlap}>
            <div className={styles.text}>
              <div className={styles["button-about-more"]}>
                <div className={styles["overlap-group"]}>
                  <div className={styles["text-wrapper"]}>About More</div>
                </div>
              </div>
              <div className={styles["button-invite-friend"]}>
                <div className={styles["div-wrapper"]}>
                  <div className={styles["text-wrapper-2"]}>Invite Friend</div>
                </div>
              </div>
              <p className={styles.p}>Your dream job is within reach. Let us show you the path to get there.</p>
              <img className={styles["unlock-your-dream"]} alt="Unlock your dream" src={mainline} />
            </div>
          </div>
          <div className={styles.navigation}>
            <div className={styles.logo}>
              <div className={styles["text-wrapper-3"]}>Abstrato</div>
            </div>
            <div className={styles.navbar}>
                <Link to="/Signup" className="hidden md:flex text-md text-gray-500  hover:text-black pb-2 px-3 items-center h-5/6">Jobs</Link>
				<Link to="/Signup" className="hidden md:flex text-md text-gray-500  border-transparent hover:text-black pb-2 px-3 items-center h-5/6 ">Courses</Link>
				<Link to="/Signup" className="hidden md:flex text-md text-gray-500  hover:text-black pb-2 px-3 items-center h-5/6">Connect</Link>
				<Link to="/Signup" className="hidden md:flex text-md text-gray-500  hover:text-black pb-2 px-3 items-center h-5/6">Resume</Link>
				<Link to="/Signup" className="hidden md:flex text-md text-gray-500  hover:text-black pb-2 px-3 items-center h-5/6">Signup</Link> 	
				<Link to="/Login" className="hidden md:flex text-md text-gray-500  hover:text-black pb-2 px-3 items-center h-5/6">Login</Link> 	
            </div>
            <img className={styles.line} alt="Line" src={navline} />
          </div>
          <img className={styles["undraw-career"]} alt="Undraw career" src={career_progress} />
        </div>       
      </div>
        {/* Body 1 */}
        <div className={styles["body-page"]}>
      <div className={styles["overlap-group-wrapper"]}>
        <div className={styles["overlap-group"]}>
          <p className={styles["learn-with-your"]}>
            <span className={styles["text-wrapper"]}>Learn with your </span>
            <span className={styles.span}>friends</span>
            <span className={styles["text-wrapper"]}>, Connect with new people. Grow with the </span>
            <span className={styles["text-wrapper-2"]}>Community.</span>
            <span className={styles["text-wrapper"]}>&nbsp;</span>
          </p>
          <img className={styles["community-cropped"]} alt="Community cropped" src={community} />
        </div>
      </div>
    </div>

    {/* Body2 */}
    <div className={styles["body2-page"]}>
      <div className={styles["overlap-group-wrapper"]}>
        <div className={styles["overlap-group"]}>
          <img
            className={styles["track-your-progress"]}
            alt="Track your progress"
            src={trackprogress}
          />
          <img className={styles["undraw-progress"]} alt="Undraw progress" src={body2} />
        </div>
      </div>
    </div>
    {/* Body 3 */}
    <div className={styles["body3-page"]}>
      <div className={styles["overlap-group-wrapper"]}>
        <div className={styles["overlap-group"]}>
          <img className={styles["undraw-organize"]} alt="Undraw organize" src={resume}/>
          <p className={styles["got-the-skills-build"]}>
            <span className={styles["text-wrapper"]}>
              Got the Skills?
              <br />
              Build a{" "}
            </span>
            <span className={styles.span}>Resume</span>
            <span className={styles["text-wrapper"]}> that gets you selected, by using our templates. It’s </span>
            <span className={styles.span}>free</span>
            <span className={styles["text-wrapper"]}>&nbsp;</span>
          </p>
        </div>
      </div>
    </div>
      </>
    );
  };