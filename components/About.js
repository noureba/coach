import React from "react";
import Image from "next/image";
import AOS from "aos";

function About() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="container m-auto py-5"
      data-aos="fade-up"
      data-aos-once="true"
      id="about"
    >
      <p className="fs-1 text-center fw-bold  m-auto py-5 text-primary">
        About Me
      </p>
      <p className="fs-4 text-center fw-normal FDM m-auto p-3">
        I can support you in achieving the results you’re looking for. Together
        we will augue consectetur tellus sagittis enim dolor.
      </p>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center py-3">
        <div className="m-2">
          <Image src="https://res.cloudinary.com/dia3y316g/image/upload/v1653149275/Coach/coach_rcq6nv.jpg" alt="profil" width="500px" height="500px" />
        </div>
        <div className="p-3 FDM">
          <p className="fw-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="fw-bold text-primary">
            “Lorem ipsum dolor sit amet, conquip ex ea commodo consequat. Duis
            aute irure ”
          </p>
          <div>
            <Image src="https://res.cloudinary.com/dia3y316g/image/upload/v1653149252/Coach/signature_jtgyll.png" width="100px" height="50px"   alt="Signature" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
