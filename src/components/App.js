
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
    let timer;
    timer = setInterval(()=>{
      if(progress!==100){
        setProgress(progress+10)
      }
    }, 360)
    return(
      ()=>{
          console.log('clear out');
          clearInterval(timer);
      }
    )
  }, [progress])

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Progress Bar</h1>
        <div id='barOuter' >
          <div id='barInner' style={{width: `${progress}%`}} >

          </div>
          <p>{progress}%</p>
        </div>
    </div>
  )
}

export default App
