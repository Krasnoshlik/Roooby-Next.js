import { FC } from "react";
import Link from "next/link";

interface NewsItem {
    url: string | undefined;
    id: string;
    type: string;
    img: string;
    title: string;
    date: string;
    autor: string;
  }
  
  interface LargeNewsCardProps {
    item: NewsItem;
  }

export const LargeNewsCard: FC<LargeNewsCardProps> = ({ item }) => {
    return (
        <div className=" flex gap-5 lg:flex-col sm:flex-col lg:self-center sm:self-center sm:justify-center sm:items-center">
              <div className=" flex flex-col justify-between py-4 border-y-2 max-w-555">
                <div>
                  <p className=" text-sm text-gray-400 font-bold">
                    {item.type}
                  </p>
                  <Link
                    className=" font-bold text-4xl leading-11 hover:underline hover:cursor-pointer sm:text-xl"
                    href={{ pathname: "/new", query: { id: item.id.toString() } }}
                  >
                    {item.title}
                  </Link>
                </div>
                <p className=" font-medium">
                  {item.date}
                  <span className=" text-gray-500">{item.autor}</span>
                </p>
              </div>
              <img src={item.url} alt="img" className=" w-555" />
            </div>
    )
}