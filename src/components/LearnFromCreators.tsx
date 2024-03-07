import { FunctionComponent } from "react";

const LearnFromCreators: FunctionComponent = () => {
  return (
    <section className="w-[1280px] flex flex-row items-start justify-start pt-0 pb-[17px] pr-[57px] pl-5 box-border max-w-full text-left text-53xl text-gray-100 font-poppins mq1275:pr-7 mq1275:box-border">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[77px] max-w-full mq750:gap-[38px] mq450:gap-[19px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border min-w-[599px] max-w-full mq750:min-w-full">
          <h1 className="m-0 self-stretch h-60 relative text-inherit leading-[80px] font-bold font-inherit inline-block mq750:text-39xl mq750:leading-[64px] mq450:text-24xl mq450:leading-[48px]">
            <p className="m-0">{`Learn from your `}</p>
            <p className="m-0">{`favorite creators `}</p>
            <p className="m-0">
              <span>about</span>
              <span className="text-goldenrod"> fantasy reports</span>
            </p>
          </h1>
        </div>
        <div className="h-[204px] w-[204px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border text-20xl-4 text-white">
          <div className="self-stretch flex-1 relative rounded-[50%] z-[1] border-[0px] border-solid border-gray-100" />
          <div className="rounded-145xl bg-gray-100 overflow-hidden flex flex-col items-center justify-start pt-[37px] pb-[38px] pr-[22px] pl-[27px] ml-[-184px]">
            <div className="flex flex-row items-start justify-start py-0 pr-[26px] pl-5">
              <b className="h-[59px] w-[41px] relative inline-block mq750:text-13xl mq450:text-5xl">
                1:1
              </b>
            </div>
            <b className="w-[115px] h-[30px] relative text-lgi-7 inline-block">
              video calls
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnFromCreators;
