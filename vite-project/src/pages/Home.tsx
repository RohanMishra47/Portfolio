import PageTransition from "../components/PageTransition";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import "../styles/home_style.css";

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    const intervals = [0, 2000, 4000]; // Delay for each span
    intervals.forEach((delay, index) => {
      setTimeout(() => {
        setActiveIndex(index);
      }, delay);
    });
  }, []);

  return (
    <PageTransition>
      <div className="home-style">
      <motion.h1 className="heading"
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}>
        Welcome to My Portfolio Website.
        <span className="top-border"></span>
        <span className="left-border"></span>
      </motion.h1>
      <div className="sub-heading">
        <p>
          In this Portfolio, I've provided information about 
          <span className={`para-glow ${activeIndex === 0 ? "animate" : ""}`}> Me</span>, 
          <span className={`para-glow ${activeIndex === 1 ? "animate" : ""}`}> My Projects</span>, 
          and <span className={`para-glow ${activeIndex === 2 ? "animate" : ""}`}> My Contact</span>
        </p>
        <p>For more information, Click the links above.</p>
      </div>
    </div>
    </PageTransition>
  );
};

export default Home;
