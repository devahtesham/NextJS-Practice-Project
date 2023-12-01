import React from 'react'
import { orbitron } from '@/app/fonts'

const Heading = ({children}) => {
  return <>
    <h1 className={`text-red-600 font-extrabold text-4xl ${orbitron.className}`}>
        {children}
    </h1>
  </>
}

export default Heading