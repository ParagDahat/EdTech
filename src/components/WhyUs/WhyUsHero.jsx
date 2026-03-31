import React from "react";
import styles from "./WhyUsHero.module.css";

const WhyUsHero = () => {
  return (
    <div className="grid h-96 place-content-center bg-black space-y-4">
      <BubbleText text="Why Choose Calibre?" fontSize="text-5xl" color="text-red-600" />
      <BubbleText
        text="Transform your future with industry-leading coding education and mentorship"
        fontSize="text-lg md:text-2xl"
        color="text-white"
      />
    </div>
  );
};

const BubbleText = ({ text, fontSize, color }) => {
  return (
    <h2 className={`text-center font-thin ${fontSize} ${color}`}>
      {text.split("").map((char, idx) => (
        <span className={styles.hoverText} key={idx}>
          {char}
        </span>
      ))}
    </h2>
  );
};

export default WhyUsHero;
