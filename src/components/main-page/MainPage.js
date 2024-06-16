import React from 'react'
import Middle from '../middle/Middle';
import Left from '../left/Left';
import Right from '../right/Right';
import Header from '../header/Header';
import "./MainPage.css";
export default function ({ authenticated, onLogout, currentUser }) {
  return (
    <div style={{backgroundColor:'#F5F7F8'}} >
      <Header authenticated={authenticated} onLogout={onLogout} currentUser={currentUser} />
      <main style={{backgroundColor:'#F5F7F8'}} >
        <div style={{backgroundColor:'#F5F7F8'}} className='container'>
          <Left />
          <Middle />
          <Right />
        </div>
      </main>
    </div>

  )
}
