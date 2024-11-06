import type { NextPage } from "next";

export type CaseStudyType = {
  className?: string;

  /** Variant props */
  underline?: boolean;
};

const CaseStudy: NextPage<CaseStudyType> = ({
  className = "",
  underline = false,
}) => {
  return (
    <div
      className={`w-[512px] relative h-7 text-left text-sm text-goldenrod font-inter ${className}`}
      data-underline={underline}
    >
      <div className="absolute top-[0px] left-[0px] leading-[140%] font-semibold">{`VIEW CASE STUDY ->`}</div>
      <div className="absolute top-[23.5px] left-[-0.5px] border-goldenrod border-t-[1px] border-solid box-border w-0.5 h-px opacity-[0]" />
    </div>
  );
};

export default CaseStudy;
