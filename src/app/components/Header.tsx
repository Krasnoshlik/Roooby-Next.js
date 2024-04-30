"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../images/Roooby.svg";
import { WhiteButton } from "./ui/WhiteButton";
import { PurpleButton } from "./ui/PurpleButton";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);

  return (
    <div className=" bg-white sticky top-0 z-50">
    <div className=" max-w-projContainer m-auto py-4 flex justify-between items-center lg:mx-5 sm:mx-3">
      <div className=" flex gap-24">
        <Image
          src={Logo}
          alt="Logo"
          className=" hover:cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div className=" flex gap-9 text-sm font-medium lg:gap-5 sm:hidden">
          <div>
            <a href="/">Product</a>
            {pathname === "/" && (
              <span className=" h-full border-b-2 border-black block -mt-5"></span>
            )}
          </div>
          <div>
            <a href="/pricing">Pricing</a>
            {pathname === "/pricing" && (
              <span className=" h-full border-b-2 border-black block -mt-5"></span>
            )}
          </div>
          <div>
            <a href="#">Company</a>
            {pathname === "#" && (
              <span className=" h-full border-b-2 border-black block -mt-5"></span>
            )}
          </div>
          <div>
            <a href="/blog">Blog</a>
            {pathname === "/blog" && (
              <span className=" h-full border-b-2 border-black block -mt-5"></span>
            )}
          </div>
          <div>
            <a href="/contact">Contact</a>
            {pathname === "/contact" && (
              <span className=" h-full border-b-2 border-black block -mt-5"></span>
            )}
          </div>
        </div>
      </div>

      <div className=" flex gap-5 sm:hidden">
        <div className=" w-20">
          <WhiteButton textInButton={"Log in"} />
        </div>

        <div className=" w-28">
          <PurpleButton textInButton={"Try for Free"} />
        </div>
      </div>
      <div className=" flex lg:hidden xl:hidden">
        <svg
          onClick={() => {
            setMenu(true);
          }}
          className=" flex md:block md:self-center mr-4"
          width="27"
          height="23"
          viewBox="0 0 27 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5469 4.01562C25.8984 4.01562 26.25 3.72266 26.25 3.3125V1.4375C26.25 1.08594 25.8984 0.734375 25.5469 0.734375H0.703125C0.292969 0.734375 0 1.08594 0 1.4375V3.3125C0 3.72266 0.292969 4.01562 0.703125 4.01562H25.5469ZM25.5469 13.3906C25.8984 13.3906 26.25 13.0977 26.25 12.6875V10.8125C26.25 10.4609 25.8984 10.1094 25.5469 10.1094H0.703125C0.292969 10.1094 0 10.4609 0 10.8125V12.6875C0 13.0977 0.292969 13.3906 0.703125 13.3906H25.5469ZM25.5469 22.7656C25.8984 22.7656 26.25 22.4727 26.25 22.0625V20.1875C26.25 19.8359 25.8984 19.4844 25.5469 19.4844H0.703125C0.292969 19.4844 0 19.8359 0 20.1875V22.0625C0 22.4727 0.292969 22.7656 0.703125 22.7656H25.5469Z"
            fill="#323232"
          />
        </svg>
        {menu && (
          <div className=" absolute top-0 right-0 flex flex-col bg-white p-10 h-svh z-20 gap-8 lg:hidden xl:hidden">
              <svg
                height="20px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
                width="20px"
                className=" self-end"
                onClick={() => {
                    setMenu(false);
                  }}
              >
                <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
              </svg>
            <a href="/">Product</a>
            <a href="/pricing">Pricing</a>
            <a href="#">Company</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
            <div className=" flex gap-5">
        <div className=" w-20">
          <WhiteButton textInButton={"Log in"} />
        </div>

        <div className=" w-28">
          <PurpleButton textInButton={"Try for Free"} />
        </div>
      </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};
