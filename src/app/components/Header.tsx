"use client"
import Image from "next/image";
import Logo from '../images/Roooby.svg';
import { WhiteButton } from "./WhiteButton";
import { PurpleButton } from "./PurpleButton";
import { useRouter } from 'next/navigation';

export const Header = () => {
    const router = useRouter();
    return (
        <div className=" max-w-projContainer m-auto py-6 flex justify-between items-center ">
            <div className=" flex gap-24">
                <Image src={Logo} alt="Logo" className=" hover:cursor-pointer" onClick={() => router.push('/')}/>
                <div className=" flex gap-9 text-sm font-medium">
                    <a href="/">Product</a>
                    <a href="/pricing">Pricing</a>
                    <a href="#">Company</a>
                    <a href="/blog">Blog</a>
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