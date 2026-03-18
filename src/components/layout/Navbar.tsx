import ModeSwitchBtn from "../ui/modeSwitchBtn"
import Button from "../ui/button"

function Navbar(){
    return(
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 bg-bg-surface pl-8 pr-2 py-2 max-sm:py-4 max-sm:px-6 items-center rounded-lg flex gap-8 max-sm:min-w-[100px] max-sm:w-4/5 max-sm:justify-between">
            <ModeSwitchBtn></ModeSwitchBtn>
            <div className="flex gap-8 max-sm:hidden">
                <a href='#'>Home</a>
                <a href="#">Work</a>
                <a href="#">Skills</a>
                <a href="#">Process</a>
            </div>
            <Button customStyle="max-sm:hidden" btnText={"Contact"}/>
            {/* Hamburger menu (visible on mobile view) */}
            <button className="relative w-6 h-4 cursor-pointer sm:hidden">
                <div className="w-full h-1 bg-main rounded-lg absolute top-0"></div>
                <div className="w-full h-1 bg-main rounded-lg absolute bottom-0"></div>
            </button>
        </nav>
    )
}

export default Navbar