"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import { News } from "../../../../../data/database";
import Link from "next/link";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    borderBottom: "3px solid #A1F42A",
  },
});
const AntTab = styled(Tab)({
  textTransform: "none",
  "&.Mui-selected": {
    color: "black",
    fontWeight: "bold",
  },
});

export const MainBlog = () => {
  const news = News;
  const [value, setValue] = useState(0);
  const [filterOption, setFilterOption] = useState("All Articles");

  const currentNews = news.filter((item) => {
    if (filterOption === "All Articles") {
      return item;
    }
    if (filterOption === "Sales") {
      return item.type === "SALES" ? item : null;
    }
    if (filterOption === "Marketing") {
      return item.type === "MARKETING" ? item : null;
    }
    if (filterOption === "Service") {
      return item.type === "SERVICE" ? item : null;
    }
    if (filterOption === "Product") {
      return item.type === "PRODUCT" ? item : null;
    }
    if (filterOption === "News") {
      return item.type === "NEWS" ? item : null;
    }
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className=" max-w-projContainer m-auto lg:mx-5 sm:mx-5">
        <h1 className=" text-6xl leading-12 max-w-1xl font-bold my-24 sm:text-5xl sm:my-6">
          News and insights{" "}
          <span className=" text-gray-500"> from our experts </span>
        </h1>

        <div >
          <Box>
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="scrollable force tabs example"
              variant="scrollable"
              allowScrollButtonsMobile
            >
              <AntTab
                label="All Articles"
                className=" font-medium text-lg sm:text-base"
                onClick={() => setFilterOption("All Articles")}
              />
              <AntTab
                label="Sales"
                className=" font-medium text-lg sm:text-base"
                onClick={() => setFilterOption("Sales")}
              />
              <AntTab
                label="Marketing"
                className=" font-medium text-lg sm:text-base"
                onClick={() => setFilterOption("Marketing")}
              />
              <AntTab
                label="Service"
                className=" font-medium text-lg sm:text-base"
                onClick={() => setFilterOption("Service")}
              />
              <AntTab
                label="Product"
                className=" font-medium text-lg sm:text-base"
                onClick={() => setFilterOption("Product")}
              />
              <AntTab
                label="News"
                className=" font-medium text-lg sm:text-base"
                onClick={() => setFilterOption("News")}
              />
            </AntTabs>
          </Box>
        </div>
      </div>

      <div className=" bg-white">
        <div className=" max-w-projContainer m-auto pt-28 pb-10 lg:mx-5 sm:mx-5 lg:flex lg:flex-col sm:pt-10 sm:pb-10">
          {currentNews[0] !== undefined && (
            <div className=" flex gap-5 lg:flex-col sm:flex-col lg:self-center sm:self-center sm:justify-center sm:items-center">
              <div className=" flex flex-col justify-between py-4 border-y-2 max-w-555">
                <div>
                  <p className=" text-sm text-gray-400 font-bold">
                    {currentNews[0].type}
                  </p>
                  <Link
                    className=" font-bold text-4xl leading-11 hover:underline hover:cursor-pointer sm:text-xl"
                    href={{ pathname: "/new", query: currentNews[0] }}
                  >
                    {currentNews[0].title}
                  </Link>
                </div>
                <p className=" font-medium">
                  {currentNews[0].date}
                  <span className=" text-gray-500">{currentNews[0].autor}</span>
                </p>
              </div>
              <img src={currentNews[0].img} alt="img" className=" w-555" />
            </div>
          )}
          <div className=" mt-10 self-center flex flex-wrap gap-6 sm:justify-center sm:items-center sm:gap-y-10">
            {/* New card start  */}
            {currentNews[1] !== undefined && (
              <div className=" flex flex-col gap-4 max-w-360 sm:place-self-center">
                <p className=" text-sm text-gray-400 font-bold -mb-2">
                  {currentNews[1].type}
                </p>
                <span className=" border w-full"></span>
                <img src={currentNews[1].img} alt="Image1" />
                <Link
                  className=" font-bold text-2xl leading-8 hover:cursor-pointer hover:underline sm:text-xl"
                  href={{ pathname: "/new", query: currentNews[1] }}
                >
                  {currentNews[1].title}
                </Link>
                <p className=" font-medium">
                  {currentNews[1].date}
                  <span className=" text-gray-500">{currentNews[1].autor}</span>
                </p>
              </div>
            )}
            {/* New card end  */}

            {/* New card start  */}
            {currentNews[2] !== undefined && (
              <div className=" flex flex-col gap-4 max-w-360 sm:place-self-center">
                <p className=" text-sm text-gray-400 font-bold -mb-2">
                  {currentNews[2].type}
                </p>
                <span className=" border w-full"></span>
                <img src={currentNews[2].img} alt="Image1" />
                <Link
                  className=" font-bold text-2xl leading-8 hover:cursor-pointer hover:underline sm:text-xl"
                  href={{ pathname: "/new", query: currentNews[2] }}
                >
                  {currentNews[2].title}
                </Link>
                <p className=" font-medium">
                  {currentNews[2].date}
                  <span className=" text-gray-500">{currentNews[2].autor}</span>
                </p>
              </div>
            )}
            {/* New card end  */}

            {/* New card start  */}
            {currentNews[3] !== undefined && (
              <div className=" flex flex-col gap-4 max-w-360 sm:place-self-center">
                <p className=" text-sm text-gray-400 font-bold -mb-2">
                  {currentNews[3].type}
                </p>
                <span className=" border w-full"></span>
                <img src={currentNews[3].img} alt="Image1" />
                <Link
                  className=" font-bold text-2xl leading-8 hover:cursor-pointer hover:underline sm:text-xl"
                  href={{ pathname: "/new", query: currentNews[3] }}
                >
                  {currentNews[3].title}
                </Link>
                <p className=" font-medium">
                  {currentNews[3].date}
                  <span className=" text-gray-500">{currentNews[3].autor}</span>
                </p>
              </div>
            )}
            {/* New card end  */}

            {/* New card start  */}
            {currentNews[4] !== undefined && (
              <div className=" flex flex-col gap-4 max-w-360 sm:place-self-center">
                <p className=" text-sm text-gray-400 font-bold -mb-2">
                  {currentNews[4].type}
                </p>
                <span className=" border w-full"></span>
                <img src={currentNews[4].img} alt="Image1" />
                <Link
                  className=" font-bold text-2xl leading-8 hover:cursor-pointer hover:underline sm:text-xl"
                  href={{ pathname: "/new", query: currentNews[4] }}
                >
                  {currentNews[4].title}
                </Link>
                <p className=" font-medium">
                  {currentNews[4].date}
                  <span className=" text-gray-500">{currentNews[4].autor}</span>
                </p>
              </div>
            )}
            {/* New card end  */}

            {/* New card start  */}
            {currentNews[5] !== undefined && (
              <div className=" flex flex-col gap-4 max-w-360 sm:place-self-center">
                <p className=" text-sm text-gray-400 font-bold -mb-2">
                  {currentNews[5].type}
                </p>
                <span className=" border w-full"></span>
                <img src={currentNews[5].img} alt="Image1" />
                <Link
                  className=" font-bold text-2xl leading-8 hover:cursor-pointer hover:underline sm:text-xl"
                  href={{ pathname: "/new", query: currentNews[5] }}
                >
                  {currentNews[5].title}
                </Link>
                <p className=" font-medium">
                  {currentNews[5].date}
                  <span className=" text-gray-500">{currentNews[5].autor}</span>
                </p>
              </div>
            )}
            {/* New card end  */}

            {/* New card start  */}
            {currentNews[6] !== undefined && (
              <div className=" flex flex-col gap-4 max-w-360 sm:place-self-center">
                <p className=" text-sm text-gray-400 font-bold -mb-2">
                  {currentNews[6].type}
                </p>
                <span className=" border w-full"></span>
                <img src={currentNews[6].img} alt="Image1" />
                <Link
                  className=" font-bold text-2xl leading-8 hover:cursor-pointer hover:underline sm:text-xl"
                  href={{ pathname: "/new", query: currentNews[6] }}
                >
                  {currentNews[6].title}
                </Link>
                <p className=" font-medium">
                  {currentNews[6].date}
                  <span className=" text-gray-500">{currentNews[6].autor}</span>
                </p>
              </div>
            )}
            {/* New card end  */}
          </div>
          {currentNews[7] !== undefined && (
            <div className=" flex gap-8 sm:flex-col mt-8">
              <div className=" flex flex-col gap-6 max-w-555 sm:place-self-center">
                <p className=" text-sm text-gray-400 font-bold -mb-2">
                  {currentNews[7].type}
                </p>
                <span className=" border w-full"></span>
                <img src={currentNews[7].img} alt="Image1" />
                <Link
                  className=" font-bold text-3xl leading-10 hover:cursor-pointer hover:underline sm:text-xl"
                  href={{ pathname: "/new", query: currentNews[7] }}
                >
                  {currentNews[7].title}
                </Link>
                <p className=" font-medium">
                  {currentNews[7].date}
                  <span className=" text-gray-500">{currentNews[7].autor}</span>
                </p>
              </div>
              <div className=" pt-9 flex flex-col gap-12 sm:place-self-center">
                {/* New section start  */}
                <div className=" border-t-2 w-full max-w-555 pt-4 flex flex-col gap-6">
                  <h3 className=" font-bold text-2xl leading-9 sm:text-xl">
                    Access Roooby leads features on your <br /> mobile
                  </h3>
                  <div className=" flex justify-between items-center">
                    <p className=" font-medium">
                      11 Aug 2023,
                      <span className=" text-gray-500"> by Joshua Nash</span>
                    </p>
                    <p className=" text-sm text-gray-400 font-bold -mb-2">
                      PRODUCT
                    </p>
                  </div>
                </div>
                {/* New section end  */}
                {/* New section start  */}
                <div className=" border-t-2 w-full max-w-555 pt-4 flex flex-col gap-6">
                  <h3 className=" font-bold text-2xl leading-9 sm:text-xl">
                    Sales presentations: templates, examples <br /> and ideas on
                    how to present like a pro
                  </h3>
                  <div className=" flex justify-between items-center">
                    <p className=" font-medium">
                      11 Oct 2022,
                      <span className=" text-gray-500">by Laura Ryan</span>
                    </p>
                    <p className=" text-sm text-gray-400 font-bold -mb-2">
                      SALES
                    </p>
                  </div>
                </div>
                {/* New section end  */}
                {/* New section start  */}
                <div className=" border-t-2 w-full max-w-555 pt-4 flex flex-col gap-6">
                  <h3 className=" font-bold text-2xl leading-9 sm:text-xl">
                    How To Deliver a Successful <br /> Product Launch
                  </h3>
                  <div className=" flex justify-between items-center">
                    <p className=" font-medium">
                      30 Jan 2022,
                      <span className=" text-gray-500">
                        by Alice Washington
                      </span>
                    </p>
                    <p className=" text-sm text-gray-400 font-bold -mb-2">
                      NEWS
                    </p>
                  </div>
                </div>
                {/* New section end  */}
              </div>
            </div>
          )}

          <div className=" mt-20 grid grid-cols-3 lg:grid-cols-2 lg:self-center lg:gap-4 sm:grid-cols-1">
            {/* New card start  */}
            {currentNews[8] !== undefined && (
              <div className=" flex flex-col gap-4 max-w-360 sm:place-self-center">
                <p className=" text-sm text-gray-400 font-bold -mb-2">
                  {currentNews[8].type}
                </p>
                <span className=" border w-full"></span>
                <img src={currentNews[8].img} alt="Image1" />
                <Link
                  className=" font-bold text-2xl leading-8 hover:cursor-pointer hover:underline sm:text-xl"
                  href={{ pathname: "/new", query: currentNews[8] }}
                >
                  {currentNews[8].title}
                </Link>
                <p className=" font-medium">
                  {currentNews[8].date}
                  <span className=" text-gray-500">{currentNews[8].autor}</span>
                </p>
              </div>
            )}
            {/* New card end  */}

            {/* New card start  */}
            {currentNews[9] !== undefined && (
              <div className=" flex flex-col gap-4 max-w-360 sm:place-self-center">
                <p className=" text-sm text-gray-400 font-bold -mb-2">
                  {currentNews[9].type}
                </p>
                <span className=" border w-full"></span>
                <img src={currentNews[9].img} alt="Image1" />
                <Link
                  className=" font-bold text-2xl leading-8 hover:cursor-pointer hover:underline sm:text-xl"
                  href={{ pathname: "/new", query: currentNews[9] }}
                >
                  {currentNews[9].title}
                </Link>
                <p className=" font-medium">
                  {currentNews[9].date}
                  <span className=" text-gray-500">{currentNews[9].autor}</span>
                </p>
              </div>
            )}
            {/* New card end  */}

            {/* New card start  */}
            {currentNews[10] !== undefined && (
              <div className=" flex flex-col gap-4 max-w-360 sm:place-self-center">
                <p className=" text-sm text-gray-400 font-bold -mb-2">
                  {currentNews[10].type}
                </p>
                <span className=" border w-full"></span>
                <img src={currentNews[10].img} alt="Image1" />
                <Link
                  className=" font-bold text-2xl leading-8 hover:cursor-pointer hover:underline sm:text-xl"
                  href={{ pathname: "/new", query: currentNews[10] }}
                >
                  {currentNews[10].title}
                </Link>
                <p className=" font-medium">
                  {currentNews[10].date}
                  <span className=" text-gray-500">
                    {currentNews[10].autor}
                  </span>
                </p>
              </div>
            )}
            {/* New card end  */}
          </div>
        </div>
      </div>
    </>
  );
};
