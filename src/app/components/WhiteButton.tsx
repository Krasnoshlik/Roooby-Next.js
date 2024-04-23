
export const WhiteButton = ({textInButton}:{textInButton: string}) => {
    return (
        <button className=" bg-white w-full py-2 text-dark-purple font-bold text-center text-sm rounded hover:bg-dark-purple hover:text-white transition ease-in-out duration-700 shadow-xl">
            {textInButton}
        </button>
    )
}