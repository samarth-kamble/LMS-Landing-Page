import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Navbar: FunctionComponent = () => {
  return (
    <header className="w-[1280px] flex flex-row items-center justify-between py-0 px-5 box-border gap-[20px] max-w-full text-left text-base text-gray-100 font-poppins mq450:w-[992px]">
      <div className="flex flex-row items-center justify-start gap-[40px] max-w-full mq450:gap-[20px]">
        <img
          className="h-8 w-24 relative"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <nav className="m-0 flex flex-row items-start justify-start gap-[24px] text-left text-base text-gray-100 font-poppins mq750:hidden">
          <div className="h-6 w-[58px] relative leading-[24px] font-medium inline-block">
            Explore
          </div>
          <div className="h-6 w-[81px] relative font-medium inline-block">
            Company
          </div>
          <div className="h-6 w-[65px] relative font-medium inline-block">
            Support
          </div>
        </nav>
      </div>
      <div className="flex flex-row items-center justify-start gap-[20px] mq450:hidden">
        <Link
          to={"/"}
          className="h-6 w-[156px] relative font-medium inline-block whitespace-nowrap cursor-pointer no-underline text-black"
        >
          Become a member
        </Link>
        <button className="cursor-pointer [border:none] py-4 px-[30px] bg-gray-100 rounded-81xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray">
          <Link
            to={"/"}
            className="h-5 w-[51px] relative text-sm leading-[20px] font-medium font-poppins text-white text-left inline-block no-underline"
          >
            Sign in
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
