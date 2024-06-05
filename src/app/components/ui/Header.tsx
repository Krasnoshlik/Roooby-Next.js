"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Logo from "../../images/Roooby.svg";
import { WhiteButton } from "./WhiteButton";
import { PurpleButton } from "./PurpleButton";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import {
  MenuItem,
  MenuButton,
  ControlledMenu,
  useClick,
} from "@szhsin/react-menu";

import { SignInButton, SignedIn, SignedOut, UserButton,useUser } from "@clerk/nextjs";

export const Header = () => {
  const { isSignedIn, user } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const anchorProps = useClick(isOpen, setOpen);

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
          <div className="flex gap-2 items-center">
            {isSignedIn && <p className=" text-sm font-medium text-dark-purple">Welcome, {user.fullName}!</p>}
            <SignedOut>
        <div className=" bg-white border border-gray-100 w-full py-2 text-dark-purple font-bold text-center text-sm rounded hover:bg-dark-purple hover:text-white transition ease-in-out duration-700 px-1">
          <SignInButton/>
          </div>
        </SignedOut>  
        <SignedIn>
          <UserButton/>
        </SignedIn>
          </div>

          {isSignedIn ? null :
          <div className=" w-28">
            <PurpleButton textInButton={"Try for Free"} />
          </div>}
        </div>

        <svg
          ref={ref}
          {...anchorProps}
          className=" flex md:block md:self-center mr-2 lg:hidden xl:hidden"
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

        <ControlledMenu
          state={isOpen ? "open" : "closed"}
          anchorRef={ref}
          onClose={() => setOpen(false)}
        >
          <div className=" bg-white p-20 fixed top-0 right-0 w-360 h-full flex flex-col gap-10">
            <MenuButton onClick={() => setOpen(false)} className="self-end">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 41.756 41.756"
              >
                <g>
                  <path
                    d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465
		c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071
		C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343
		c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"
                  />
                </g>
              </svg>
            </MenuButton>
            <MenuItem>
              <a href="/">Product</a>
            </MenuItem>
            <MenuItem>
              <a href="/pricing">Pricing</a>
            </MenuItem>
            <MenuItem>
              <a href="#">Company</a>
            </MenuItem>
            <MenuItem>
              <a href="/blog">Blog</a>
            </MenuItem>
            <MenuItem>
              <a href="/contact">Contact</a>
            </MenuItem>
            <MenuItem className=" flex gap-6">
              <div className=" w-20">
                <WhiteButton textInButton={"Log in"} />
              </div>

              <div className=" w-28">
                <PurpleButton textInButton={"Try for Free"} />
              </div>
            </MenuItem>
          </div>
        </ControlledMenu>
      </div>
    </div>
  );
};
