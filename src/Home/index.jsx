import Header from '@/components/custom/Header'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Header/>
      <div className='py-5 px-5'>
        Click on Get Started if you are not Logged in, if you are already logged in click on Dashboard to create a resume.
      </div>
    </div>
  )
}

export default HomePage
