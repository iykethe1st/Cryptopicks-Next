const ButtonPrimary = ({ label }) => {
  return (
    <button className="text-xs lg:text-base font-bold ring-2 py-2 px-4 rounded ring-green-500 hover:bg-green-600 active:bg-green-700">
      {label}
    </button>
  );
};

export default ButtonPrimary;
