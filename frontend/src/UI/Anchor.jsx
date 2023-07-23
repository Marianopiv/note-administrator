import React from 'react'

const Anchor = ({action,text}) => {
  return (
    <p onClick={action} className='underline-offset-2 border-b border-blue-500 text-blue-500 hover:cursor-pointer'>{text}</p>
  )
}

export default Anchor