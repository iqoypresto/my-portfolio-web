import {
  ExpressJsLight,
  FigmaLight,
  FirebaseLight,
  Git,
  GithubLight,
  JavaScript,
  NodeJsLight,
  PostgreSqlLight,
  PythonLight,
  ReactLight,
  TailwindCssLight,
  TypeScript,
} from "@skill-icons/react";
import SectionTitle from "../../../components/SectionTitle";

export default function SkillsSection() {
  return (
    <div className="bg-white flex justify-center py-25">
      <div className="w-full max-w-7xl mx-4">
        <div className="flex flex-col items-center">
          <SectionTitle title="Skills" />
          <p className="text-gray-600">
            The skills, tools and technologies I am really good at:
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-6 mt-12 w-full gap-y-4 lg:gap-x-20 lg:gap-y-12">
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <JavaScript width={64} height={64} />
              <p>Javascript</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <TypeScript width={64} height={64} />
              <p>Typescript</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <ReactLight width={64} height={64} />
              <p>React</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <PythonLight width={64} height={64} />
              <p>Python</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <NodeJsLight width={64} height={64} />
              <p>Node.js</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <ExpressJsLight width={64} height={64} />
              <p>Express.js</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <PostgreSqlLight width={64} height={64} />
              <p>PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <FirebaseLight width={64} height={64} />
              <p>Firebase</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <Git width={64} height={64} />
              <p>Git</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <GithubLight width={64} height={64} />
              <p>Github</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <TailwindCssLight width={64} height={64} />
              <p>Tailwindcss</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-2">
              <FigmaLight width={64} height={64} />
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
