import type { IconType } from "react-icons";
import { RxArrowTopRight } from "react-icons/rx";

interface SocialMediaCardType {
    title: string;
    text: string;
    href: string;
    icon: IconType;
}

export default function SocialMediaCard({title, text, href, icon: Icon}: SocialMediaCardType) {
  return (
    <div className="bg-white p-12 drop-shadow-md rounded-xl flex justify-between gap-6">
      <div className="flex items-center">
        <div className="w-16 aspect-square h-16 bg-gray-200 rounded-full p-3">
          <Icon className="w-full h-full object-cover " />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold">{title}</div>
        <p className="text-gray-600 text-[16px]">
          {text}
        </p>
      </div>
      <div className="flex items-center">
        <a href={href} target="__blank" rel="noopener noreferrer" className="aspect-square w-8 h-8">
          <RxArrowTopRight className="w-full h-full object-cover text-indigo-600" />
        </a>
      </div>
    </div>
  );
}
