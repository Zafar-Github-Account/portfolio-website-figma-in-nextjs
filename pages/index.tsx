import type { NextPage } from "next";
import { useCallback } from "react";
import HeroSection from "../components/hero-section";
import Project from "../components/project";
import About from "../components/about";
import Project2 from "../components/project2";
import Project1 from "../components/project1";
import Project3 from "../components/project3";

const Design: NextPage = () => {
  const onWorkTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='selectedWorksContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative bg-gray-100 h-[2843.7px] text-left text-45xl text-white font-jim-nightshade">
      <div className="absolute top-[0px] left-[0px] bg-gray-100 flex flex-col items-start justify-center pt-12 px-[180px] pb-28 gap-[120px]">
        <div className="w-[1080px] flex flex-row items-center justify-start gap-[663px] text-13xl text-goldenrod font-jsmath-cmsy10">
          <div className="w-[188px] relative h-[29px]">
            <div className="absolute top-[0px] left-[0px]">PORTFOLIO</div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-end gap-10 text-base text-white font-inter">
            <div
              className="relative font-medium cursor-pointer"
              onClick={onWorkTextClick}
            >
              Work
            </div>
            <div
              className="relative font-medium cursor-pointer"
              onClick={onAboutTextClick}
            >
              About
            </div>
            <div
              className="relative font-medium cursor-pointer"
              onClick={onContactTextClick}
            >
              Contact
            </div>
          </div>
        </div>
        <HeroSection />
        <div
          className="flex flex-col items-start justify-start gap-16"
          data-scroll-to="selectedWorksContainer"
        >
          <div className="flex flex-col items-start justify-start gap-8">
            <div className="relative leading-[132%]">
              <span>{`Professional `}</span>
              <span className="text-goldenrod">Works</span>
            </div>
            <div className="w-[1082px] relative border-goldenrod border-t-[2px] border-solid box-border h-0.5" />
          </div>
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="flex flex-row items-start justify-center gap-6">
              <Project property1="Default" description="WebDevlepment" />
              <Project1
                property1="Default"
                description="Amazon Virtual Asistant Study"
              />
            </div>
            <div className="flex flex-row items-start justify-center gap-6">
              <Project2 property1="Default" description="Web Designing" />
              <Project3
                property1="Default"
                description="Artificial Intelligence"
              />
            </div>
          </div>
        </div>
        <About />
        <div
          className="flex flex-col items-start justify-start gap-16"
          data-scroll-to="contactContainer"
        >
          <div className="flex flex-col items-start justify-start gap-8">
            <div className="relative leading-[132%]">
              <span>{`Contact `}</span>
              <span className="text-goldenrod">Me</span>
            </div>
            <div className="w-[1082px] relative border-goldenrod border-t-[2px] border-solid box-border h-0.5" />
          </div>
          <div className="w-[1080px] relative h-[26px] text-13xl">
            <div className="absolute top-[0px] left-[0px] leading-[132%]">
              <span>Send me</span>
              <span className="text-goldenrod"> an email ↗</span>
            </div>
            <div className="absolute top-[3px] left-[450px] w-[600px] flex flex-row items-start justify-end gap-10 text-xl font-inter">
              <a
                className="relative leading-[132%] font-medium text-[inherit] [text-decoration:none]"
                href="https:www.linkedin.com/in/zafar-sohail-b573bb244"
                target="_blank"
              >
                LinkedIn ↗
              </a>
              <a
                className="relative leading-[132%] font-medium text-goldenrod [text-decoration:none]"
                href="https://www.instagram.com/"
                target="_blank"
              >
                Instagram ↗
              </a>
              <div className="relative leading-[132%] font-medium">
                <a
                  className="relative leading-[132%] font-medium text-[inherit] [text-decoration:none]"
                  href="https://web.facebook.com/profile.php?id=100026838502851"
                  target="_blank"
                >
                
                Facebook ↗
                </a>
              </div>
              <a
                className="relative leading-[132%] font-medium text-goldenrod [text-decoration:none]"
                href="https://github.com/Zafar-Github-Account"
                target="_blank"
              >
                Github ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
