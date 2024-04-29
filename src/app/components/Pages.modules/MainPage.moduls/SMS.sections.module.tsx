import Sales from '../../../images/SMS sections/sales.png';
import Marketing from '../../../images/SMS sections/marketing.png';
import Service from '../../../images/SMS sections/service.png';
import GreenArrow from '../../../images/SMS sections/ic_done.svg';
import Image from 'next/image';

export const SMSsections = () => {
    return (
        <div className=" bg-white py-28 ">
            <div className=" max-w-projContainer m-auto lg:mx-5 sm:mx-2">

                <div className=" pt-12 border-t-2 border-gray-300">

                    <div className=' flex flex-row justify-between items-center sm:flex-col sm:gap-2'>
                        <div className=' max-w-lg flex flex-col gap-6'>
                        <div className=' flex flex-col gap-4'>
                            <div className=' bg-yellow max-w-16 rounded font-bold text-gray-600 tracking-wider p-2 text-sm'>SALES</div>
                            <h2 className=' font-bold text-5xl leading-11'>Increase company <br /> revenue up to 65%</h2>
                        </div>

                        <div className=' flex flex-col gap-4'>
                            <p className=' text-lg'>Automate your sales, marketing, and service in one <br /> platform. Avoid data leaks and enable consistent <br /> messaging. </p>
                            <div className=' flex gap-5'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start mt-1'/>
                                <p className=' text-lg'>Close more deals with single-page contact <br /> management</p>
                            </div>
                            <div className=' flex gap-5'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start '/>
                                <p className=' text-lg'>Enjoy one-click calling, call scripts and voicemail <br /> automation</p>
                            </div>
                            <div className=' flex gap-5'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start'/>
                                <p className=' text-lg'>Track stages and milestones of your deals to keep <br /> the sales process on track</p>
                            </div>
                        </div>
                        </div>

                        <div>
                            <Image src={Sales} alt='Sales'/>
                        </div>
                    </div>

                </div>

                <div className=" pt-12 border-t-2 border-gray-300 mt-28">

                    <div className=' flex flex-row-reverse justify-between items-center sm:flex-col sm:gap-2'>
                        <div className=' max-w-lg flex flex-col gap-6'>
                        <div className=' flex flex-col gap-4'>
                            <div className=' bg-yellow max-w-28 rounded font-bold text-gray-600 tracking-wider p-2 text-sm text-center'>MARKETING</div>
                            <h2 className=' font-bold text-5xl leading-11'>Marketing</h2>
                        </div>

                        <div className=' flex flex-col gap-4 '>
                            <p className=' text-lg'>Market like the most successful companies in the world with Agile CRM's marketing automation software. </p>
                            <div className=' flex gap-5'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start mt-1'/>
                                <p className=' text-lg'>Marketing workflows with an easy drag-and-drop designer</p>
                            </div>
                            <div className=' flex gap-5'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start '/>
                                <p className=' text-lg'>Use our templates to create high converting, <br /> mobile responsive landing pages</p>
                            </div>
                            <div className=' flex gap-5'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start'/>
                                <p className=' text-lg'>Integrate social media easily into your marketing campaigns & contact views</p>
                            </div>
                        </div>
                        </div>

                        <div>
                            <Image src={Marketing} alt='Marketing'/>
                        </div>
                    </div>

                </div>

                <div className=" pt-12 border-t-2 border-gray-300 mt-28">

                    <div className=' flex flex-row justify-between items-center sm:flex-col sm:gap-2'>
                        <div className=' max-w-lg flex flex-col gap-6'>
                        <div className=' flex flex-col gap-4'>
                            <div className=' bg-yellow max-w-20 rounded font-bold text-gray-600 tracking-wider p-2 text-sm'>SERVICE</div>
                            <h2 className=' font-bold text-5xl leading-11'>Help Desk Software</h2>
                        </div>

                        <div className=' flex flex-col gap-4'>
                            <p className=' text-lg'>Great customer support separates decent companies <br /> from excellent companies. A positive customer support experience is a crucially important piece of the <br /> customer journey.  </p>
                            <div className=' flex gap-5'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start mt-1'/>
                                <p className=' text-lg'>Resolve every issue in the shortest possible time <br /> with powerful ticketing features</p>
                            </div>
                            <div className=' flex gap-5'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start '/>
                                <p className=' text-lg'>Categorize tickets according to the issue and  <br />route them to the appropriate group (e.g. sales or support)</p>
                            </div>
                            <div className=' flex gap-5'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start'/>
                                <p className=' text-lg'>Enjoy at-a-glance views of important data—such <br /> as ticket priority—on your dashboard</p>
                            </div>
                        </div>
                        </div>

                        <div>
                            <Image src={Service} alt='Service'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
} 