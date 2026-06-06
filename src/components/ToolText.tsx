interface ToolTextProps {
    title: string;
}

export default function ToolText({title}: ToolTextProps) {
  return (
    <p className="bg-gray-200 py-1 px-5 rounded-xl text-gray-600 font-medium text-[14px] w-fit mb-4">
      {title}
    </p>
  );
}
