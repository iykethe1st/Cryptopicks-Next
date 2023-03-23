const Card = ({ title, body, img }) => {
  return (
    <div className="relative ring-[0.02rem] ring-cyan-400 flex flex-col rounded-xl text-sm md:text-base lg:text-2xl overflow-hidden h-[22rem] lg:h-[30rem]">
      <span className="p-8 lg:p-16">
        <span className="font-extrabold">{title}</span>
        {body}
      </span>

      <div className="absolute -bottom-4 -right-4">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Card;
