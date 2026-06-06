interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({title}: SectionTitleProps) {
  return (
    <h5 className="bg-gray-200 py-1 px-5 rounded-xl text-gray-600 font-medium text-[14px] w-fit mb-4">
      {title}
    </h5>
  );
}
