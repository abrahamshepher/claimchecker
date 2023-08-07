import React from "react";

function NavButtons({ ButtonText, onClick }) {
  return (
    <div onClick={onClick} className=" ">
      <p>{ButtonText}</p>
    </div>
  );
}

export default NavButtons;
