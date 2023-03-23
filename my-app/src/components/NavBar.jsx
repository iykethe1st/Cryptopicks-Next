import Logo from "./common/Logo";
import ButtonPrimary from "./common/ButtonPrimary";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      id: 1,
      item: <ButtonPrimary label="View Dashboard" />,
      link: `/`,
    },
  ];

  return (
    <section className="text-lg grid grid-cols-1 md:flex md:justify-between md:px-[2rem] lg:px-[3rem] p-4">
      <div className="flex justify-between py-2 md:px-[2rem] flex-wrap">
        <div className="">
          <Logo />
        </div>
        <div className="grid grid-cols-1 lg:flex items-center px-2">
          <FaBars
            className={
              open
                ? "w-[1.5rem] h-[1.5rem] text-slate-400 ring-2 ring-slate-400 transition ease-in-out delay-150 duration-700 rounded md:hidden"
                : "w-[1.5rem] h-[1.5rem] text-slate-400 transition ease-in-out delay-150 duration-700 md:hidden"
            }
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      <nav
        className={`${
          open
            ? "transition-all ease-in-out delay-1000 duration-1000"
            : "hidden"
        } transition ease-in-out delay-1000 duration-1000 md:flex mb-2 mx-auto md:mx-0`}
      >
        <ul className="md:flex gap-16 items-center  w-[18rem] md:w-full">
          {navItems.map((nav) => (
            <div key={nav.id} to={nav.link}>
              <li className="py-2  border-b-2 md:border-0 border-slate-400 cursor-pointer">
                {nav.item}
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
