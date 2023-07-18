import Confetti from "react-confetti";
import $ from "jquery";
import React, { useState, useRef, useEffect } from "react";

const Home = () => {
  // $(document).ready(function () {
  //   $(".container")
  //     .mouseenter(function () {
  //       $(".card").stop().animate(
  //         {
  //           top: "-90px",
  //         },
  //         "slow"
  //       );
  //     })
  //     .mouseleave(function () {
  //       $(".card").stop().animate(
  //         {
  //           top: 0,
  //         },
  //         "slow"
  //       );
  //     });
  // });
  return (
    <>
      <div className="valentines">
        <div className="envelope"></div>
        <div className="front"></div>
        <div className="card">
          <div className="text">
            Happy
            <br /> Birthday
            <br /> Mom!
          </div>
          <div className="heart" style={{ border: "none" }}></div>
          <div className="hearts">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
          </div>
        </div>
      </div>
      <div className="shadow"></div>
    </>
  );
};

export default Home;
