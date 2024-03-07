import { FunctionComponent } from "react";

const MarketplaceExplore: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[17px] box-border max-w-full text-left text-45xl text-goldenrod font-poppins">
      <div className="w-[1208px] flex flex-row items-start justify-start py-0 pr-1 pl-0 box-border max-w-full">
        <img
          className="h-[675.7px] flex-1 relative rounded-13xl max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/img@2x.png"
        />
      </div>
      <div className="self-stretch bg-gray-100 flex flex-col items-center justify-start pt-[446px] px-5 pb-[108px] box-border gap-[116px] max-w-full shrink-0 mt-[-327px] mq750:gap-[58px] mq750:pb-[45px] mq750:box-border mq450:gap-[29px] mq450:pb-[29px] mq450:box-border mq1275:pb-[70px] mq1275:box-border">
        <div className="w-[1440px] h-[1572px] relative bg-gray-100 hidden max-w-full" />
        <div className="w-[1240px] flex flex-row items-start justify-start py-0 pr-[7px] pl-0 box-border max-w-full">
          <h1 className="m-0 h-36 flex-1 relative text-inherit tracking-[-0.02em] leading-[72px] font-bold font-inherit inline-block max-w-full z-[1] mq750:text-32xl mq750:leading-[58px] mq450:text-19xl mq450:leading-[43px]">
            <p className="m-0">{`Get direct `}</p>
            <p className="m-0 text-white">knowledge and insight.</p>
          </h1>
        </div>
        <div className="w-[1240px] grid flex-row items-start justify-start gap-[32px] max-w-full grid-cols-[repeat(3,_minmax(294px,_1fr))] z-[1] mq750:gap-[16px] mq750:grid-cols-[minmax(294px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(2,_minmax(294px,_510px))]">
          <div className="h-[522px] rounded-13xl overflow-hidden flex flex-row items-end justify-start py-8 px-6 box-border bg-[url('/public/imgcard@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <button className="cursor-pointer [border:none] p-1 bg-gray-200 w-[94px] rounded-lg [backdrop-filter:blur(8px)] flex flex-row items-center justify-center box-border hover:bg-gainsboro">
              <div className="h-6 w-[78px] relative text-base leading-[24px] font-medium font-poppins text-white text-left inline-block">
                @im.rehn
              </div>
            </button>
          </div>
          <div className="h-[522px] rounded-13xl overflow-hidden flex flex-row items-end justify-start py-8 px-6 box-border bg-[url('/public/imgcard1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <button className="cursor-pointer [border:none] p-1 bg-gray-200 w-[93px] rounded-lg [backdrop-filter:blur(8px)] flex flex-row items-center justify-center box-border hover:bg-gainsboro">
              <div className="h-6 w-[77px] relative text-base leading-[24px] font-medium font-poppins text-white text-left inline-block">
                @xiufang
              </div>
            </button>
          </div>
          <div className="h-[522px] rounded-13xl overflow-hidden flex flex-row items-end justify-start py-8 px-6 box-border bg-[url('/public/imgcard2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-gray-200 rounded-lg [backdrop-filter:blur(8px)] flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro">
              <div className="h-6 w-[105px] relative text-base leading-[24px] font-medium font-poppins text-white text-left inline-block">{`@dora_julia `}</div>
            </button>
          </div>
        </div>
        <div className="w-[1240px] flex flex-row items-end justify-between max-w-full gap-[20px] z-[1] mq1100:flex-wrap">
          <div className="w-[703px] flex flex-row items-end justify-start gap-[32px] min-w-[703px] max-w-full mq750:flex-wrap mq750:gap-[16px] mq750:min-w-full mq1100:flex-1">
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[160px]">
              <b className="w-[123px] h-[72px] relative leading-[72px] inline-block mq750:text-32xl mq750:leading-[58px] mq450:text-19xl mq450:leading-[43px]">
                300
              </b>
              <h1 className="m-0 w-[134px] h-10 relative text-13xl leading-[40px] font-normal font-inherit text-white inline-block mq750:text-7xl mq750:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                creators
              </h1>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[160px]">
              <b className="w-[169px] h-[72px] relative leading-[72px] inline-block mq750:text-32xl mq750:leading-[58px] mq450:text-19xl mq450:leading-[43px]">
                14.4k
              </b>
              <h1 className="m-0 w-[86px] h-10 relative text-13xl leading-[40px] font-normal font-inherit text-white inline-block mq750:text-7xl mq750:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                users
              </h1>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[160px]">
              <b className="w-[146px] h-[72px] relative leading-[72px] inline-block mq750:text-32xl mq750:leading-[58px] mq450:text-19xl mq450:leading-[43px]">
                9.11k
              </b>
              <h1 className="m-0 w-[119px] h-10 relative text-13xl leading-[40px] font-normal font-inherit text-white inline-block mq750:text-7xl mq750:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                session
              </h1>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px] text-13xl text-white">
            <h1 className="m-0 h-20 w-[215px] relative text-inherit leading-[40px] font-medium font-inherit inline-block shrink-0 mq750:text-7xl mq750:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
              Explore the marketplace
            </h1>
            <img
              className="h-16 w-16 relative rounded-81xl overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/arrowicon.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceExplore;
