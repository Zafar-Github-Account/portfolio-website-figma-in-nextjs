import type { NextPage } from "next";
import Image from "next/image";
import CaseStudy from "./case-study";

export type ProjectType = {
  className?: string;
  description?: string;

  /** Variant props */
  property1?: "Default";
};


const Project3: NextPage<ProjectType> = ({
  className = "",
  property1 = "Default",
  description,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-center p-2 gap-2 text-left text-5xl text-white font-inter ${className}`}
      data-property1={property1}
    >
      <Image
        className="w-[512px] relative h-[341.3px] overflow-hidden shrink-0 object-cover"
        width={512}
        height={341}
        alt=""
        src="/change-photo-here3@2x.png"
      />
      <div className="w-[512px] relative leading-[132%] font-medium inline-block">
        {description}
      </div>
      <CaseStudy underline={false} />
    </div>
  );
};

export default Project3;
