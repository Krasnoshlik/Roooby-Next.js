
export const PurpleButton = ({textInButton}:{textInButton: string}) => {
    return (
        <button className=" bg-dark-purple w-full py-2 text-white font-bold text-sm rounded hover:bg-white hover:text-dark-purple ease-in-out transition duration-700 shadow-xl">
            {textInButton}
        </button>
    )
}