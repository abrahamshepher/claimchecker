import React from "react";
import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[400px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image src="/london.jpg" layout="fill" objectFit="cover" alt="" />
      <div className="absolute ml-[450px] h-[350px]  top-1/4 w-[40%] text-center bg-yellow-300 flex wrap ">
        <div className="bg-blue-400 w-[5%]"></div>
        <div className="bg-white w-[100%]">
          <h1 className=" sm:text-lg text-black ">Can you trust your MP?</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
