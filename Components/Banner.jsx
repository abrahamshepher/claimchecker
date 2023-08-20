import React from "react";
import Image from "next/image";
import NumberAnimation from "../Constants/NumberAnimation";
import { useSpring, animated } from "react-spring";
import Card from "../Constants/Card";

function Banner() {
  return (
    <div className="flex flex-col pb-10">
      <div className="relative h-[400px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
        {/* Image */}
        <Image src="/london.jpg" layout="fill" objectFit="cover" alt="" />
        {/* Picture k bich wla div */}
        <div className="absolute ml-[450px] h-[300px] mt-[80px]  w-[40%] text-center flex wrap  ">
          <div className="bg-gradient-to-r from-blue-300 bg-[#00FCE8] to-transparent w-[5%]"></div>
          <div className="bg-white w-[100%] bg-opacity-80">
            <h1 className=" sm:text-5xl text-black font-xl font-bold">
              Can you trust your MP?
            </h1>
            <div>
              <p className="text-gray-400 mt-6 sm:text-2xl pl-14">
                Our politicians owe us the truth. What’s your MP’s track record
                on honest politics?
              </p>
            </div>
            <div className="mt-2 pl-16 py-2 w-[100%]  flex-wrap ">
              <div>
                {" "}
                <input
                  className="pl-2 w-[40%] flex bg-inherit focus:outline-none text-sm py-2 text-black placeholder-slate-400  border-[3px] border-[#00FCE8] "
                  type="text"
                  placeholder={"Postcode"}
                />
              </div>
              <div className="bg-black w-[40%] h-6">
                <button>
                  {" "}
                  <p>Find MP</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Bich wla div end */}
      </div>
      {/* 2nd div blue  */}
      <div className="bg-gradient-to-r from-blue-300 bg-[#00FCE8] to-transparent h-[325px]">
        {" "}
        {/* Text wla div */}
        <div className="flex justify-center mt-10 ">
          <div className="">
            <h1 className="text-black sm:text-3xl font-bold">
              <p className="text-center"> Of the 44 MPs we’ve asked to</p>
              <p>
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Correct themselves this year,
              </p>
              <p className="text-center"> 8 have done so</p>
            </h1>
            <br />
            <p className="text-[#1E1E1E] ">
              Sign our petition to make it easier for them to correct themselves
              in Parliament.
            </p>
            <br />

            <button className="bg-[#1E1E1E] w-[80%] h-10 ml-12">
              <p className="text-center font-bold">
                I want my MP to stand up for honesty
              </p>
            </button>
          </div>
        </div>
        {/* 2nd div blue  End*/}
      </div>
      {/* 3nd div gray */}
      <div className="bg-[#F0F0F0] h-[250px]">
        <div className="grid grid-cols-2 gap-24 ">
          {/* left box */}
          <div className="ml-[400px] mt-9 bg-white h-[180px] w-[350px]">
            {" "}
            <div>
              <div className="flex justify-center items-center text-black mt-[10%] sm:text-6xl font-bold">
                <NumberAnimation limit={50131} />
              </div>
              <div>
                <br />
                <p className="text-black text-center">
                  Supporters have asked to fix our broken
                  <br /> &nbsp;system of Parliamentary corrections
                </p>
              </div>
            </div>
          </div>
          {/* rightbox */}
          <div className="mt-9 bg-white h-[180px] w-[350px]">
            <div>
              <div className="flex justify-center items-center text-black mt-[10%] sm:text-6xl font-bold">
                <NumberAnimation limit={12561} />
              </div>
              <div>
                <br />
                <p className="text-black text-center">
                  Messages sent to MPs by Full Fact supporters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3nd div gray END*/}

      {/* 4TH div white part wla */}
      <div className="">
        {/* First Header ka div */}
        <div className="text-center text-black sm:text-3xl font-bold">
          <p className="text-center bg-gradient-to-r from-blue-300 bg-[#00FCE8] to-transparent p-4">
            We're here to change debate for the better
          </p>
        </div>
      </div>
      {/* 5TH div WHITE part wla */}
    </div>
  );
}

export default Banner;
