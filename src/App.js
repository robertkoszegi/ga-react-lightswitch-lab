import React, { useState, useEffect } from 'react'
import './App.css';
import Top from './components/Top/Top'
import Bottom from './components/Bottom/Bottom'


export default function App () {

  const [switchData, setSwitchData] = useState({
    position: "off",
    backgroundColor: "black"
  });

  const flipSwitch = () => {
    setSwitchData({
      position: switchData.position === "off" ? "on" : "off", 
      backgroundColor: switchData.backgroundColor === "black" ? "white" : "black"
    });
  }

  return (
    <div className='App'>Lightswitch
      <Top backgroundColor={switchData.backgroundColor}/>
      <Bottom flipSwitch={flipSwitch} position={switchData.position}/>
    </div>
  )
}



