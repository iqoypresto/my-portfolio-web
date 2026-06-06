import SectionTitle from "../../../components/SectionTitle";

export default function AboutSection() {
  return (
    <div id="about" className="flex justify-center py-25">
      <div className="w-full max-w-7xl mx-4">
        <div className="flex flex-col items-center justify-center">
          <SectionTitle title="About Me" />
          <div className="mt-12 grid lg:grid-cols-2 gap-12">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-fit z-0 h-fit">
                <div className="absolute top-6 scale-x-110 w-full h-full bg-gray-200 z-[-1] lg:scale-100 lg:top-8 lg:-left-8"></div>

                <div className="bg-gray-50 p-4">
                  <img
                    src="./blackcat.avif"
                    alt="profile"
                    className="block h-90 lg:h-120 lg:w-100 object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[30px] font-semibold leading-tight">
                Get to know the person behind the screen.
              </h2>
              <div className="text-gray-600 text-[16px]">
                <br />
                I'm a passionate Frontend Developer who enjoys transforming
                ideas into clean, responsive, and user-friendly web
                applications. My focus is building digital experiences that
                combine intuitive design, performance, and maintainable code.
                <br />
                <br />
                Currently, I'm pursuing my studies in Information Technology
                while actively participating in a Full Stack Development program
                to expand my expertise beyond frontend technologies. Through
                hands-on projects, I've gained experience building modern web
                applications using React, TypeScript, Tailwind CSS, and
                Firebase.
                <br />
                <br />
                As I continue my journey into full stack development, I've
                become familiar with designing and consuming REST APIs,
                integrating backend services using Axios, and developing
                server-side applications with Express.js. Understanding how
                frontend and backend systems communicate has given me a broader
                perspective on building scalable and efficient applications.
                <br />
                <br />
                What excites me most about software development is the
                opportunity to solve real-world problems through technology.
                Whether it's crafting a seamless user interface, optimizing
                application performance, or developing backend functionality, I
                enjoy every stage of the development process.
                <br />
                <br />
                Beyond coding, I'm committed to continuous learning and
                self-improvement. I enjoy exploring new technologies, building
                personal projects, and challenging myself to become a more
                versatile developer every day.
                <br />
                <br />
                Finally, some quick bits about me.
                <br />
                <br />
                <ul className="list-disc pl-5 grid grid-cols-2 gap-2.5">
                  <li>Information Technology Student</li>
                  <li>Frontend Web Developer</li>
                  <li>React & TypeScript Enthusiast</li>
                  <li>Passionate Learner</li>
                  <li>Problem Solver</li>
                  <li>UI/UX Focused Mindset</li>
                  <li>Open to Collaboration</li>
                  <li>Continuous Self-Improvement</li>
                </ul>
                <br />
                Currently, I'm building projects, expanding my technical
                knowledge, and seeking opportunities to gain real-world
                experience. If you'd like to collaborate, discuss ideas, or
                simply connect, I'd be happy to hear from you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
