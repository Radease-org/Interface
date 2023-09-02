import React, { useEffect } from "react";
import GetStartedForm from "../../../components/GetStartedForm";
import { useState } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Hero = ({ openModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  //   functions
  const handleBtnShow = scrollVal => setShowBackToTop(scrollVal > 100);
  const onScrollToTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  //   useEffect
  useEffect(() => {
    if (!window) return;
    document.addEventListener("scroll", e => {
      handleBtnShow(window.scrollY);
    });
    handleBtnShow(window.scrollY);
  }, []);
  return (
    <>
      <div className=" hero-section">
        <div className=" pattern">
          <img
            src="/images/left-pattern.svg"
            alt=""
            className="w-[20%] max-w-[450px] absolute bottom-0 left-0"
          />
          <img
            src="/images/right-pattern.svg"
            alt=""
            className="w-[20%] max-w-[450px] absolute bottom-0 right-0 hidden lg:block"
          />
          <img
            src="/images/right-mask.svg"
            alt=""
            className="w-6 lg:w-12 h-6 lg:h-12 absolute bottom-[50%] lg:bottom-[70%] right-[10%]"
          />
          <img
            src="/images/left-mask.svg"
            alt=""
            className=" w-6 lg:w-12 h-6 lg:h-12 absolute bottom-[45%] lg:bottom-[40%] left-[2%] lg:left-[10%]"
          />
        </div>
        <div className="container px-4 flex flex-col justify-center items-center text-center text-white gap-6">
          <span className="flex items-center text-white font-bold bg-[linear-gradient(111deg,rgba(255,255,255,0.40)_36.23%,rgba(255,255,255,0.20)_103.64%)] rounded-lg px-3 md:px-6 py-2 border border-[rgba(255,255,255,0.30)] gap-2 md:gap-6  text-[13px] md:text-base">
            <img src="/icons/heart-break.svg" alt="" className="w-4 h-4" />
            <span>Transforming healthcare, bridging supply gaps</span>
          </span>
          <h1 className="text-[#57E9A9] text-2xl md:text-[57px] font-black leading-normal max-w-[1050px]">
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
            Avoid market runs and multiple vendors with Radease. Get everything
            in one place – easier, faster, cheaper, safer.
          </span>
          <GetStartedForm buttonText="I am in" onSubmit={openModal} />
        </div>
      </div>
      <section className="hidden md:block -mt-[130px]">
        <div className="container">
          <div className="md:mx-20 card md:rounded-2xl flex items-center justify-center gap-20 bg-[url(/images/doodle.svg)] bg-cover bg-[#061541]">
            <img src="/images/hero-peak.svg" alt="peak" />
          </div>
        </div>
      </section>
      {showBackToTop && (
        <button
          className="fixed bottom-8 right-8 p-3 rounded-full back-to-top text-[#061541] z-10"
          onClick={onScrollToTop}
        >
          <HiOutlineChevronDoubleUp />
        </button>
      )}
    </>
  );
};

export default Hero;
