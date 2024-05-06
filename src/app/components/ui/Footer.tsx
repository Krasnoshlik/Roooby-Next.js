"use client";
import Image from "next/image";
import Logo from "../../images/Roooby.svg";
import Twitter from "../../images/Footer/Twitter.png";
import Facebook from "../../images/Footer/Facebook.png";
import Linkedin from "../../images/Footer/Linkedin.png";
import Lang from "../../images/Footer/ic_language.png";
import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export const Footer = () => {
  const router = useRouter();
  return (
    <div className=" bg-white pt-28 sm:pt-10">
      <div className=" max-w-projContainer m-auto lg:mx-5 sm:mx-5">
        <div className=" flex gap-6 justify-between pb-20 sm:flex-col sm:pb-10">
          <div className=" flex flex-col gap-6 max-w-64">
            <Image src={Logo} alt="Logo" className=" hover:cursor-pointer" />
            <p className=" text-sm leading-6 text-gray-700">
              We built an elegant solution. <br /> Our team created a fully
              integrated sales and marketing solution for SMBs
            </p>
            <div className=" flex gap-4">
              <Image src={Twitter} alt="Twitter" className=" hover:cursor-pointer"/>
              <Image src={Facebook} alt="Facebook" className=" hover:cursor-pointer"/>
              <Image src={Linkedin} alt="Linkedin" className=" hover:cursor-pointer"/>
            </div>
          </div>

          <div className="flex gap-20 flex-wrap sm:gap-10">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold">Company</h4>
              <a href="#" className="text-sm">
                About
              </a>
              <a href="#" className="text-sm">
                Pricing
              </a>
              <a href="#" className="text-sm">
                Jobs
              </a>
              <a href="#" className="text-sm">
                Blog
              </a>
              <a href="#" className="text-sm">
                Careers
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold">Product</h4>
              <a href="#" className="text-sm">
                Sales software
              </a>
              <a href="#" className="text-sm">
                Features
              </a>
              <a href="#" className="text-sm">
                Privacy
              </a>
              <a href="#" className="text-sm">
                Marketplace
              </a>
              <a href="#" className="text-sm">
                Status
              </a>
              <a href="#" className="text-sm">
                API
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold">Discover</h4>
              <a href="#" className="text-sm">
                Partner Program
              </a>
              <a href="#" className="text-sm">
                Get our newsletter
              </a>
              <a href="#" className="text-sm">
                Sales Pipeline
              </a>
              <a href="#" className="text-sm">
                What is CRM?
              </a>
              <a href="#" className="text-sm">
                CRM Comparison
              </a>
              <a href="#" className="text-sm">
                Resources
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold">Help Center</h4>
              <a href="#" className="text-sm">
                Community
              </a>
              <a href="#" className="text-sm">
                Knowledge Base
              </a>
              <a href="#" className="text-sm">
                Academy
              </a>
              <a href="#" className="text-sm">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-11.5/12 m-auto border-t-2 py-12">
        <div className=" max-w-projContainer m-auto flex justify-between sm:flex-col sm:gap-2">
          <p className=" text-sm text-gray-500">© Copyright 2024</p>
          <div className=" flex gap-9">
            <a href="#" className=" text-sm">Terms of Service</a>
            <a href="#" className=" text-sm">Privacy Policy</a>
            <a href="#" className=" text-sm">Cookies</a>
          </div>
          <div className=" flex gap-2">
            <Image
              src={Lang}
              alt="Lang"
              width={30}
              onClick={() => router.push("/")}
            />
            <Box sx={{ minWidth: 120, border: 0 }}>
              <FormControl fullWidth sx={{ border: 0 }}>
                <NativeSelect
                  defaultValue={1}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={1}>English</option>
                  <option value={2}>Bulgarian</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
