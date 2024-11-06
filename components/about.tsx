import type { NextPage } from "next";
import ResumeButton from "./resume-button";

export type AboutType = {
  className?: string;
};

const About: NextPage<AboutType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-16 text-left text-45xl text-white font-jim-nightshade ${className}`}
      data-scroll-to="aboutContainer"
    >
      <div className="flex flex-col items-start justify-start gap-8">
        <div className="relative leading-[132%]">
          <span>{`About `}</span>
          <span className="text-goldenrod">Me</span>
        </div>
        <div className="w-[1082px] relative border-goldenrod border-t-[2px] border-solid box-border h-0.5" />
      </div>
      <div className="flex flex-col items-start justify-start gap-8 text-xl">
        <div className="w-[904px] relative leading-[150%] inline-block h-[509px] shrink-0">
          <p className="m-0">
            I A web developer is a professional who builds and maintains
            websites and web applications. They write the code that powers
            everything you see and interact with on a website, from the layout
            and design to the backend that handles data and functionality. Web
            developers usually fall into three main categories:
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            <span>1.</span>
            <span className="text-goldenrod">
              {" "}
              **Frontend Developers**: These developers focus on what users see.
              They work with languages like HTML, CSS, and JavaScript, along
              with libraries and frameworks like React, Angular, or Vue.js.
              Their goal is to ensure that websites are visually appealing,
              responsive, and accessible.
            </span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            2. **Backend Developers**: Backend developers work on the server
            side, handling the logic and database interactions that enable a
            website to function. They often use languages such as Node.js,
            Python, Ruby, PHP, and databases like MySQL, PostgreSQL, or MongoDB.
            Their focus is on creating efficient, secure, and scalable
            applications.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            <span>3.</span>
            <span className="text-goldenrod">
              {" "}
              **Full Stack Developers**: Full stack developers are skilled in
              both frontend and backend development. They can build a complete
              web application from scratch, handling everything from the
              interface to the server and database management.
            </span>
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Most web developers are also familiar with version control tools
            like Git, deployment practices, and collaborative workflows. Many
            developers specialize further by learning popular frameworks like
            Next.js (for React) and CSS libraries like Tailwind, which help
            streamline the process and create more polished, consistent web
            experiences.
          </p>
        </div>
        <ResumeButton underline={false} />
      </div>
    </div>
  );
};

export default About;
