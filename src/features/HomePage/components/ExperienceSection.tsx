import JourneyCard from "../../../components/JourneyCard";
import SectionTitle from "../../../components/SectionTitle";

export default function ExperienceSection() {
  return (
    <div className="flex justify-center py-25">
      <div className="w-full max-w-7xl mx-4">
        <div className="flex flex-col items-center">
          <SectionTitle title="My Journey" />
          <div className="flex flex-col gap-12 items-center w-full">
            <p className="text-gray-600">
              A quick overview of my academic and professional development
              journey.
            </p>
            <JourneyCard
              imageUrl="./mks-coding.jpeg"
              title="Makassar Coding"
              role="Full Stack Development Bootcamp"
              yearRange="2021 - 2021"
              details={[
                "Completed an intensive Full Stack Development Bootcamp.",
                "Learned programming fundamentals using Python.",
                "Developed web applications with the Flask framework.",
                "Built and managed cloud-based databases using Firebase.",
                "Gained hands-on experience through practical projects and collaborative learning.",
              ]}
            />
            <JourneyCard
              imageUrl="./unhas.png"
              title="Hasanuddin University"
              role="Information Technology Student"
              yearRange="2022 - 2025"
              details={[
                "Studied core concepts of Information Technology, including programming, databases, software engineering, and computer systems.",
                "Participated in academic projects that strengthened problem-solving and analytical thinking skills.",
                "Built a solid foundation in modern software development practices and teamwork.",
              ]}
            />
            <JourneyCard
              imageUrl="./esa-unggul.png"
              title="Esa Unggul University"
              role="Information Technology Student"
              yearRange="2025 - Present"
              details={[
                "Continuing studies in Information Technology while focusing on practical software development skills.",
                "Expanding knowledge in web technologies, application architecture, and modern development workflows.",
                "Actively building personal projects and improving technical expertise beyond academic requirements.",
              ]}
            />
            <JourneyCard
              imageUrl="./purwadhika.png"
              title="Purwadhika Digital Technology School"
              role="Job Connector Full Stack Web Developer Program"
              yearRange="2026 - Present"
              details={[
                "Enrolled in the Job Connector Full Stack Web Developer Program with a strong focus on modern web technologies.",
                "Developed frontend applications using TypeScript and React.",
                "Consumed RESTful APIs using Axios and backendless services during the frontend development modules.",
                "Progressed to backend development by designing and building REST APIs with Express.js.",
                "Worked with PostgreSQL for relational database management and backend integration.",
                "Learned how to develop complete full stack applications from frontend interfaces to backend services and databases.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
