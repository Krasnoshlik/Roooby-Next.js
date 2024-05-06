"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import { News } from "../../../../../data/database";
import Link from "next/link";
import { MidNewsCard } from "../../ui/midNewsCard";

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
    switch (filterOption) {
      case "All Articles":
        return true;
      case "Sales":
        return item.type === "SALES";
      case "Marketing":
        return item.type === "MARKETING";
      case "Service":
        return item.type === "SERVICE";
      case "Product":
        return item.type === "PRODUCT";
      case "News":
        return item.type === "NEWS";
      default:
        return false;
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

        <div>
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
          <div className="mt-10 self-center flex flex-wrap gap-6 sm:justify-center sm:items-center sm:gap-y-10">
            {currentNews.slice(1, 7).map((item, index) => (
              <MidNewsCard key={index} item={item} />
            ))}
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

          <div className="mt-20 grid grid-cols-3 lg:grid-cols-2 lg:self-center lg:gap-4 sm:grid-cols-1">
            {currentNews.slice(8, 11).map((item, index) => (
              <MidNewsCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
