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
                    src="./about-picture.jpeg"
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
                I'm an entry-level Full Stack Developer with hands-on experience building web applications across both frontend and backend. My recent work includes developing an online laundry operations platform and a padel court booking platform as part of my Full Stack Web Development training at Purwadhika.
Through these projects, I've worked with TypeScript, Next.js, Express.js, PostgreSQL, and Prisma ORM to build user interfaces, REST APIs, database-driven features, authentication and authorization, and application business logic.
                <br />
                <br />
                I enjoy working on problems where software needs to translate real-world processes into clear and reliable systems, from managing users and outlets to validating orders and handling booking availability.
I'm currently looking for an opportunity to contribute as a Full Stack, Backend, or Frontend Developer while continuing to grow through real-world engineering challenges.
                <br />
                <br />
                What I Work With:
                <br />
                <br />
                <ul className="list-disc pl-5 grid grid-cols-2 gap-2.5">
                  <li>Full-Stack Web Development</li>
                  <li>React & Next.js</li>
                  <li>TypeScript & JavaScript</li>
                  <li>Node.js & Express.js</li>
                  <li>REST API Development</li>
                  <li>PostgreSQL & Prisma ORM</li>
                  <li>Authentication & Authorization</li>
                  <li>Business Logic & Database Integration</li>
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
