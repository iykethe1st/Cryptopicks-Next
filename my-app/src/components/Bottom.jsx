import ButtonPrimary from "./common/ButtonPrimary";

const Bottom = () => {
  return (
    <div className="bg-[#0B0120] flex flex-col items-center py-16">
      <div className="relative grid grid-cols-1 h-[30rem] md:grid-cols-5 p-12 md:px-[8rem] lg:px-[2rem] justify-items-center gap-4 w-10/12 bg-[#160b2c] rounded-lg overflow-hidden">
        <div className="flex flex-col gap-12 col-span-3">
          <span className="text-2xl font-bold lg:text-5xl w-[16rem] md:w-[25rem] lg:w-[30rem]">
            Make better decisions as a trader with cryptopicks.
          </span>
          <div>
            <ButtonPrimary label="Join Our Waitlist" />
          </div>
        </div>
        <div className="md:w-[25rem] w-[15rem] absolute -bottom-1 -right-3">
          <img src="./vector.svg" alt="vector" />
        </div>
      </div>

      <div className="text-sm pt-16">
        &#169; 2023 CryptopicksAI | All Rights Reserved
      </div>
    </div>
  );
};

export default Bottom;
