"use client";
import Image from "next/image";
import ImageNew from "../images/New/Image.png";
import Avatar from "../images/New/Oval.png";
import Facebook from "../images/New/Facebook.svg";
import Twitter from "../images/New/Twitter.svg";
import In from "../images/New/Linkedin.svg";
import Chain from "../images/New/ic_insert_link.svg";
import { News } from "../../../data/database";
import Link from "next/link";

interface searchParamsType {
  id: number,
  type: string,
  date: string,
  img?: string,
  autor: string,
  title: string
}

export default function New({ searchParams }: {searchParams: searchParamsType}) {
  const news = News;
  return (
    <div>
      <div className=" flex flex-col gap-6 max-w-945 m-auto lg:mx-5 sm:mx-5 mt-5">
        <div className=" max-w-555 m-auto">
          <p className=" text-sm text-gray-400 font-bold -mb-2">
            {searchParams.type}
          </p>
          <span className=" border w-full block my-4"></span>
          <h3 className=" font-bold text-3xl leading-10 sm:text-2xl">
            {searchParams.title}
          </h3>
          <p className=" font-medium mt-4">
            {searchParams.date}
            <span className=" text-gray-500">{searchParams.autor}</span>
          </p>
        </div>
        <img
          src={searchParams.img}
          alt="Image1"
          className=" w-full"
          width={555}
          height={555}
        />
      </div>
      <div className=" bg-white pt-24 pb-44 sm:pt-10 sm:pb-10">
        <div className=" max-w-750 m-auto lg:mx-5 sm:mx-5">
          <div className=" flex flex-col gap-6">
            <p className=" font-medium text-2xl sm:text-xl">
              The Psychology of Short-Form Content: Why We Love Bite-Sized
              Videos. The Psychology of Short-Form Content: Why We Love
              Bite-Sized Videos. The Psychology of Short-Form Content: Why We
              Love Bite-Sized Videos
            </p>
            <h2 className=" font-bold text-5xl sm:text-2xl">What is a sales funnel?</h2>
            <p className=" text-lg leading-7 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className=" text-lg leading-7 sm:text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
          </div>
          <div className=" mt-4 mb-18 flex flex-col gap-4 py-6 border-y">
            <p className=" font-medium text-2xl">
              “At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident”
            </p>
            <p className=" font-medium text-gray-500">Matthew Barker</p>
          </div>
          <Image src={ImageNew} alt="ImageNew" />
          <div className=" flex flex-col gap-5 my-8">
            <h2 className=" font-bold text-5xl sm:text-2xl">What is a sales funnel?</h2>
            <p className=" text-lg leading-7 sm:text-base">
              In order to fully answer the question “What is a sales funnel?”,
              we need to tackle the different steps of the funnel. While
              different organizations have their own ways of managing and naming
              the sales process and customer touchpoints, these are usually
              structured into three distinct stages.
            </p>
            <h3 className="font-bold text-3xl sm:text-2xl">
              1. Top of the sales funnel: Awareness and discovery
            </h3>
            <p className=" text-lg leading-7 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className=" text-lg leading-7 sm:text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
          </div>
          <div className=" mt-4 mb-18 flex flex-col gap-4 py-6 border-y border-gray-600">
            <div className=" flex justify-between sm:flex-col">
              <div className=" flex gap-5">
                <Image src={Avatar} alt="Avatar" />
                <div>
                  <p className=" font-bold">Brandon Shaw</p>
                  <p>Founder & CEO</p>
                </div>
              </div>
              <div className=" flex gap-4">
                <Image src={Facebook} alt="Facebook" />
                <Image src={Twitter} alt="Twitter" className=" mt-2" />
                <Image src={In} alt="In" />
                <Image src={Chain} alt="Chain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-projContainer m-auto py-28 lg:mx-5 sm:mx-3 sm:py-10">
        <h1 className=" font-bold text-6xl sm:text-2xl">More from this topic</h1>

        <div className=" mt-20 grid grid-cols-3 lg:grid-cols-2 lg:self-center lg:gap-4 sm:grid-cols-1 sm:justify-center sm:items-center sm:mt-10">
          {/* New card start  */}
          <div className=" flex flex-col gap-4 max-w-360 sm:place-self-center">
            <p className=" text-sm text-gray-400 font-bold -mb-2">
              {news[9].type}
            </p>
            <span className=" border w-full"></span>
            <img src={news[9].img} alt="Image1" />
            <Link
              className=" font-bold text-2xl leading-8 hover:underline hover:cursor-pointer"
              href={{ pathname: "/new", query: news[9] }}
            >
              {news[9].title}
            </Link>
            <p className=" font-medium">
              {news[9].date}
              <span className=" text-gray-500"> {news[9].autor}</span>
            </p>
          </div>
          {/* New card end  */}

          {/* New card start  */}
          <div className=" flex flex-col gap-4 max-w-360 sm:place-self-center">
            <p className=" text-sm text-gray-400 font-bold -mb-2">
              {news[10].type}
            </p>
            <span className=" border w-full"></span>
            <img src={news[10].img} alt="Image1" />
            <Link
              className=" font-bold text-2xl leading-8 hover:underline hover:cursor-pointer"
              href={{ pathname: "/new", query: news[10] }}
            >
              {news[10].title}
            </Link>
            <p className=" font-medium">
              {news[10].date}
              <span className=" text-gray-500"> {news[10].autor}</span>
            </p>
          </div>
          {/* New card end  */}

          {/* New card start  */}
          <div className=" flex flex-col gap-4 max-w-360 sm:place-self-center">
            <p className=" text-sm text-gray-400 font-bold -mb-2">
              {news[11].type}
            </p>
            <span className=" border w-full"></span>
            <img src={news[10].img} alt="Image1" />
            <Link
              className=" font-bold text-2xl leading-8 hover:underline hover:cursor-pointer"
              href={{ pathname: "/new", query: news[11] }}
            >
              {news[11].title}
            </Link>
            <p className=" font-medium">
              {news[11].date}
              <span className=" text-gray-500"> {news[11].autor}</span>
            </p>
          </div>
          {/* New card end  */}
        </div>
      </div>
    </div>
  );
}
