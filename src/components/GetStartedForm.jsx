import React, { useState } from "react";

const GetStartedForm = props => {
  const { onSubmit, buttonText } = props;
  const [email, setEmail] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    onSubmit(email);
    setEmail("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-0 flex justify-start border border-[#cbd5e1] max-w-[590px] rounded w-full"
    >
      <input
        type="text"
        className="flex-1 bg-transparent px-4 py-2 placeholder:text-white outline-none"
        placeholder="Enter your email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button
        className="bg-[#f1f5f9] text-[#12516a] rounded p-4 font-bold disable:bg-[#f1f5f9] disabled:text-[#C7C6CA]  min-w-[120px] py-1"
        disabled={!email}
      >
        <span className="block py-2">{buttonText}</span>
      </button>
    </form>
  );
};

export default GetStartedForm;
