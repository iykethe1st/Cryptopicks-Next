import Card from "./common/Card";

const Media = () => {
  return (
    <div className="flex flex-col items-center md:items-start py-8 bg-[#0B0120] gap-16">
      <div className="grid grid-cols-1 md:flex md:px-[6rem] px-12">
        <div className="text-3xl md:text-[2rem] lg:text-[3rem] font-semibold md:font-extrabold lg:px-16 w-[18rem] md:w-[30rem] lg:w-[40rem] leading-tight tracking-wide">
          Be In Control Of All Your trades With Our{" "}
          <span className="text-[#17F6F4]">Amazing Features</span>
        </div>

        <div className="relative overflow-hidden h-0 md:h-[10rem] w-[16rem] px-12 lg:mt-8 invisible md:visible">
          <div className="absolute border-t-2 border-r-2 border-[#17F6F4] rounded-2xl w-[16rem] h-[8rem] md:-left-20 -bottom-4 lg:-left-4"></div>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center px-12 md:px-[8rem]">
        <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 bg-gradient-to-br rounded-lg from-[#090314] via-[#353568] to-[#06040a]">
            <Card
              title="Portfolio Tracking. "
              body="The AI Bot can track
            users' portfolios in real-time and compare it to the current market
            trends. It can also provide users with insights and analytics on their
            holdings."
              img="./crypto2.svg"
            />
          </div>
          <div className="lg:col-span-2 bg-gradient-to-bl rounded-lg from-[#090314] via-[#353568] to-[#06040a]">
            <Card
              title="Real-time Market Analysis. "
              body="Cryptopicks provides real-time market analysis. 
            Insights into cryptocurrency trading will be provided by 
            monitoring multiple cryptocurrency exchanges and 
            recognizing patterns in the market."
              img="./crypto3.svg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-5 ">
          <div className="lg:col-span-2 bg-gradient-to-bl rounded-lg from-[#090314] via-[#353568] to-[#06040a]">
            <Card
              title="News Aggregation. "
              body="The bot will aggregate news 
              from multiple sources and use natural 
              language processing to provide summaries 
              and insights on relevant cryptocurrency news."
              img="./crypto4.svg"
            />
          </div>
          <div className="lg:col-span-3 bg-gradient-to-br rounded-lg from-[#090314] via-[#353568] to-[#06040a]">
            <Card
              title="Trading Automation. "
              body="With Cryptopicks, users can automate cryptocurrency trading, making 
              investment decisions on their behalf using machine learning algorithms."
              img="./crypto5.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
