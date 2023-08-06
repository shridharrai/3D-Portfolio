import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-electric-purple">Shridhar</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            Innovative Software Developer, <br className="sm:block hidden" />
            building web and mobile applications
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
