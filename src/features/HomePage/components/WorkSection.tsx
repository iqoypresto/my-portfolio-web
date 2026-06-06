import SectionTitle from "../../../components/SectionTitle";
import WorkCard from "../../../components/WorkCard";

export default function WorkSection() {
  return (
    <div id="work" className="bg-white flex justify-center py-25">
      <div className="w-full max-w-7xl mx-4">
        <div className="flex flex-col items-center">
          <SectionTitle title="Work" />
          <p>Some of noteworthy projects i have built:</p>
          <div className="flex flex-col gap-12 mt-12">
            <WorkCard toolTitle={['React', 'Typescript', 'React Bootstrap', 'Firebase', 'Express.js', 'PostgreSQL', 'Styled Components',]} />
          </div>
        </div>
      </div>
    </div>
  );
}
