import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer className="w-[1280px] flex flex-row items-start justify-between py-0 px-5 box-border [row-gap:20px] max-w-full gap-[0px] text-left text-lg text-gray-100 font-poppins mq1275:flex-wrap">
      <div className="h-[130px] w-[424px] flex flex-col items-start justify-between min-w-[424px] max-w-full mq750:min-w-full mq1275:flex-1">
        <img
          className="w-24 h-8 relative"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/facebook.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/twitter.svg"
          />
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/instagram.svg"
          />
        </div>
      </div>
      <div className="w-[816px] flex flex-row items-start justify-start gap-[32px] min-w-[816px] max-w-full mq750:flex-wrap mq1100:min-w-full mq450:gap-[16px] mq1275:flex-1">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[117px]">
          <b className="w-[57px] h-[26px] relative leading-[26px] inline-block">
            About
          </b>
          <div className="flex flex-col items-start justify-start gap-[8px] text-base">
            <div className="w-[102px] h-6 relative leading-[24px] inline-block">
              How it works
            </div>
            <div className="w-20 h-6 relative leading-[24px] inline-block">
              Company
            </div>
            <div className="w-[122px] h-6 relative leading-[24px] inline-block">{`Help & support`}</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-[26px] pl-0 gap-[16px]">
          <b className="w-[117px] h-[26px] relative leading-[26px] inline-block">
            For creators
          </b>
          <div className="flex flex-col items-start justify-start gap-[8px] text-base">
            <div className="w-[154px] h-6 relative leading-[24px] inline-block">
              How can I get paid
            </div>
            <div className="w-[147px] h-6 relative leading-[24px] inline-block">
              Become a creator
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[117px]">
          <b className="w-[52px] h-[26px] relative leading-[26px] inline-block">
            Learn
          </b>
          <div className="flex flex-col items-start justify-start gap-[8px] text-base">
            <div className="w-[35px] h-6 relative leading-[24px] inline-block">
              Blog
            </div>
            <div className="w-[119px] h-6 relative leading-[24px] inline-block">{`Cookies policy `}</div>
            <div className="w-[113px] h-6 relative leading-[24px] inline-block">
              Privacy policy
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-[23px] pl-0 gap-[16px]">
          <b className="w-[75px] h-[26px] relative leading-[26px] inline-block">
            Support
          </b>
          <div className="flex flex-col items-start justify-start gap-[8px] text-base">
            <div className="w-[115px] h-6 relative leading-[24px] inline-block">
              Service status
            </div>
            <div className="w-[110px] h-6 relative leading-[24px] inline-block">
              Report abuse
            </div>
            <div className="w-[157px] h-6 relative leading-[24px] inline-block">
              Dispute a payment
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
