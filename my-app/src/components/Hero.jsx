import ButtonSecondary from "./common/ButtonSecondary";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between md:gap-20 lg:gap-[18rem] md:px-[5rem] lg:px-[10rem] ">
        <div className="text-4xl lg:text-[4rem] font-bold lg:font-extrabold w-[18rem] md:text-[3rem]  md:w-[22rem] lg:w-[35rem] leading-tight tracking-wide">
          AI Powered Trade{" "}
          <span className="text-green-300 tracking-wide">Tracking System</span>
        </div>
        <div className="flex flex-col gap-8 lg:py-4 w-[18rem] lg:w-[21rem]">
          <span>
            With Cryptopicks, users can stay up-to-date on cryptocurrency and
            stock market information using artificial intelligence.
          </span>
          <div>
            <div className="pb-4">
              Want to integrate our AI into your system?
            </div>
            <ButtonSecondary label="Join Our Waitlist" />
          </div>
        </div>
      </div>
      <div className="invisible md:visible px-16 md:py-8 h-0 md:h-full">
        <img width="800" src="/crypto1.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
