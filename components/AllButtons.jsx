// "use client"      // This means all its nested componenets will become client, which is not good because we try to send a minimum amount of javascript to the browser.
import React from 'react'
import ButtonComp from './ButtonComp'

const AllButtons = () => {
    console.log("[THIS IS ALL BUTTON COMP]")
    return (
        <>
            <ButtonComp />
            | [BUTTON 2] | [BUTTON 3]

        </>
    )
}

export default AllButtons