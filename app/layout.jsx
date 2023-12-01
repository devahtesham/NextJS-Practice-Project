import Link from "next/link"
import "./index.css"
import NavBar from "@/components/NavBar"
import { devonshire, orbitron } from "./fonts"


export const metadata = {
    title:{
        default:"CarShop",
        template:'%s | CarShop'
    },
}
const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={`${devonshire.variable} ${orbitron.variable}`}>
            <body className="flex flex-col min-h-screen">
                <header className="bg-gray-950 text-white flex items-center justify-between py-2">
                    <h1 className="text-4xl font-extrabold">LOGO</h1>
                    <NavBar />
                </header>
                <main className="grow">
                    {children}
                </main>

                <footer className="text-center py-3 bg-yellow-500">
                    [This is my placeholder Dummy text]
                </footer>
            </body>
        </html>
    )
}

export default RootLayout