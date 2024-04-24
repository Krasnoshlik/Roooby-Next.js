import Image from "next/image";
import Logo1 from '../../images/IntegrationsImg/Logo1.png';
import Logo2 from '../../images/IntegrationsImg/Logo2.png';
import Logo3 from '../../images/IntegrationsImg/Logo3.png';
import Logo4 from '../../images/IntegrationsImg/Logo4.png';
import Logo5 from '../../images/IntegrationsImg/Logo5.png';
import Logo6 from '../../images/IntegrationsImg/Logo6.png';
import Logo7 from '../../images/IntegrationsImg/Logo7.png';
import Logo8 from '../../images/IntegrationsImg/Logo8.png';
import Logo9 from '../../images/IntegrationsImg/Logo9.png';
import Logo10 from '../../images/IntegrationsImg/Logo10.png';


export const Integrations = () => {
    return (
        <div className=" max-w-projContainer m-auto my-28 flex flex-col items-center gap-14">
            <div className=" text-center flex flex-col gap-3">
                <h2 className=" font-bold text-5xl">Over 300+ integrations</h2>
                <p className=" text-lg">Expand the capabilities of <span className=" font-bold"> Roooby </span> with hundreds of apps and integrations</p>
            </div>
            <div className=" flex flex-wrap gap-2">
                <div className=" w-120 h-120 bg-white flex items-center justify-center rounded-xl">
                <Image src={Logo1} alt="Logo1" />
                </div>
                <div className=" w-288 h-120 bg-white flex items-center justify-center rounded-xl">
                <Image src={Logo2} alt="Logo2"/>
                </div>
                <div className=" w-288 h-120 bg-white flex items-center justify-center rounded-xl">
                <Image src={Logo3} alt="Logo3"/>
                </div>
                <div className=" w-120 h-120 bg-white flex items-center justify-center rounded-xl">
                <Image src={Logo4} alt="Logo4"/>
                </div>
                <div className=" w-288 h-120 bg-white flex items-center justify-center rounded-xl">
                <Image src={Logo5} alt="Logo5"/>
                </div>
                <div className=" w-372 h-120 bg-white flex items-center justify-center rounded-xl">
                <Image src={Logo6} alt="Logo6"/>
                </div>
                <div className=" w-120 h-120 bg-white flex items-center justify-center rounded-xl">
                <Image src={Logo7} alt="Logo7"/>
                </div>
                <div className=" w-120 h-120 bg-white flex items-center justify-center rounded-xl">
                <Image src={Logo8} alt="Logo8"/>
                </div>
                <div className=" w-372 h-120 bg-white flex items-center justify-center rounded-xl">
                <Image src={Logo9} alt="Logo9"/>
                </div>
                <div className=" w-120 h-120 bg-white flex items-center justify-center rounded-xl">
                <Image src={Logo10} alt="Logo10"/>
                </div>
            </div>
            <div className=" group/seeall flex gap-2 items-center hover:cursor-pointer">
                <p className=" font-medium text-xl">See all apps and extensions</p>
                <p className=" font-bold group-hover/seeall:translate-x-2 transition ease-in-out delay-150">{">"}</p>
            </div>
        </div>
    )
}