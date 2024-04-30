import Sales from '../../../images/SMS sections/sales.png';
import Marketing from '../../../images/SMS sections/marketing.png';
import Service from '../../../images/SMS sections/service.png';
import GreenArrow from '../../../images/SMS sections/ic_done.svg';
import Image from 'next/image';

export const SMSsections = () => {
    return (
        <div className=" bg-white py-28 sm:py-10">
            <div className=" max-w-projContainer m-auto lg:mx-5 sm:mx-5">

                <div className=" pt-12 border-t-2 border-gray-300">

                    <div className=' flex flex-row justify-between items-center sm:flex-col sm:gap-2'>
                        <div className=' max-w-lg flex flex-col gap-6'>
                        <div className=' flex flex-col gap-4'>
                            <div className=' bg-yellow max-w-16 rounded font-bold text-gray-600 tracking-wider p-2 text-sm'>SALES</div>
                            <h2 className=' font-bold text-5xl leading-11 sm:text-3xl'>Increase company <br className=' sm:hidden'/> revenue up to 65%</h2>
                        </div>

                        <div className=' flex flex-col gap-4'>
                            <p className=' text-lg sm:text-base'>Automate your sales, marketing, and service in one <br className=' sm:hidden'/> platform. Avoid data leaks and enable consistent <br className=' sm:hidden'/> messaging. </p>
                            <div className=' flex gap-5 sm:gap-3'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start mt-1'/>
                                <p className=' text-lg sm:text-base'>Close more deals with single-page contact <br className=' sm:hidden'/> management</p>
                            </div>
                            <div className=' flex gap-5 sm:gap-3'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start '/>
                                <p className=' text-lg sm:text-base'>Enjoy one-click calling, call scripts and voicemail <br className=' sm:hidden'/> automation</p>
                            </div>
                            <div className=' flex gap-5 sm:gap-3'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start'/>
                                <p className=' text-lg sm:text-base'>Track stages and milestones of your deals to keep <br className=' sm:hidden'/> the sales process on track</p>
                            </div>
                        </div>
                        </div>

                        <div>
                            <Image src={Sales} alt='Sales'/>
                        </div>
                    </div>

                </div>

                <div className=" pt-12 border-t-2 border-gray-300 mt-28 sm:mt-10">

                    <div className=' flex flex-row-reverse justify-between items-center sm:flex-col sm:gap-2 gap-2'>
                        <div className=' max-w-lg flex flex-col gap-6'>
                        <div className=' flex flex-col gap-4'>
                            <div className=' bg-yellow max-w-28 rounded font-bold text-gray-600 tracking-wider p-2 text-sm text-center'>MARKETING</div>
                            <h2 className=' font-bold text-5xl leading-11 sm:text-3xl'>Marketing</h2>
                        </div>

                        <div className=' flex flex-col gap-4 '>
                            <p className=' text-lg sm:text-base'>Market like the most successful companies in the world with Agile CRM's marketing automation software. </p>
                            <div className=' flex gap-5 sm:gap-3'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start mt-1'/>
                                <p className=' text-lg sm:text-base'>Marketing workflows with an easy drag-and-drop designer</p>
                            </div>
                            <div className=' flex gap-5 sm:gap-3'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start '/>
                                <p className=' text-lg sm:text-base'>Use our templates to create high converting, <br className=' sm:hidden'/> mobile responsive landing pages</p>
                            </div>
                            <div className=' flex gap-5 sm:gap-3'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start'/>
                                <p className=' text-lg sm:text-base'>Integrate social media easily into your marketing campaigns & contact views</p>
                            </div>
                        </div>
                        </div>

                        <div>
                            <Image src={Marketing} alt='Marketing'/>
                            <div>
                                <div className='relative w-full flex justify-center'>
                                    <div className=' absolute py-3 pl-6 pr-4 text-white bg-dark-purple rounded-xl max-w-full justify-between self-center bottom-4 flex gap-3 mx-3 items-center'>
                                        <h4 className=' font-bold text-lg sm:text-xs'>Automate your sales & marketing</h4>
                                        <button className=' py-4 p-6 bg-green-500 rounded-lg font-bold text-lg sm:text-xs'>Start now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=" pt-12 border-t-2 border-gray-300 mt-28 sm:mt-10">

                    <div className=' flex flex-row justify-between items-center sm:flex-col sm:gap-2'>
                        <div className=' max-w-lg flex flex-col gap-6'>
                        <div className=' flex flex-col gap-4'>
                            <div className=' bg-yellow max-w-20 rounded font-bold text-gray-600 tracking-wider p-2 text-sm'>SERVICE</div>
                            <h2 className=' font-bold text-5xl leading-11 sm:text-3xl'>Help Desk Software</h2>
                        </div>

                        <div className=' flex flex-col gap-4'>
                            <p className=' text-lg sm:text-base'>Great customer support separates decent companies <br className=' sm:hidden'/> from excellent companies. A positive customer support experience is a crucially important piece of the <br className=' sm:hidden'/> customer journey.  </p>
                            <div className=' flex gap-5 sm:gap-3'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start mt-1'/>
                                <p className=' text-lg sm:text-base'>Resolve every issue in the shortest possible time <br className=' sm:hidden'/> with powerful ticketing features</p>
                            </div>
                            <div className=' flex gap-5 sm:gap-3'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start '/>
                                <p className=' text-lg sm:text-base'>Categorize tickets according to the issue and  <br className=' sm:hidden'/>route them to the appropriate group (e.g. sales or support)</p>
                            </div>
                            <div className=' flex gap-5 sm:gap-3'>
                                <Image src={GreenArrow} alt='GreenArrow' className=' self-start'/>
                                <p className=' text-lg sm:text-base'>Enjoy at-a-glance views of important data—such <br className=' sm:hidden'/> as ticket priority—on your dashboard</p>
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