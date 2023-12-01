// "use client"
// import { useEffect } from "react"

import Heading from "@/components/Heading"

export const metadata = {
    title:"About",
    description:"This is about page",
}

function HomePage() {
    return (
        <>
            <Heading>This About Page</Heading>
            <p className="font-devonshire text-2xl my-3">i am learning Next js by udemy course.</p>
        </>
    )
}

export default HomePage