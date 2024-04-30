"use client";
import Image from "next/image";
import Logo from "../images/Roooby.svg";
import Twitter from "../images/Footer/Twitter.png";
import Facebook from "../images/Footer/Facebook.png";
import Linkedin from "../images/Footer/Linkedin.png";
import Lang from "../images/Footer/ic_language.png";
import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export const Footer = () => {
  const router = useRouter();
  return (
    <div className=" bg-white pt-28 sm:pt-10">
      <div className=" max-w-projContainer m-auto lg:mx-5 sm:mx-3">
        <div className=" flex gap-6 justify-between pb-20 sm:flex-col sm:pb-10">
          <div className=" flex flex-col gap-6 max-w-64">
            <Image src={Logo} alt="Logo" className=" hover:cursor-pointer" />
            <p className=" text-sm leading-6 text-gray-700">
              We built an elegant solution. <br /> Our team created a fully
              integrated sales and marketing solution for SMBs
            </p>
            <div className=" flex gap-4">
              <Image src={Twitter} alt="Twitter" />
              <Image src={Facebook} alt="Facebook" />
              <Image src={Linkedin} alt="Linkedin" />
            </div>
          </div>

          <div className=" flex gap-20 flex-wrap sm:gap-10">
            <div className=" flex flex-col gap-3">
              <h4 className=" font-bold">Company</h4>
              <p className=" text-sm">About</p>
              <p className=" text-sm">Pricing</p>
              <p className=" text-sm">Jobs</p>
              <p className=" text-sm">Blog</p>
              <p className=" text-sm">Careers</p>
            </div>

            <div className=" flex flex-col gap-3">
              <h4 className=" font-bold">Product</h4>
              <p className=" text-sm">Sales software</p>
              <p className=" text-sm">Features</p>
              <p className=" text-sm">Privacy</p>
              <p className=" text-sm">Marketplace</p>
              <p className=" text-sm">Status</p>
              <p className=" text-sm">API</p>
            </div>

            <div className=" flex flex-col gap-3">
              <h4 className=" font-bold">Discover</h4>
              <p className=" text-sm">Partner Program</p>
              <p className=" text-sm">Get our newsletter</p>
              <p className=" text-sm">Sales Pipeline </p>
              <p className=" text-sm">What is CRM?</p>
              <p className=" text-sm">CRM Comparison</p>
              <p className=" text-sm">Resources</p>
            </div>

            <div className=" flex flex-col gap-3">
              <h4 className=" font-bold">Help Center</h4>
              <p className=" text-sm">Community</p>
              <p className=" text-sm">Knowledge Base</p>
              <p className=" text-sm">Academy</p>
              <p className=" text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-11.5/12 m-auto border-t-2 py-12">
        <div className=" max-w-projContainer m-auto flex justify-between sm:flex-col sm:gap-2">
          <p className=" text-sm text-gray-500">© Copyright 2024</p>
          <div className=" flex gap-9">
            <p className=" text-sm">Terms of Service</p>
            <p className=" text-sm">Privacy Policy</p>
            <p className=" text-sm">Cookies</p>
          </div>
          <div className=" flex gap-2">
            <Image src={Lang} alt="Lang" width={30} onClick={() => router.push("/")} />
            <Box sx={{ minWidth: 120, border: 0, }}>
              <FormControl fullWidth sx={{border: 0}}>
                <NativeSelect
                  defaultValue={1}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  sx={{border: 0}}
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
