import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-5 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="font-bold text-4xl inline border-b-4 border-white">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right font-bold text-4xl">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, animi?</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, tempore mollitia alias suscipit iusto quae id? Mollitia, repellendus animi velit officiis sit quas ea deserunt saepe eos, at vero. Dignissimos quas exercitationem
              ipsam corporis, rem officia obcaecati porro eligendi blanditiis amet ea autem corrupti soluta incidunt doloremque repellat, nam laboriosam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
