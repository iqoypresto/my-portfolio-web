import { LuCalendarDays } from "react-icons/lu";

interface JourneyCardProps {
  imageUrl: string;
  title: string;
  role: string;
  yearRange: string;
  details: string[];
}

export default function JourneyCard({
  imageUrl,
  title,
  role,
  yearRange,
  details,
}: JourneyCardProps) {
  return (
    <div className="grid lg:grid-cols-5 gap-12 bg-white w-full lg:w-4xl p-8 rounded-xl shadow-md text-gray-600">
      <div className="col-start-1">
        <div className="aspect-square w-[50%] lg:w-full">
          <img src={imageUrl} className="w-full object-cover" />
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-col gap-4">
        <h3 className="text-black font-bold text-[20px]">{title}</h3>
        <p className="text-indigo-600 text-[16px]">{role}</p>
        <div className="flex items-center gap-2 text-[16px]">
          <LuCalendarDays /> {yearRange}
        </div>
      </div>
      <ul className="lg:col-span-2 list-disc pl-5 flex flex-col gap-2 text-[16px]">
        {details?.map((detail) => (
          <li>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
