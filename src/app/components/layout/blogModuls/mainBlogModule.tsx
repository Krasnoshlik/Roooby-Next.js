"use client";
import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ReactPaginate from "react-paginate";
import { HalfNews } from "../../../../../data/halfdatabase";
import Link from "next/link";
import { MidNewsCard } from "../../ui/midNewsCard";
import { LargeNewsCard } from "../../ui/largeNewsCard";

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
  const [value, setValue] = useState(0);
  const [filterOption, setFilterOption] = useState("All Articles");
  const [allPosts, setAllPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 11;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setCurrentPage(0);
  };

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=50").then(
        (res) => res.json()
      ),
      fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=50"
      ).then((res) => res.json()),
    ])
      .then(([postsData, photosData]) => {
        // Ensure both arrays have the same length
        const minLength = Math.min(postsData.length, photosData.length);

        // Merge the data based on the minimum length
        const mergedNews = [];
        for (let i = 0; i < minLength; i++) {
          mergedNews.push({
            ...HalfNews[i],
            title: postsData[i]?.title,
            url: photosData[i]?.url,
          });
        }
        setAllPosts(mergedNews);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Change page
  function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  }
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    scrollToTop();
  };

  // Get filtered and paginated posts
  const filteredPosts = allPosts.filter((item) => {
    switch (filterOption) {
      case "All Articles":
        return true;
      default:
        return item.type === filterOption;
    }
  });

  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

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
                onClick={() => setFilterOption("SALES")}
              />
              <AntTab
                label="Marketing"
                className=" font-medium text-lg sm:text-base"
                onClick={() => setFilterOption("MARKETING")}
              />
              <AntTab
                label="Service"
                className=" font-medium text-lg sm:text-base"
                onClick={() => setFilterOption("SERVICE")}
              />
              <AntTab
                label="Product"
                className=" font-medium text-lg sm:text-base"
                onClick={() => setFilterOption("PRODUCT")}
              />
              <AntTab
                label="News"
                className=" font-medium text-lg sm:text-base"
                onClick={() => setFilterOption("NEWS")}
              />
            </AntTabs>
          </Box>
        </div>
      </div>

      <div className=" bg-white">
        <div className=" max-w-projContainer m-auto pt-28 pb-10 lg:mx-5 sm:mx-5 lg:flex lg:flex-col sm:pt-10 sm:pb-10">
          {loading === true && <div className=" relative top-1/2 left-1/2 font-bold text-xl">is Loading</div>}
          {currentPosts.length > 0 && <LargeNewsCard item={currentPosts[0]} />}
          <div className="mt-10 self-center flex flex-wrap gap-6 sm:justify-center sm:items-center sm:gap-y-10">
            {currentPosts.slice(1, 7).map((item, index) => (
              <MidNewsCard key={index} item={item} />
            ))}
          </div>
          {currentPosts.length > 7 && (
            <div className=" flex gap-8 sm:flex-col mt-8">
              <div className=" flex flex-col gap-6 max-w-555 sm:place-self-center">
                <p className=" text-sm text-gray-400 font-bold -mb-2">
                  {currentPosts[7].type}
                </p>
                <span className=" border w-full"></span>
                <img src={currentPosts[7].url} alt="Image1" />
                <Link
                  className=" font-bold text-3xl leading-10 hover:cursor-pointer hover:underline sm:text-xl"
                  href={{ pathname: "/new", query: currentPosts[7] }}
                >
                  {currentPosts[7].title}
                </Link>
                <p className=" font-medium">
                  {currentPosts[7].date}
                  <span className=" text-gray-500">
                    {currentPosts[7].autor}
                  </span>
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
            {currentPosts.slice(8, 11).map((item, index) => (
              <MidNewsCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(filteredPosts.length / postsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName=" bg-white px-2 rounded-xl border"
          className=" flex gap-3 mb-5"
          pageClassName="px-2"
        />
      </div>
    </>
  );
};
