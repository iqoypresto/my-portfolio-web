export default function HeroSection() {
  return (
    <div className="lg:h-[92.5vh] flex justify-center">
      <div className="max-w-7xl w-full grid lg:grid-cols-5 gap-10 items-center mx-4 my-16">
        <div className="flex flex-col gap-8 row-start-2 lg:row-start-1 lg:col-span-3">
          <div className="bg-[#e6f8ea] w-fit text-[#3e904c] font-semibold px-3 py-2 rounded-full text-[14px] flex items-center gap-3">
            <span className="size-2 rounded-full bg-current inline-block shrink-0 animate-pulse "></span>
            <p>Open to Full Stack / Backend Developer Opportunities</p>
          </div>
          <div className="font-bold text-[58px] leading-tight">
            Hi, I'm Rifqi. <br />Entry-Level <span className="text-indigo-600">Full Stack Developer</span>
          </div>
          <div className="text-gray-600">
            Building practical web applications across the frontend and backend, with a focus on clean interfaces, reliable business logic, and scalable application architecture.
          </div>
          <div className="flex gap-5">
            <button className="bg-indigo-600 text-white p-3 rounded-md">View Projects</button>
            <a href='/#contact' className="border border-gray-300 p-3 rounded-md">Let's Connect</a>
          </div>
        </div>
        <div className="flex items-center h-full lg:mx-10 lg:ms-20 col-start-1 lg:col-start-4 lg:col-span-2 ">
          <div className=" w-full aspect-square">
              <img src="./P1515764.jpg" alt="black-cat" className="h-full w-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
