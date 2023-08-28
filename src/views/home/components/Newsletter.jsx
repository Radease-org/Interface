import React from "react";

const Newsletter = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);
  };
  return (
    <section className="my-24 md:my-32 newsletter-section">
      <div className="container p-0">
        <div className="md:mx-20 card md:rounded-2xl py-10 px-8 md:px-16 flex items-center justify-center gap-20">
          <div className="text-white">
            <h3 className="text-xl md:text-3xl font-black mb-2">
              Subscribe to our Newsletter
            </h3>
            <span className="text-sm font-bold">
              Get news & update on our latest products and releases.
            </span>
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex justify-start border border-[#cbd5e1] max-w-[590px] rounded"
            >
              <input
                type="text"
                className="flex-1 bg-transparent px-4 py-2 placeholder:text-white"
                placeholder="Enter your email"
                name="email"
              />
              <button className="bg-[#f1f5f9] text-[#12516a] rounded p-2.5 font-bold">
                Subscribe
              </button>
            </form>
          </div>
          <div className="img-container hidden md:block">
            <img src="/images/airplane.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
