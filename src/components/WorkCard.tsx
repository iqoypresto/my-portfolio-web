import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import ToolText from "./ToolText";

interface WorkCardProps {
  toolTitle: string[];
}

export default function WorkCard({ toolTitle }: WorkCardProps) {
  return (
    <div className="grid lg:grid-cols-2 bg-white drop-shadow-xl w-full rounded-xl overflow-hidden">
      <div className="p-12 bg-gray-50 ring-1 ring-gray-100 ring-inset flex justify-center">
        <a
          href="https://www.wingie.com/"
          target="_blank"
          className="drop-shadow-xl bg-black w-full h-96 transition-all duration-500 hover:scale-105 rounded-xl overflow-hidden"
        >
          <img
            src="./project-wingie.webp"
            className="w-full h-full object-cover"
            alt=""
          />
        </a>
      </div>
      <div className="p-12 flex flex-col gap-6">
        <h3 className="text-[20px] font-semibold">Wingie</h3>
        <p className="text-[16px] text-gray-600">
          A platform for comparing and finding affordable flights, as well as
          booking and purchasing tickets safely and easily in a few simple
          clicks.
        </p>
        <div className="flex gap-x-2 w-full flex-wrap">
          {toolTitle?.map((title) => (
            <ToolText title={title} />
          ))}
        </div>
        <a
          href="https://www.wingie.com/"
          target="_blank"
          className="w-10 p-2 aspect-square hover:bg-gray-50 rounded-xl"
        >
          <HiMiniArrowTopRightOnSquare className="h-full w-full object-cover text-gray-600" />
        </a>
      </div>
    </div>
  );
}
