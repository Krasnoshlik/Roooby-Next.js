import { PurpleButton } from "@/app/components/PurpleButton";
import Image from "next/image";
import Dashboard from '../../images/Dashboard.png';
import Google from '../../images/Trusted by/Google.svg';
import Atlassian from '../../images/Trusted by/Atlassian.svg';
import Cannon from '../../images/Trusted by/Canon.svg';
import Walmart from '../../images/Trusted by/Walmart.svg';
import Amazon from '../../images/Trusted by/Amazon.svg';

export const Main = () => {
    return (
        <div className=" max-w-projContainer m-auto mt-16 flex flex-col gap-32 mb-20">

            <div className="flex gap-14">
            <div className=" max-w-1xl flex flex-col gap-16">
                <div className=" flex flex-col gap-6">
                <h1 className=" text-dark-purple text-6xl font-bold leading-12">Bringing companies and customers together, anywhere</h1>
                <p className=" max-w-md leading-7">An awesome & powefull tools for your business, <br /> increase business revenue with enterprise-grade links <br /> built to acquire and engage cutomers.</p>
                </div>
                <div className=" flex flex-col gap-3">
                    <div className=" flex bg-white max-w-md p-2 rounded-xl">
                    <input type="email"  className=" w-full placeholder:pl-3 focus:border-0" placeholder="Enter your email"/>
                    <div className=" w-36 self-end">
                        <PurpleButton textInButton='Try for Free'/>
                    </div>
                    </div>
                    <p className=" text-sm ml-3">Full access. No credit card required.</p>
                </div>
            </div>

            <div className=" absolute right-0 w-5/12 max-w-3xl h-96">
                <Image src={Dashboard} alt="Dashboard" className=" max-h-672"/>
            </div>
            </div>

            <div className=" flex gap-24">
                <p className=" font-medium">Trusted by 1,000+ customers</p>
                <div className=" flex gap-14">
                    <Image src={Google} alt="Google" height={24}/>
                    <Image src={Atlassian} alt="Atlassian" height={17}/>
                    <Image src={Cannon} alt="Cannon" height={17}/>
                    <Image src={Walmart} alt="Walmart" height={24}/>
                    <Image src={Amazon} alt="Amazon" height={24}/>
                </div>
            </div>

        </div>
    )
}