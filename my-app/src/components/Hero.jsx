import ButtonSecondary from "./common/ButtonSecondary";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center md:flex px-12 py-8 md:px-[8rem] lg:px-[16rem] mt-24 md:gap-28">
      <div className="text-4xl lg:text-[3rem] font-bold lg:font-extrabold  w-[18rem] lg:w-[25rem] leading-tight tracking-wide">
        AI Powered Trade{" "}
        <span className="text-green-300 tracking-wide">Tracking System</span>
      </div>
      <div className="flex flex-col gap-8 lg:py-0 w-[18rem] lg:w-[21rem]">
        <span>
          With Cryptopicks, users can stay up-to-date on cryptocurrency and
          stock market information using artificial intelligence.
        </span>
        <div>
          <div className="pb-4">Want to integrate our AI into your system?</div>
          <ButtonSecondary label="Join Our Waitlist" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
