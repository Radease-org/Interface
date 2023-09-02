import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import SmScreenMenu from "./SmScreenMenu";

const Header = props => {
  const { openModal } = props;
  const [menu, setMenu] = useState(false);

  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);

  return (
    <header className="absolute z-10 top-0 left-0 w-full py-5">
      <div className="container px-6 flex items-center justify-between gap-20">
        <img src="/brands/white-logo.svg" />
        <div className="hidden lg:flex flex-1">
          <nav className="flex-1 flex self-end pb-1 gap-8 text-white font-bold">
            <Link to="/#our-promise">Why Radease</Link>
            <Link to="/#why-radease">About us</Link>
            <Link to="#">Blog</Link>
            <Link to="/#footer">Contact us</Link>
          </nav>
          <button
            className="bg-[#f1f5f9] rounded py-2.5 px-8 font-bold ml-auto"
            onClick={() => openModal("")}
          >
            Get started
          </button>
        </div>
        <button
          className="block lg:hidden text-3xl bg-[#F0FFF8] p-1 rounded-xl  rounded-tr-none"
          onClick={openMenu}
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>
      <SmScreenMenu open={menu} onClose={closeMenu} openModal={openModal} />
    </header>
  );
};

export default Header;
