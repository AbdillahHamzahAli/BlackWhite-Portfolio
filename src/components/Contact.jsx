import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-white text-black flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/0637a84b-3013-490c-9850-18684335cb3e" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl inline font-bold border-b-4 border-black ">Contact</p>
          <p className="py-4">Submit the form below or shoot me an email - hamzahjmbg14@gmail.com</p>
        </div>
        <input type="text" className=" text-white p-2 bg-black" placeholder="Name" name="name" />
        <input type="email" className="  text-white my-4 p-2 bg-black" placeholder="Your Email" name="email" />
        <textarea className="bg-black p-2  text-white" name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
        <button className="hover:text-white text-black border-2 border-black  hover:bg-black hover:border-white px-4 py-3 my-4 mx-auto flex items-center">Submit </button>
      </form>
    </div>
  );
};

export default Contact;
