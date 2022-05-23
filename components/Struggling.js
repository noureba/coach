import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { GiStairsGoal } from "react-icons/gi";
import { CgCalculator } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";

function Struggling() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container p-2" data-aos="fade-up" data-aos-once="true">
      <div className="text-center my-5 mx-3">
        <p className="fs-1 fw-bold">What Are You Struggling With?</p>
        <p className="w-75 m-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
      </div>
      <div
        className="d-flex flex-row justify-content-center flex-wrap "
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div
          className="d-flex flex-column justify-content-center align-items-center m-1 border p-3 FDM2"
        >
          <i className="m-2 fs-2" style={{ color: "rgb(0, 153, 255)" }}>
            <AiOutlineMenuUnfold />
          </i>
          <p className="fs-4 my-3 fw-normal">Staying Organized</p>
          <p className="my-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center m-1 border p-3 FDM2 "
        >
          <i className="m-2 fs-2" style={{ color: "rgb(0, 153, 255)" }}>
            <GiSandsOfTime />
          </i>
          <p className="fs-4 my-3 fw-normal">Time Management</p>
          <p className="my-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center m-1 border p-3 FDM2"
        >
          <i className="m-2 fs-2" style={{ color: "rgb(0, 153, 255)" }}>
            <GiStairsGoal />
          </i>
          <p className="fs-4 my-3 fw-normal">Life Goals</p>
          <p className="my-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </p>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center m-1 border p-3 FDM2"
        >
          <i className="m-2 fs-2" style={{ color: "rgb(0, 153, 255)" }}>
            <CgCalculator />
          </i>
          <p className="fs-4 my-3 fw-normal">Accountability</p>
          <p className="my-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
      </div>
    </div>
  );
}

export default Struggling;
