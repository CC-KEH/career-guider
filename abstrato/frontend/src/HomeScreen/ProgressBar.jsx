import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressBar(props) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div style={{textAlign:"center"}}>
      <div style={{ width: 250, marginLeft: 32, marginTop:30}}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({pathColor: '#217bf4',textColor: '#217bf4',trailColor:'#f3f8fe'})}/>
      </div>
    </div>
  );
}
export default ProgressBar;