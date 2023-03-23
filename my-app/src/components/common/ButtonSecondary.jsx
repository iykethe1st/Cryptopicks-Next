const ButtonPrimary = ({ label }) => {
  return (
    <button className="text-xs text-black lg:text-base font-bold py-3 px-4 rounded bg-gradient-to-b from-green-500 to-green-300 hover:text-slate-500 active:text-slate-800">
      {label}
    </button>
  );
};

export default ButtonPrimary;
