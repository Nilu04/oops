import React from 'react'
import Left from '../left/Left';
import Right from '../right/Right';
import Header from '../header/Header';
import "./WorkourStatusPage.css";
import MiddleWorkoutStatus from '../middleWorkoutStatus/MiddleWorkoutStatus';
export default function WorkourStatusPage ({ authenticated, onLogout }) {
  return (
    <div style={{backgroundColor:'#F5F7F8'}}>
        <Header authenticated={authenticated} onLogout={onLogout} />
    <main style={{backgroundColor:'#F5F7F8'}}>
       <div className='container'>
          <Left />
          <MiddleWorkoutStatus />
       </div>
    </main>
    </div>
    
  )
}
