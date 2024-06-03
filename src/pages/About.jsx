import AboutCards from "../components/Cards/AboutCards";
import HeroAbout from "../components/Hero/HeroAbout";

import "../App.css";
import Education from "../components/Education/Education";
import SliderReview from "../components/Slider/SliderReview";

const About = () => {
  return (
    <>
      <HeroAbout />
      <AboutCards />
      <Education />
      <SliderReview />
    </>
  );
};

export default About;
