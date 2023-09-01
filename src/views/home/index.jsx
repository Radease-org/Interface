import React, { useState } from "react";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Newsletter from "./components/Newsletter";

import "./style.scss";
import GetStartedModal from "./components/GetStartedModal";
import HashElement from "../../components/HashElement";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleOpenModal = email => {
    setOpenModal(true);
    setEmail(email);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Header openModal={handleOpenModal} />
      <Hero openModal={handleOpenModal} />
      <Benefits />
      <Newsletter openModal={handleOpenModal} />
      <Footer />

      <GetStartedModal
        open={openModal}
        handleClose={handleCloseModal}
        email={email}
      />
      <HashElement />
    </>
  );
};

export default Home;
