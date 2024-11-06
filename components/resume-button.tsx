import type { NextPage } from "next";

export type ResumeButtonType = {
  className?: string;

  /** Variant props */
  underline?: boolean;
};

const ResumeButton: NextPage<ResumeButtonType> = ({
  className = "",
  underline = false,
}) => {
  return (
    <div
      className={`w-[154px] relative h-6 text-left text-sm text-goldenrod font-inter ${className}`}
      data-underline={underline}
    >
      <div className="absolute top-[0px] left-[0px] leading-[140%] font-semibold">
        CHECK MY RESUME ↗
      </div>
      <div className="absolute top-[23.5px] left-[-0.5px] border-goldenrod border-t-[1px] border-solid box-border w-0.5 h-px opacity-[0]" />
    </div>
  );
};

export default ResumeButton;
