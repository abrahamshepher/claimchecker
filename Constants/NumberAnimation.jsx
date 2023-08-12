import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const NumberAnimation = ({ limit }) => {
  const [number, setNumber] = useState(0);

  // Use react-spring's useSpring hook to animate the number
  const springProps = useSpring({
    number: number,
    from: { number: 0 },
    to: { number: limit },
    config: { duration: 2000 }, // Animation duration in milliseconds
  });

  return (
    <div className="number-animation">
      <animated.span>
        {springProps.number.interpolate((value) => Math.floor(value))}
      </animated.span>
    </div>
  );
};

export default NumberAnimation;
