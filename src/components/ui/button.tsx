type ButtonProps = {
    customStyle?: string,
    btnText: string
}

function Button( {customStyle, btnText}: ButtonProps ){

    return(
        <button className={`${customStyle} bg-main text-bg font-heading font-bold rounded-lg py-4 px-8 text-button leading-tight cursor-pointer`}>
            {btnText}
        </button>
    )
}

export default Button;