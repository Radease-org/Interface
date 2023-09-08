import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const SmScreenMenu = props => {
  const { open, onClose, openModal } = props;

  //   function
  const onGetStarted = () => {
    openModal();
    onClose();
  };

  return (
    <>
      <div
        className={`fixed z-20 top-0 w-full h-full transition-all duration-300 ${
          open ? "-left-0" : "-left-full"
        } md:hidden`}
      >
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#0000008f] transition-opacity duration-300 z-20 ${
            open ? "opacity-100 block" : "opacity-0 hidden"
          }`}
          onClick={onClose}
        />
        <div className={`relative z-20 w-4/5 h-full bg-white `}>
          <header className="logo-container flex justify-center py-2.5 border-b border-[#f1f5f9]">
            <img src="/brands/blue-logo.svg" alt="" className="w-32" />
          </header>
          <div className="mt-6 mb-12">
            {[
              { label: "Why Radease", link: "/#our-promise" },
              { label: "About us", link: "/#why-radease" },
              { label: "Blog", link: "/" },
              { label: "Contact us", link: "/#footer" }
            ].map(link => (
              <Link
                to={link.link}
                onClick={onClose}
                className="block py-2 px-6 text-[#2F4993] text-sm font-bold border-b border-[#f1f5f9]"
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="btn-container flex justify-center item-center px-6">
            <button
              className="bg-[#061541] text-white p-2.5 w-full max-w-[192px] shadow-[0px_4px_6px_0px_rgba(37,99,235,0.10)] rounded tetxt-sm font-bold"
              onClick={onGetStarted}
            >
              Get Started
            </button>
          </div>
          <footer className="absolute bg-white bottom-0 left-0 w-full flex justify-center items-center gap-6 text-xl border-t border-[#f1f5f9] py-4">
            <a
              href="https://www.linkedin.com/showcase/radeasehealth/"
              target="_blank"
              rel="noreferrer"
              className="text-[#061541]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/radeasehealth?s=11&t=zsjs8GVlwd1vuP12Yqs9_w"
              target="_blank"
              rel="noreferrer"
              className="text-[#061541]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/radeasehealth?igshid=MzRlODBiNWFlZA"
              target="_blank"
              rel="noreferrer"
              className="text-[#061541]"
            >
              <AiFillInstagram />
            </a>
          </footer>
          <button
            className="absolute top-1/2 -right-[27px] border border-[#F1F5F9] p-3 rounded-lg shadow-[0px_16px_24px_0px_rgba(11,26,68,0.15)] text-[#2F4993] bg-white"
            onClick={onClose}
          >
            <HiOutlineChevronLeft className="text-3xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SmScreenMenu;
