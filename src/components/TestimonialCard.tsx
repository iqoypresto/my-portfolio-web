export default function TestimonialCard() {
  return (
    <div className="bg-white p-12 rounded-xl drop-shadow-md">
      <div className="flex flex-col gap-y-6">
        <div className="flex justify-center">
          <div className="bg-gray-400 w-16 aspect-square rounded-full overflow-hidden">
            <img
              src="./blackcat.avif"
              alt="black-cat-testimoni"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="text-[16px] text-gray-600">
          “Job well done! I am really impressed. He is very very good at what he
          does:) I would recommend Sagar and will rehire in the future for
          Frontend development.”
        </p>
        <div className="flex flex-col items-center gap-y-1">
          <h3 className="text-[20px] font-semibold">John Doe</h3>
          <p className="text-[14px] text-gray-600">Founder - xyz.com</p>
        </div>
      </div>
    </div>
  );
}
