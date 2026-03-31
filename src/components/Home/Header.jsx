import TrueFocus from "./TrueFocus";

export const Header = () => {
  return (
    <div className=" mx-auto  py-20 md:py-20 px-4 w-full flex justify-center  bg-white">
      <h1 className="text-2xl font-lato md:text-7xl  md:text-center font-bold text-black">
        Launch A New Career In As Little As{" "}
        <span className=" md:block md:mt-4">
          <TrueFocus
            sentence="Six Months"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={1}
            pauseBetweenAnimations={1}
          />
        </span>
      </h1>
    </div>
  );
};
