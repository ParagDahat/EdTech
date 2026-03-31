
import { Header } from "./Header";
import FeaturesSectionDemo from "./Features";
import { CardHoverEffectDemo } from "../TestomonialsDemo";
import { BenefitsSection } from "./BenefitsSection";


import { BackgroundGradientAnimation } from "./BackGroundGradientAnimation";
import BlurText from "./BlurText";
import PlacedCandidates from "./PlacedCandidates";


 
const Home = () => {

  return (
    <>
      {/* <Squares
        speed={0.5}
        squareSize={25}
        direction="diagonal" // up, down, left, right, diagonal
        hoverFillColor="#222"
      /> */}
      <BackgroundGradientAnimation>
        <div className="absolute overflow-x-hidden z-5 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          {/* <p className="bg-clip-text text-black drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Calibre
        </p> */}
          <h1 className="md:text-9xl text-6xl  text-black font-bold">
            <span className="text-white bg-primary md:inline-block md:pl-10  md:pt-6 md:rounded-tl-2xl md:rounded-bl-2xl">
              Ed
            </span>
            Tech
          </h1>
          <p className="text-black tracking-widest uppercase font-light text-sm md:text-xl mt-2">
            Technology & Services
          </p>

          <BlurText
            text="Learn IT . Master Skills. Get Placed — The Edtech Way!"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-black mt-4 md:mt-10 text-center text-2xl md:text-4xl"
          />
        </div>
      </BackgroundGradientAnimation>

      {/* <div className="bg-black" style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> */}
      <Header />

      <FeaturesSectionDemo />

        {/* <PlacedStudents /> */}
      <BenefitsSection />
      <PlacedCandidates />
      
      <CardHoverEffectDemo />
    </>
  );
};

export default Home;
