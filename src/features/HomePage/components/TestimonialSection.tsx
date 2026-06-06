import SectionTitle from "../../../components/SectionTitle";
import TestimonialCard from "../../../components/TestimonialCard";

export default function TestimonialSection() {
  return (
    <div id="testimonials" className="flex justify-center py-25">
      <div className="w-full max-w-7xl mx-4">
        <div className="flex flex-col items-center">
          <SectionTitle title="Testimonials" />
          <p>Nice thing people have said about me:</p>
          <div className="grid lg:grid-cols-3 w-full gap-x-12 gap-y-6 my-12">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </div>
  );
}
