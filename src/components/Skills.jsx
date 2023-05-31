import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Github from "../assets/github.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skill" className="bg-white w-full my-auto sm:h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-black inline font-bold border-b-4 border-gray-700">Skills</p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 uppercase">
          <div className="shadow-sm shadow-gray-300 hover:scale-110 duration-500 ">
            <img className="mx-auto w-20 " src={HTML} alt="HTML" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-sm shadow-gray-300 hover:scale-110 duration-500 ">
            <img className="mx-auto w-20 " src={CSS} alt="CSS" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-sm shadow-gray-300 hover:scale-110 duration-500 ">
            <img className="mx-auto w-20 " src={Javascript} alt="Javascript" />
            <p className="my-4">Javascript</p>
          </div>

          <div className="shadow-sm shadow-gray-300 hover:scale-110 duration-500 ">
            <img className="mx-auto w-20 " src={Tailwind} alt="Tailwind" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-sm shadow-gray-300 hover:scale-110 duration-500 ">
            <img className="mx-auto w-20 " src={Mongo} alt="Mongo" />
            <p className="my-4">Mongo</p>
          </div>
          <div className="shadow-sm shadow-gray-300 hover:scale-110 duration-500 ">
            <img className="mx-auto w-20 " src={Node} alt="Node" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-sm shadow-gray-300 hover:scale-110 duration-500 ">
            <img className="mx-auto w-20 " src={ReactImg} alt="ReactImg" />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-sm shadow-gray-300 hover:scale-110 duration-500 ">
            <img className="mx-auto w-20 " src={Github} alt="Github" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
