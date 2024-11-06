import type { NextPage } from "next";
import Image from "next/image";
import ResumeButton from "./resume-button";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[670px] h-[815px] flex flex-col items-start justify-start gap-8 text-left text-21xl text-white font-jim-nightshade ${className}`}
    >
      <Image
        className="w-[274px] relative rounded-corner-full h-[286px] object-cover"
        width={274}
        height={286}
        alt=""
        src="/img20240209wa00042-1@2x.png"
      />
      <div className="w-[634px] relative leading-[140%] inline-block h-[21px] shrink-0">
        <span>ZAFAR</span>
        <span className="text-goldenrod">SOHAIL</span>
      </div>
      <div className="self-stretch relative text-17xl leading-[140%] inline-block h-[388px] shrink-0">
        <p className="[margin-block-start:0] [margin-block-end:12px]">
          <span className="text-white">{`I am a `}</span>
          <span className="text-goldenrod">UX Designer</span>
          <span className="text-white">{` and `}</span>
          <span className="text-goldenrod">{`Developer `}</span>
          <span>{`based in Karachi, Pakistan. `}</span>
        </p>
        <p className="[margin-block-start:0] [margin-block-end:12px]">
          <span>{`I am currently a Governor Sindh Kamran Khan Tessori Certified Cloud Applied Generative AI Engineer (GenEng) student at `}</span>
          <span className="text-gray-200">some college↗</span>
          <span className="text-white">{` studying `}</span>
          <span className="text-gray-200">something something.</span>
        </p>
        <p className="m-0">
          <span className="text-white">{`I have interned at `}</span>
          <span className="text-gray-200">{`company name↗ `}</span>
          <span>crafting mobile and web apps</span>
        </p>
      </div>
      <ResumeButton underline={false} />
    </div>
  );
};

export default HeroSection;
