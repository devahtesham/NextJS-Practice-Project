import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav className='basis-2/5 pr-5'>
                <ul className='flex justify-between' >
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/reviews"}>Reviews</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                    {/* if we dont want a route to be prefetch by next js, only fetch when user visit this route */}
                    <li>
                        {/* <Link href={"/about/course"} prefetch={false}>Course</Link> */}
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default NavBar