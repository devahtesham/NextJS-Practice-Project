"use client"
import React, { useState } from 'react'
import { IoIosLink } from "react-icons/io";

const ButtonComp = () => {
    const [isUserClick, setIsUserClick] = useState(false);
    console.log("THIS IS BUTTON COMP")

    // handle click
    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href)
        setIsUserClick(true)
        console.log("BUTTON IS CLICK !!")
    }

    return (
        <>
            <button onClick={handleClick} className='text-slate-200 bg-orange-300 p-1 hover:bg-black hover:text-white transition-all duration-700 rounded-md flex items-center gap-1'>
            <IoIosLink />
                {
                    isUserClick ? "Link Copied" :
                        "Click to Copy"
                }
            </button>
            
        </>

    )
}

export default ButtonComp