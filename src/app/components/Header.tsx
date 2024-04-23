import Image from "next/image";
import Logo from '../images/Roooby.svg';
import { WhiteButton } from "./WhiteButton";
import { PurpleButton } from "./PurpleButton";

export const Header = () => {
    return (
        <div className=" max-w-projContainer m-auto py-6 flex justify-between items-center ">
            <div className=" flex gap-24">
                <Image src={Logo} alt="Logo" className=" hover:cursor-pointer"/>
                <div className=" flex gap-9 text-sm font-medium">
                    <a className=" hover:drop-shadow-xl transition duration-500" href="#">Product</a>
                    <a href="#">Pricing</a>
                    <a href="#">Company</a>
                    <a href="#">Recources</a>
                    <a href="#">Contact</a>
                </div>
            </div>

            <div className=" flex gap-5">
                <div className=" w-20">
                <WhiteButton textInButton={'Log in'}/>
                </div>

                <div className=" w-28">
                <PurpleButton textInButton={'Try for Free'}/>
                </div>
            </div>
        </div>
    )
}