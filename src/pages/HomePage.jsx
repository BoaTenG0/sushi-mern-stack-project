import Hero from "../components/Hero/Hero";
import Categories from "../components/categories/Categories";
import Journey from "../components/journey/Journey";
import SpecialDishes from "../components/specialDishes/SpecialDishes";
import Testimonials from "../components/testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <Journey />
    </>
  );
};
export default HomePage;
