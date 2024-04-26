"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import { News } from "../../../database";

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className=" max-w-projContainer m-auto">
        <h1 className=" text-6xl leading-12 max-w-1xl font-bold my-24">
          News and insights{" "}
          <span className=" text-gray-500"> from our experts </span>
        </h1>

        <div className=" max-w-xl flex gap-5">
          <Box>
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
            >
              <AntTab label="All Articles" className=" font-medium text-lg" />
              <AntTab label="Sales" className=" font-medium text-lg" />
              <AntTab label="Marketing" className=" font-medium text-lg" />
              <AntTab label="Service" className=" font-medium text-lg" />
              <AntTab label="Product" className=" font-medium text-lg" />
              <AntTab label="News" className=" font-medium text-lg" />
            </AntTabs>
          </Box>
        </div>
      </div>
      <div className=" bg-white">
        <div className=" max-w-projContainer m-auto pt-28 pb-40">
          <div className=" flex gap-5">
            <div className=" flex flex-col justify-between py-4 border-y-2">
              <div>
                <p className=" text-sm text-gray-400 font-bold">
                  {news[0].type}
                </p>
                <h3 className=" font-bold text-4xl leading-11 max-w-555">
                  {news[0].title}
                </h3>
              </div>
              <p className=" font-medium">
                {news[0].date}
                <span className=" text-gray-500"> {news[0].autor}</span>
              </p>
            </div>
            <img src={news[0].img} alt="img" />
          </div>
        

        <div className="  my-28 grid grid-cols-3 grid-rows-2 gap-y-28">

          {/* New card start  */}
          <div className=" flex flex-col gap-4 max-w-360">
            <p className=" text-sm text-gray-400 font-bold -mb-2">
              {news[1].type}
            </p>
            <span className=" border w-full"></span>
            <img src={news[1].img} alt="Image1" />
            <h3 className=" font-bold text-2xl leading-8">{news[1].title}</h3>
            <p className=" font-medium">
              {news[1].date}
              <span className=" text-gray-500"> {news[1].autor}</span>
            </p>
          </div>
          {/* New card end  */}

          {/* New card start  */}
          <div className=" flex flex-col gap-4 max-w-360">
            <p className=" text-sm text-gray-400 font-bold -mb-2">
              {news[2].type}
            </p>
            <span className=" border w-full"></span>
            <img src={news[2].img} alt="Image1" />
            <h3 className=" font-bold text-2xl leading-8">{news[2].title}</h3>
            <p className=" font-medium">
              {news[2].date}
              <span className=" text-gray-500"> {news[2].autor}</span>
            </p>
          </div>
          {/* New card end  */}

          {/* New card start  */}
          <div className=" flex flex-col gap-4 max-w-360">
            <p className=" text-sm text-gray-400 font-bold -mb-2">
              {news[3].type}
            </p>
            <span className=" border w-full"></span>
            <img src={news[3].img} alt="Image1" />
            <h3 className=" font-bold text-2xl leading-8">{news[3].title}</h3>
            <p className=" font-medium">
              {news[3].date}
              <span className=" text-gray-500"> {news[3].autor}</span>
            </p>
          </div>
          {/* New card end  */}

          {/* New card start  */}
          <div className=" flex flex-col gap-4 max-w-360">
            <p className=" text-sm text-gray-400 font-bold -mb-2">
              {news[4].type}
            </p>
            <span className=" border w-full"></span>
            <img src={news[4].img} alt="Image1" />
            <h3 className=" font-bold text-2xl leading-8">{news[4].title}</h3>
            <p className=" font-medium">
              {news[4].date}
              <span className=" text-gray-500"> {news[4].autor}</span>
            </p>
          </div>
          {/* New card end  */}

          {/* New card start  */}
          <div className=" flex flex-col gap-4 max-w-360">
            <p className=" text-sm text-gray-400 font-bold -mb-2">
              {news[5].type}
            </p>
            <span className=" border w-full"></span>
            <img src={news[5].img} alt="Image1" />
            <h3 className=" font-bold text-2xl leading-8">{news[5].title}</h3>
            <p className=" font-medium">
              {news[5].date}
              <span className=" text-gray-500"> {news[5].autor}</span>
            </p>
          </div>
          {/* New card end  */}

          {/* New card start  */}
          <div className=" flex flex-col gap-4 max-w-360">
            <p className=" text-sm text-gray-400 font-bold -mb-2">
              {news[6].type}
            </p>
            <span className=" border w-full"></span>
            <img src={news[6].img} alt="Image1" />
            <h3 className=" font-bold text-2xl leading-8">{news[6].title}</h3>
            <p className=" font-medium">
              {news[6].date}
              <span className=" text-gray-500"> {news[6].autor}</span>
            </p>
          </div>
          {/* New card end  */}

        </div>

      </div>
      </div>
    </>
  );
};
