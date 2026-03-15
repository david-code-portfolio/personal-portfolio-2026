import ModeSwitchBtn from "../ui/modeSwitchBtn"
import Button from "../ui/button"

function Navbar(){
    return(
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 bg-bg-surface pl-8 pr-2 py-2 items-center w-fit rounded-lg flex gap-8">
            <ModeSwitchBtn></ModeSwitchBtn>
            <a href='#'>Home</a>
            <a href="#">Work</a>
            <a href="#">Skills</a>
            <a href="#">Process</a>
            <Button></Button>
        </nav>
    )
}

export default Navbar