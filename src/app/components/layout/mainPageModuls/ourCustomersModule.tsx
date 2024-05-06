import Image from "next/image";
import Oval1 from "../../../images/Customers/Oval1.png";
import Oval2 from "../../../images/Customers/Oval2.png";
import Oval3 from "../../../images/Customers/Oval3.png";

export const OurCustomers = () => {
  return (
    <div className=" max-w-projContainer m-auto my-32 lg:mx-5 sm:mx-5 sm:my-10">
      <div className=" flex justify-between mb-16 sm:flex-col">
        <h2 className=" text-5xl font-bold leading-11 sm:text-3xl">
          We love our Customers <br /> and They love us too
        </h2>
        <div className=" group/seeall flex items-end gap-1 hover:cursor-pointer sm:self-end">
          <p className=" font-medium text-lg">
            See all
          </p>
          <p className=" text-green-500 font-bold mb-1 group-hover/seeall:translate-x-2 transition ease-in-out delay-150 ">
            {">"}
          </p>
        </div>
      </div>

      <div className=" grid grid-cols-3 gap-5 lg:grid-cols-2 sm:flex sm:flex-col sm:items-center">
        {/* Commment start */}
        <div className=" flex flex-col gap-12 max-w-360 justify-between">
          <div className=" flex flex-col gap-4">
            <h1 className=" text-9xl text-light-green max-h-16 sm:max-h-4 sm:text-6xl">“</h1>
            <span className=" w-full border border-gray-300"></span>
            <p className=" text-2xl font-medium leading-8 sm:text-xl">
              The best thing we love about Yoora is it does two-way sync with
              Google Apps. It has helped us to better organize and keep
              everything on track.
            </p>
          </div>
          <div>
            <div className=" flex gap-2">
              <Image src={Oval1} alt="Oval1" />
              <div className=" sm:self-center">
                <p className=" font-bold sm:text-sm">Lola Ross</p>
                <p className="sm:text-sm">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
        {/* Commment end */}
        {/* Commment start */}
        <div className=" flex flex-col gap-12 max-w-360 justify-between">
          <div className=" flex flex-col gap-4">
            <h1 className=" text-9xl text-light-green max-h-16 sm:max-h-4 sm:text-6xl">“</h1>
            <span className=" w-full border border-gray-300 "></span>
            <p className=" text-2xl font-medium leading-8 sm:text-xl">
            It has made our sales department more effective and efficient. It’s easy to use and it’s constantly updated. It’s easy to use and it’s constantly updated.
            </p>
          </div>
          <div>
            <div className=" flex gap-2">
              <Image src={Oval2} alt="Oval1" />
              <div className=" sm:self-center">
                <p className=" font-bold sm:text-sm">Daisy Phelps</p>
                <p className="sm:text-sm">Speaker and Author, Lifeiseasy</p>
              </div>
            </div>
          </div>
        </div>
        {/* Commment end */}
        {/* Commment start */}
        <div className=" flex flex-col gap-12 max-w-360 justify-between">
          <div className=" flex flex-col gap-4">
            <h1 className=" text-9xl text-light-green max-h-16 sm:max-h-4 sm:text-6xl">“</h1>
            <span className=" w-full border border-gray-300"></span>
            <p className=" text-2xl font-medium leading-8 sm:text-xl">
            Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!
            </p>
          </div>
          <div>
            <div className=" flex gap-2">
              <Image src={Oval3} alt="Oval1" />
              <div className=" sm:self-center">
                <p className=" font-bold sm:text-sm">Andrew Wilkins</p>
                <p className="sm:text-sm">Managing Director, Nirma Studio</p>
              </div>
            </div>
          </div>
        </div>
        {/* Commment end */}
      </div>
    </div>
  );
};
