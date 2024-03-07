import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import LearnFromCreators from "../components/LearnFromCreators";
import MarketplaceExplore from "../components/MarketplaceExplore";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";

const LandingPageDesktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-center justify-start pt-8 px-0 pb-[116px] box-border gap-[99px] tracking-[normal] mq750:gap-[49px] mq450:gap-[25px]">
      <Navbar />
      <LearnFromCreators />
      <MarketplaceExplore />
      <FrameComponent />
      <section className="w-[1280px] flex flex-row items-start justify-start pt-0 px-5 pb-[17px] box-border max-w-full text-left text-37xl text-white font-poppins">
        <div className="flex-1 rounded-13xl bg-gray-100 flex flex-col items-center justify-start py-[116px] px-5 box-border gap-[24px] max-w-full mq450:pt-[75px] mq450:pb-[75px] mq450:box-border">
          <h1 className="m-0 w-[625px] h-16 relative text-inherit leading-[64px] font-bold font-inherit inline-block max-w-full mq750:text-26xl mq750:leading-[51px] mq450:text-15xl mq450:leading-[38px]">
            Engage without limits
          </h1>
          <div className="w-[569px] h-6 relative text-base leading-[24px] inline-block max-w-full">
            Join a growing community and talk directly with your favorites
            creators
          </div>
          <button className="cursor-pointer [border:none] py-4 pr-7 pl-8 bg-goldenrod rounded-13xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-darkgoldenrod">
            <div className="h-5 w-[85px] relative text-sm leading-[20px] font-medium font-poppins text-gray-100 text-left inline-block">
              Get Started
            </div>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPageDesktop;
