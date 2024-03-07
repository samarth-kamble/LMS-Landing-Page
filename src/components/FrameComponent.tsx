import { FunctionComponent } from "react";
import EarningsFrame from "./EarningsFrame";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className="w-[1280px] flex flex-row items-start justify-start pt-0 px-5 pb-[57px] box-border gap-[126px] max-w-full text-left text-37xl text-gray-100 font-poppins mq750:gap-[31px] mq750:pb-[37px] mq750:box-border mq1100:flex-wrap mq450:gap-[16px] mq1275:gap-[63px]">
      <div className="flex flex-col items-start justify-start gap-[24px] min-w-[508px] max-w-full mq750:min-w-full mq1100:flex-1">
        <h1 className="m-0 w-[508px] h-32 relative text-inherit tracking-[-0.02em] leading-[64px] font-bold font-inherit inline-block mq750:text-26xl mq750:leading-[51px] mq450:text-15xl mq450:leading-[38px]">
          Why become a creator?
        </h1>
        <div className="w-[508px] h-12 relative text-base tracking-[-0.02em] leading-[24px] inline-block">{`Engage with your supporter and subscriber to sell your skills, knowledge and passions `}</div>
        <button className="cursor-pointer [border:none] py-4 pr-[29px] pl-8 bg-gray-100 rounded-13xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray">
          <div className="h-5 w-[121px] relative text-sm leading-[20px] font-medium font-inter text-white text-left inline-block">
            Become a creator
          </div>
        </button>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[34px] min-w-[394px] max-w-full text-5xl mq750:flex-wrap mq750:gap-[17px] mq750:min-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[72px] min-w-[186px] mq450:gap-[36px]">
          <EarningsFrame
            engazeSvg="/engazesvg.svg"
            engagement="Engagement "
            engageOnADeeperLevelWithT="Engage on a deeper level with the fans that matter most"
            propWidth="286px"
          />
          <EarningsFrame
            engazeSvg="/freesvg.svg"
            engagement="Free"
            engageOnADeeperLevelWithT="No monthly fee or sign-up fee"
            propWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[72px] min-w-[186px] mq450:gap-[36px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="w-32 overflow-hidden flex flex-row items-start justify-start pt-1 pb-[5px] pr-[7px] pl-2.5 box-border gap-[12px]">
              <div className="h-[111px] w-[49px] flex flex-col items-start justify-start gap-[37px]">
                <div className="w-[50.2px] h-[50.2px] relative rounded-lg box-border border-[4px] border-solid border-gray-100" />
                <img
                  className="self-stretch h-[27.7px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-contain"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                <div className="self-stretch h-[111px] flex flex-col items-end justify-start gap-[37px]">
                  <img
                    className="w-[48.5px] h-[27.7px] relative rounded-8xs"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className="self-stretch h-[50.2px] relative rounded-lg box-border border-[4px] border-solid border-gray-100" />
                </div>
              </div>
            </div>
            <h3 className="m-0 self-stretch h-8 relative text-inherit leading-[32px] font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[26px]">{`Autonomy `}</h3>
            <div className="w-[286px] h-12 relative text-base leading-[24px] inline-block">
              Full autonomy on when and who you talk to.
            </div>
          </div>
          <EarningsFrame
            engazeSvg="/earnsvg.svg"
            engagement="Earn "
            engageOnADeeperLevelWithT="Add a new source of income that you can control"
            propWidth="286px"
            propAlignSelf="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
