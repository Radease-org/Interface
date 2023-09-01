import React from "react";
import GetStartedForm from "../../../components/GetStartedForm";

const Newsletter = props => {
  const { openModal } = props;

  return (
    <section className="my-24 md:my-32 newsletter-section">
      <div className="container p-0">
        <div className="md:mx-20 card md:rounded-2xl py-10 px-8 md:px-16 flex items-center justify-between gap-20 relative">
          <div className="text-white">
            <h3 className="text-xl md:text-3xl font-black mb-2">
              Get started with Radease
            </h3>
            <span className="text-sm font-bold max-w-[500px] block mb-10">
              What are you waiting for?! Don't ponder, place your first order
              and enjoy the Radease experience!
            </span>
            <GetStartedForm onSubmit={openModal} buttonText="I'm ready" />
          </div>
          <div className="img-container hidden lg:block absolute bottom-0 right-0">
            <img src="/images/girl-waiting.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
