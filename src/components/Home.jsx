import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-white">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold">Hamzah Ali</h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-gray-700">I'm a Full Stack Developer.</h2>
        <p className="py-4 max-w-[700px]">"Crafting cutting-edge web experiences with passion and precision."</p>
        <div className="max-w-[160px]">
          <Link to="work" smooth={true} duration={500} className="text-black group border-black border-2 py-3 px-5 my-2 flex items-center hover:bg-black hover:text-white">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
