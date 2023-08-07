import React from "react";
import Image from "next/image";
import NavButtons from "../Constants/NavButtons";
function Header() {
  return (
    <header className="flex wrap w-full h-20 bg-[#1E1E1E] ">
      {/* left */}

      <div className=" w-[20%]  "></div>

      {/* middle */}
      <div className=" w-[60%] flex grow  ">
        <Image
          src="/fc.png"
          width={68}
          height={40}
          objectPosition="left"
          alt="Image not found"
          quality={100}
        />
        <div className="px-10 flex rows gap-20 mt-6 font-bold font cursor-pointer">
          <div className="">
            {" "}
            <NavButtons ButtonText="Fact Checks" onClick={() => {}} />
          </div>
          <div className="">
            {" "}
            <NavButtons ButtonText="About" onClick={() => {}} />
          </div>
          <div className="">
            {" "}
            <NavButtons ButtonText="Updates" onClick={() => {}} />
          </div>
          <div className="">
            {" "}
            <NavButtons ButtonText="Get involved " onClick={() => {}} />
          </div>
          <div className="">
            {" "}
            <NavButtons ButtonText="Training " onClick={() => {}} />
          </div>
        </div>
      </div>
      {/* right */}
      <div className=" w-[20%] ">
        <input
          className="flex bg-inherit shadow-xl rounded-full focus:outline-none text-sm py-6 text-white placeholder-slate-400 w-[80%]"
          type="text"
          placeholder={"Search"}
        />
      </div>
    </header>
  );
}

export default Header;
