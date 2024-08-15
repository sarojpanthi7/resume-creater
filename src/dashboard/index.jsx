import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import AddResume from './Component/AddResume'

function Dashboard() {
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h1 className='font-bold text-3xl'>Resume</h1>
      <p>Start Creating AI resume for your next Job</p>
      <div className='grid grid-col-2 md:grid-col-3 lg:grid-cols-5 mt-10'>
        <AddResume />
      </div>
    </div>
    
  )
}

export default Dashboard
