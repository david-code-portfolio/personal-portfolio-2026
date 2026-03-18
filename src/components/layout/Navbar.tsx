import ModeSwitchBtn from "../ui/modeSwitchBtn"
import Button from "../ui/button"
import { useState } from "react"
import {motion} from 'framer-motion'

function Navbar(){
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return(
        <motion.nav 
            className={`fixed top-8 left-1/2 overflow-hidden -translate-x-1/2 bg-bg-surface pl-8 pr-2 py-2 max-sm:py-4 max-sm:px-6 rounded-lg max-sm:min-w-[100px] max-sm:w-4/5`}
            animate={isOpen === true ? {height: 'auto'} : {height: 56}}>
            <div className="flex justify-between gap-8 items-center">
                <ModeSwitchBtn></ModeSwitchBtn>

                {/* Wide screen navigation */}
                <div className="flex gap-8 max-sm:hidden font-heading font-bold text-button leading-tight text-muted hover:text-main duration-250">
                    <a href='#'>Home</a>
                    <a href="#">Work</a>
                    <a href="#">Skills</a>
                    <a href="#">Process</a>
                </div>

                <Button customStyle="max-sm:hidden" btnText={"Contact"}/>

                {/* Hamburger menu (visible on mobile view) */}
                <button 
                    className="relative w-6 h-4 cursor-pointer sm:hidden"
                    onClick={() => toggleMenu()}
                >
                    <div className={`${isOpen === true ? `rotate-45 top-1.65` : `top-0`} w-full h-0.75 bg-main rounded-lg absolute duration-250`}></div>
                    <div className={`${isOpen === true ? `-rotate-45 bottom-1.65` : `bottom-0`} w-full h-0.75 bg-main rounded-lg absolute duration-250`}></div>
                </button>
            </div>

            {/* Small screen navigation */}
            <div className={`justify-self-center min-sm:hidden`}>
                <ul className="text-center flex flex-col gap-8 my-8 font-heading font-bold text-body leading-tight text-muted hover:text-main duration-250">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Process</a></li>
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navbar