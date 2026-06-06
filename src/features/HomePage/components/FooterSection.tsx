import SectionTitle from "../../../components/SectionTitle";
import { FaGithub } from "react-icons/fa";
import EmailCard from "../../../components/EmailCard";
import SocialMediaCard from "../../../components/SocialMediaCard";
import { Instagram, LinkedIn } from "@skill-icons/react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="bg-white flex justify-center py-25 min-h-screen"
    >
      <div className="w-full max-w-7xl mx-4">
        <div className="flex flex-col items-center">
          <SectionTitle title="Contact Me" />
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="font-bold text-[58px] text-center leading-tight">
              Let's Build Something <br />
              <span className="relative inline-block text-indigo-600">
                Together
                <svg
                  className="absolute -bottom-5 left-[75%] -translate-x-1/2 w-[80%]"
                  viewBox="0 0 300 40"
                  fill="none"
                >
                  <path
                    d="M20 15C80 5 220 5 280 15"
                    stroke="#4F46E5"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M60 30C120 22 180 22 240 30"
                    stroke="#4F46E5"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
            <p className="max-w-md text-center text-gray-600 leading-relaxed">
              Whether you have a project idea, internship opportunity, or just
              want to connect, feel free to reach out. I'm always open to
              discussing new opportunities.
            </p>
            <EmailCard />
            <div className="grid lg:grid-cols-3 w-full gap-6">
              <SocialMediaCard title="Github" text="Check out my code and projects" href="https://github.com/iqoypresto" icon={FaGithub} />
              <SocialMediaCard title="Linkedin" text="Let's connect professionally" href="https://www.linkedin.com/in/muhammad-rifqi-maulana-827244248" icon={LinkedIn} />
              <SocialMediaCard title="Instagram" text="See snaphots of my journey" href="https://www.instagram.com/iqoy._" icon={Instagram} />
            </div>
            <a href="mailto:rfqimaulana888@gmail.com?subject=Opportunity%20Discussion" target="_blank" className="bg-indigo-600 px-16 py-5 text-white rounded-xl flex items-center gap-2 transition-all duration-200 hover:bg-indigo-800">
              <p>Let's Work Together</p>
              <IoIosArrowRoundForward />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
