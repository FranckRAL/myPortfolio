import React from 'react'

export const ProgressBar = ({label, value}) => {
  return (
    <div className='flex gap-2 justify-center items-center'>
        <p className='w-1/3 poppins-light'>{label}</p>
        <progress className='w-2/3' value={value} min={0} max={100}></progress>

    </div>
  )
}
