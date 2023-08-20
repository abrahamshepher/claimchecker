import React from "react";

const Card = ({ imageUrl, text, width = 500 }) => {
  return (
    // <div className="relative">
    //   <div className="absolute inset-0 flex justify-content items-center  bg-opacity-0 text-white">
    //     <p className="text-sm justify-content text-center">{text}</p>
    //   </div>
    //   {/* background */}
    //   <img src={imageUrl} alt="Background" className="w-full h-full " />
    // </div>
    <>
      <div
        className="bg-back overflow-hidden bg-slate-600"
        style={{
          width: width,
          aspectRatio: 1 / 2,
        }}
      >
        <div className="bg-black"></div>
      </div>
    </>
  );
};

export default Card;
