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

      <Footer />
    </div>
  );
};

export default LandingPageDesktop;
