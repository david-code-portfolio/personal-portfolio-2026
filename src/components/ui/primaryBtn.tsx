import { motion } from "framer-motion";

function PrimaryBtn( {customStyle, btnText} ){
    const word = btnText.split("")

    const hoverAnimation = {
        initial: { transition: {staggerChildren: 0.025} },
        hover: { transition: {staggerChildren: 0.025} }
    }

    const letterMovement = {
        initial: {y: 0, transition:{ease: "easeInOut", duration: 0.25, type: "tween"}},
        hover: {y: -12, transition:{ease: "easeInOut", duration: 0.25, type: "tween"}}
    }

    return(
        <motion.button 
            variants={hoverAnimation}
            initial="initial"
            whileHover="hover"
            className={`${customStyle} bg-main text-bg font-heading font-bold px-8 py-4 rounded-lg cursor-pointer leading-tight
            `}
        >
            <div className="flex justify-center tracking-[0em] items-center overflow-hidden relative">
                {word.map((letter, index) => (
                    <motion.span 
                        key={index}
                        variants={letterMovement}
                        initial="initial"
                        className={`inline-block max-w-fit after:content-[${letter}] relative top-0`}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
                <div className="flex justify-center tracking-[0em] items-center h-fit absolute top-3">
                {word.map((letter, index) => (
                    <motion.span 
                        key={index} 
                        variants={letterMovement}
                        className={`inline-block max-w-fit after:content-[${letter}] after:absolute relative top-0`}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </div>
            </div>
        </motion.button>
    )
}

export default PrimaryBtn;