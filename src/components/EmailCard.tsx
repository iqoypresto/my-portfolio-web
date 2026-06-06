import { MdOutlineEmail } from "react-icons/md";
import { RxArrowTopRight } from "react-icons/rx";

export default function EmailCard() {
  return (
    <div className="bg-white p-12 drop-shadow-md rounded-xl flex flex-col items-center lg:flex-row lg:justify-between gap-10">
      <div className="flex items-center">
        <div className="w-16 aspect-square h-16 bg-gray-200 rounded-full p-3">
          <MdOutlineEmail className="w-full h-full object-cover text-indigo-600" />
        </div>
      </div>
      <div className="lg:w-lg flex flex-col gap-1">
        <div className="text-indigo-600 font-semibold">Email</div>
        <div className="font-semibold">rfqimaulana888@gmail.com</div>
        <div className="text-[16px] text-gray-600">
          I usually reply within 24 hours
        </div>
      </div>
      <div className="flex items-center">
        <a href="mailto:rfqimaulana888@gmail.com?subject=Opportunity%20Discussion" target="_blank" rel="noopener noreferrer" className="aspect-square w-8 h-8 transition-all duration-100  hover:scale-125">
          <RxArrowTopRight className="w-full h-full object-cover text-indigo-600" />
        </a>
      </div>
    </div>
  );
}
