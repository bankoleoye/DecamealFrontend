import React from "react";
import Meals from "./Meals/Meals";
import Diet from "./Diet/DietPage";
import MenuPage from "./menu/MenuPage";
import TestimonialSection from "../../components/testimonial";
import Notification from "../../components/notification";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import TopHero from "../../components/topHero";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <TopHero />
      <Meals />
      <Diet />
      <MenuPage />
      <TestimonialSection />
      <Notification />
      <Footer />
    </>
  );
};

export default LandingPage;
