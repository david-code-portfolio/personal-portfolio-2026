import { useState, useEffect } from 'react'

import DarkModeIcon from '../../assets/svgs/dark-mode-icon.svg?react'
import LightModeIcon from '../../assets/svgs/light-mode-icon.svg?react'
import { div } from 'framer-motion/client'

function ModeSwitchBtn() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })
    
    useEffect(() => {
        const html = document.documentElement
        if(theme){
            html.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
        else{
            html.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    })
    
    return(
        <div className='w-6 h-6 flex items-center justify-center'>
            <DarkModeIcon 
                className={`${theme === true ? `hidden` : ``} cursor-pointer`}
                onClick={() => setTheme(theme => !theme)}    
            />
            <LightModeIcon
                className={`${theme === true ? `` : `hidden`} cursor-pointer`}
                onClick={() => setTheme(theme => !theme)}
            />
        </div>
    )
}

export default ModeSwitchBtn