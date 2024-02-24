import React from 'react'
import EmailAddress from './EmailAddress'
import PersonalInfo from './PersonalInfo'
import Password from './Password'

const Details:React.FC = () => {
  return (
    <div className='flex flex-col gap-4 w-3/4 px-10'>
      <PersonalInfo/>
      <EmailAddress/>
      <Password/>
    </div>
  )
}

export default Details
