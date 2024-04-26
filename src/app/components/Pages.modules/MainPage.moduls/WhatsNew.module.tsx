"use client"
import Image from "next/image";
import Oval1 from '../../../images/Whats new/Oval.png';
import Oval2 from '../../../images/Whats new/Oval2.png';
import { News } from "@/app/database";
import { useRouter } from 'next/navigation';

export const WhatsNew = () => {
    const router = useRouter();
    const news = News;
    return (
        <div className=" bg-white">
            <div className=" w-projContainer m-auto flex flex-col gap-60 pt-32 pb-44">
                {/* What's new start */}
                <div className=" flex flex-col gap-16">
                    <div className=" flex justify-between">
                        <h1 className=" text-6xl font-bold">What’s new at Roooby?</h1>
                        <div className=" group/seeall flex items-end gap-1 hover:cursor-pointer" onClick={() => router.push('/blog')}>
                            <p className=" font-medium text-lg group-hover/seeall:text-green-500">See all</p>
                            <p className=" text-green-500 font-bold mb-1 group-hover/seeall:translate-x-2 transition ease-in-out delay-150 ">{'>'}</p>
                        </div>
                    </div>

                    <div className=" flex gap-8">
                        <div className=" flex flex-col gap-6 max-w-555">
                            <p className=" text-sm text-gray-400 font-bold -mb-2">{news[11].type}</p>
                            <span className=" border w-full"></span>
                            <img src={news[11].img} alt="Image1" className=" w-full"/>
                            <h3 className=" font-bold text-3xl leading-10">{news[11].title}</h3>
                            <p className=" font-medium"> {news[11].date}<span className=" text-gray-500">{news[11].autor}</span></p>
                        </div>

                        <div className=" flex flex-col gap-6 max-w-555">
                            <p className=" text-sm text-gray-400 font-bold -mb-2">{news[12].type}</p>
                            <span className=" border w-full"></span>
                            <img src={news[12].img} alt="Image1"/>
                            <h3 className=" font-bold text-3xl leading-10">{news[12].title}</h3>
                            <p className=" font-medium">{news[12].date}<span className=" text-gray-500"> {news[12].autor}</span></p>
                        </div>
                        
                    </div>
                </div>
                {/* What's new end */}
                <div>

                    <div className=" flex flex-col gap-3">
                    <h2 className=" font-bold text-5xl">Real-life results and revenue</h2>
                    <p className=" text-lg text-gray-600">See how companies like yours have smashed their sales success goals</p>
                    </div>

                    <div >

                        <div className=" border-t-2 border-gray-300 mt-16 pt-12 flex justify-between">
                        <div className=" flex flex-col gap-6">
                        <h1 className=" text-7xl font-bold">$2.5 M</h1>
                        <p className=" text-xl font-bold">Generate sales</p>
                        </div>
                        <div className="flex flex-col gap-8 max-w-1.5xl">
                            <p className=" text-3xl font-medium leading-10">Using Кирилица CRM is one of the best decisions <br /> we’ve ever made. We’ve seen our annual revenue <br /> explode, and the outlook just keeps getting sunnier.</p>
                            <div className=" flex gap-2">
                                <Image src={Oval1} alt="Oval1"/>
                                <div>
                                    <p className=" font-bold">Nellie Foster</p>
                                    <p>Founder & CEO, Foster Business Strategies</p>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className=" border-t-2 border-gray-300 mt-16 pt-12 flex justify-between">
                        <div className=" flex flex-col gap-6">
                        <h1 className=" text-7xl font-bold">45%</h1>
                        <p className=" text-xl font-bold">Grew revenue</p>
                        </div>
                        <div className="flex flex-col gap-8 max-w-1.5xl">
                            <p className=" text-3xl font-medium leading-10 ">Yoora is created for sales people. It’s the kind of <br /> software that just works. I don’t have to try to make it work. It already does. It’s just perfect.</p>
                            <div className=" flex gap-2">
                                <Image src={Oval2} alt="Oval1"/>
                                <div>
                                    <p className=" font-bold">Lawrence Gibbs</p>
                                    <p>Marketing Director</p>
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}