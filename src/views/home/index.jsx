import React, { useState } from "react";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Newsletter from "./components/Newsletter";

import "./style.scss";
import GetStartedModal from "./components/GetStartedModal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Header />
      <Hero handleOpenModal={handleOpenModal} />
      <Benefits />
      <Newsletter />
      <Footer />

      <GetStartedModal open={openModal} handleClose={handleCloseModal} />
    </>
  );
};

export default Home;
