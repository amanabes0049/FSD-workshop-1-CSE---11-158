import React from 'react'
import reactLogo from '../assets/react.svg'
import amazonLogo from '../assets/amazon logo.png'
import timeLogo from '../assets/timecomplexity.png'
const home = () => {
  return (
    <div>
      <div>
        <h2 style={{ color: 'blue', fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>Welcome to homepage</h2>
      </div>
      <div>
        <p style={{ color: 'black', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>This is the home page content.</p>
        <img src={reactLogo} className="framework" alt="React logo" />
      </div>
      <div>
        <p style={{ color: 'black', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>Company Logo:</p>
        <img src={amazonLogo} className="company" alt="Amazon logo" />
        <img src={timeLogo} className="company" alt="Time logo" />
      </div>
    </div>
  )
}

export default home
