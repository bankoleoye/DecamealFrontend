import TopHero from "../../components/topHero";
import FixedContainer from "../../components/footer/Footer";
import MealSpread from "./MealSpread";
import Nav from "../../components/nav/Nav";
import SearchSection from "./SearchSection";

const Meal = () => {
  return (
    <>
      <Nav />
      <TopHero />
      <SearchSection />
      <MealSpread />
      <FixedContainer />
    </>
  );
};

export default Meal;
