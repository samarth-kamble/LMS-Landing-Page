import { FunctionComponent, useMemo, type CSSProperties } from "react";

type EarningsFrameType = {
  engazeSvg?: string;
  engagement?: string;
  engageOnADeeperLevelWithT?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const EarningsFrame: FunctionComponent<EarningsFrameType> = ({
  engazeSvg,
  engagement,
  engageOnADeeperLevelWithT,
  propWidth,
  propAlignSelf,
}) => {
  const engageOnAStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-5xl text-gray-100 font-poppins">
      <img
        className="w-32 h-32 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={engazeSvg}
      />
      <h3 className="m-0 self-stretch h-8 relative text-inherit leading-[32px] font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[26px]">
        {engagement}
      </h3>
      <div
        className="w-[286px] h-12 relative text-base leading-[24px] inline-block"
        style={engageOnAStyle}
      >
        {engageOnADeeperLevelWithT}
      </div>
    </div>
  );
};

export default EarningsFrame;
