import React from 'react'
import NavBar from '../../components/NavBar'
import "./landing-page-styles.css"
function LandingPage() {
  return (
    <>
        <NavBar selected="inicio"/>
        <div className='header-lp'>
          <span className='span-cover'>
            <p className='header-span'>Ratonovich<br/>Park</p>  
          </span>
        </div>
    </>
  )
}

export default LandingPage