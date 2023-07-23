import React from 'react'

const Button = ({action,text}) => {
  return (
    <button className='rounded-md border-2 p-2 bg-green-900 text-white border-black hover:bg-green-600' onClick={action}>{text}</button>
  )
}

export default Button