import React from "react";

interface Props {
  message: string;
}

const Banner: React.FC<Props> = (props) => {
  return (
    <div className="banner">
    <div className="banner__content">
      <p>{props.message}</p>
      <div className="rectangle"></div>
      <p>{props.message}</p>
      <div className="rectangle"></div>
      <p>{props.message}</p>
      <div className="rectangle"></div>
      <p>{props.message}</p>
      <div className="rectangle"></div>
      <p>{props.message}</p>
      <div className="rectangle"></div>
      <p>{props.message}</p>
      <div className="rectangle"></div>
      <p>{props.message}</p>
      <div className="rectangle"></div>
      <p>{props.message}</p>
      <div className="rectangle"></div>
      <p>{props.message}</p>
      <div className="rectangle"></div>
      <p>{props.message}</p>
      <div className="rectangle"></div>
      <p>{props.message}</p>
      <div className="rectangle"></div>
      <p>{props.message}</p>
      <div className="rectangle"></div>
    </div>
  </div>
  );
}

export default Banner;
