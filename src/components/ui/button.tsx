function Button( {customStyle} ){
    return(
        <button 
            className={`${customStyle} bg-main text-bg font-heading font-bold px-8 py-4 rounded-lg cursor-pointer leading-tight`}
        >
            Contact
        </button>
    )
}

export default Button;