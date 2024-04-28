"use client"
import Image from "next/image";
import Logo from '../images/Roooby.svg';
import { WhiteButton } from "./WhiteButton";
import { PurpleButton } from "./PurpleButton";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

export const Header = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className=" max-w-projContainer m-auto py-6 flex justify-between items-center ">
            <div className=" flex gap-24">
                <Image src={Logo} alt="Logo" className=" hover:cursor-pointer" onClick={() => router.push('/')}/>
                <div className=" flex gap-9 text-sm font-medium">
                    <div>
                    <a href="/">Product</a>
                    { pathname === '/' && <span className=" h-full border-b-2 border-black block -mt-5"></span>}
                    </div>
                    <div>
                    <a href="/pricing">Pricing</a>
                    { pathname === '/pricing' && <span className=" h-full border-b-2 border-black block -mt-5"></span>}
                    </div>
                    <div>
                    <a href="#">Company</a>
                    { pathname === '#' && <span className=" h-full border-b-2 border-black block -mt-5"></span>}
                    </div>
                    <div>
                    <a href="/blog">Blog</a>
                    { pathname === '/blog' && <span className=" h-full border-b-2 border-black block -mt-5"></span>}
                    </div>
                    <div>
                    <a href="/contact">Contact</a>
                    { pathname === '/contact' && <span className=" h-full border-b-2 border-black block -mt-5"></span>}
                    </div>
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