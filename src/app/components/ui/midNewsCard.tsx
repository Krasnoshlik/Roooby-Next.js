import { FC } from 'react';
import Link from 'next/link';

interface NewsItem {
  url: string | undefined;
  id: string;
  type: string;
  img: string;
  title: string;
  date: string;
  autor: string;
}

interface MidNewsCardProps {
  item: NewsItem;
}

export const MidNewsCard: FC<MidNewsCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col gap-4 max-w-360 sm:place-self-center">
      <p className="text-sm text-gray-400 font-bold -mb-2">
        {item.type}
      </p>
      <span className="border w-full"></span>
      <img src={item.url} alt="Image1" />
      <Link
        href={{ pathname: `/new`, query: { id: item.id.toString() } }}
        passHref
        className="font-bold text-2xl leading-8 hover:cursor-pointer hover:underline sm:text-xl"
      >
          {item.title}
      </Link>
      <p className="font-medium">
        {item.date}
        <span className="text-gray-500">{item.autor}</span>
      </p>
    </div>
  );
};