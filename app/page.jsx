// "use client"
// import { useEffect } from "react"

import Heading from "@/components/Heading"

export const metadata = {
    description:"This is my first page (Home Page) renders",
}

function HomePage() {
    // useEffect(()=>{
    //     alert("ALERT FROM HOME PAGE....")
    // })
    console.log("I AM HOME PAGE......")
    return (
        <>
            <Heading>This is my First Page (Home Page) renders</Heading>
            <p className="font-devonshire text-2xl my-3">i am learning Next js by udemy course.</p>
            {/* <img src="/images/hellblade.jpg" alt="" width={800} height={500}/> */}
            
        </>
    )
}

export default HomePage