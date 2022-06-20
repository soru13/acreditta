import React, { Fragment } from "react";
import Lottie from 'react-lottie';
import * as location from "./1055-world-locations.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
const Loader = () => {
  return (
    <Lottie options={defaultOptions} height={200} width={200} />
  );
};

export default Loader;
