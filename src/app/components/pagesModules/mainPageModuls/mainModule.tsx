"use client"
import { PurpleButton } from "@/app/components/PurpleButton";
import Image from "next/image";
import Dashboard from '../../../images/Dashboard.png';
import Google from '../../../images/Trusted by/Google.svg';
import Atlassian from '../../../images/Trusted by/Atlassian.svg';
import Cannon from '../../../images/Trusted by/Canon.svg';
import Walmart from '../../../images/Trusted by/Walmart.svg';
import Amazon from '../../../images/Trusted by/Amazon.svg';
import { SetStateAction, useState } from 'react';

export const Main = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleChange = (e: { target: { value: SetStateAction<string>; checkValidity: () => boolean | ((prevState: boolean) => boolean); }; }) => {
        setEmail(e.target.value);
        setIsValidEmail(e.target.checkValidity());
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    return (
        <div className="max-w-projContainer m-auto mt-16 flex flex-col gap-32 sm:gap-10 mb-20 lg:mx-5 sm:mt-10 sm:mb-10">
            <div className="flex gap-14 lg:flex-col sm:mx-5 sm:flex-col sm:gap-10">
                <div className="max-w-1xl flex flex-col gap-20 z-10">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-dark-purple text-6xl font-bold leading-12 sm:text-3xl">Bringing companies and customers together, anywhere</h1>
                        <p className="max-w-md leading-7 sm:text-sm">An awesome & powefull tools for your business, <br className="sm:hidden"/> increase business revenue with enterprise-grade links <br className="sm:hidden"/> built to acquire and engage cutomers.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3">
                            <div className="flex bg-white max-w-md p-2 rounded-xl">
                                <input 
                                    type="email" 
                                    className={`w-full placeholder:pl-3 focus:border-0 outline-none ${isValidEmail ? '' : 'border-red-500'}`} 
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="w-36 self-end">
                                    <PurpleButton textInButton='Try for Free' type='submit' />
                                </div>
                            </div>
                            {!isValidEmail && <p className="text-red-500 text-sm ml-3 sm:text-xs">Please enter a valid email address.</p>}
                        </div>
                    </form>
                </div>
                <div className="absolute right-0 w-5/12 max-w-2xl sm:static sm:self-end sm:w-10/12 top-24">
                    <Image src={Dashboard} alt="Dashboard" className="max-h-672" />
                </div>
            </div>
            <div className="flex gap-24 sm:mx-3 sm:gap-10 sm:flex-col ">
                <p className="font-medium">Trusted by 1,000+ customers</p>
                <div className="flex gap-14 flex-wrap sm:gap-7">
                    <Image src={Google} alt="Google" height={24} />
                    <Image src={Atlassian} alt="Atlassian" height={17} />
                    <Image src={Cannon} alt="Cannon" height={17} />
                    <Image src={Walmart} alt="Walmart" height={24} />
                    <Image src={Amazon} alt="Amazon" height={24} />
                </div>
            </div>
        </div>
    )
}