export const Button =({onClick}) =>{
    return (
        <button type="button" onClick={onClick}
        className=" font-montserrat font-bold text-white  bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-2xl text-sm px-20 py-5 text-center me-2 mb-2">
            Get Started
        </button>

    )
}
    