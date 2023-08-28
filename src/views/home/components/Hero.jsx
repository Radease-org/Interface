import React from "react";

const Hero = ({ handleOpenModal }) => {
  return (
    <>
      <div className="bg-[url(/images/sm-hero-bg.png)] md:bg-[url(/images/lg-hero-bg.png)] bg-center bg-cover bg-no-repeat pt-32 pb-24 md:pt-[170px] md:pb-[268px]">
        <div className="container px-4 flex flex-col justify-center items-center text-center text-white gap-6">
          <span className="flex items-center text-white font-bold bg-[linear-gradient(178deg,rgba(255,255,255,0.40)_0%,rgba(255,255,255,0.20)_100%)] rounded-lg px-3 md:px-6 py-2 border border-[rgba(255,255,255,0.30)] gap-2 md:gap-6  text-[13px] md:text-base">
            <img src="/icons/pad-lock.svg" alt="" />
            <span>Unlimited access to rare medical supplies</span>
          </span>
          <h1 className="text-[#f0fff8] text-2xl md:text-[57px] font-black leading-normal ">
            Streamline{" "}
            <span className="border-b-4 md:border-b-8 border-[#57E9A9]">
              access
            </span>{" "}
            to{" "}
            <nobr>
              m
              <span className="relative inline">
                <img
                  src="/icons/graph.svg"
                  alt=""
                  className="absolute top-[-2px] md:top-2 left-[-3px] md:left-0 min-w-[24px]"
                />
                e
              </span>
              dical
            </nobr>{" "}
            supplies without having to break the bank
          </h1>
          <span className="font-bold ">
            Enhancing the supply chain for the healthcare ecosystem with our buy
            now pay later option.
          </span>
          <button
            className="rounded py-3.5 px-8 bg-[linear-gradient(57deg,#57E9A9_0.25%,#40A8D0_100%)] min-w-[280px] text-lg font-bold"
            onClick={handleOpenModal}
          >
            Get started
          </button>
        </div>
      </div>
      <section className="hidden md:block -mt-[130px]">
        <div className="container">
          <div className="md:mx-20 card md:rounded-2xl flex items-center justify-center gap-20  bg-[#12516a] ">
            <img src="/images/hero-peak.svg" alt="peak" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
