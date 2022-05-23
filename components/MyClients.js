import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import AOS from "aos";

export default function App() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="py-5 my-5 container m-auto "
      data-aos="fade-up"
      data-aos-once="true"
      id="Clients"
    >
      <p className="fs-1 text-center fw-bold">What My Clients are Saying</p>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
      <div className=" border p-4 FDM m-2">
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod”
        </p>
        <div className="d-flex flex-row justify-content-start align-items-center">
          <Image
            src="https://res.cloudinary.com/dia3y316g/image/upload/v1653340944/Coach/32_nwywvm.jpg"
            alt="OLIVIA"
            width="100"
            height="100"
            className="border rounded-circle"
          />
          <p className="mx-2 fw-normal">OLIVIA HOLMES</p>
        </div>
      </div>
      <div className=" border p-4 FDM m-2">
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod”
        </p>
        <div className="d-flex flex-row justify-content-start align-items-center">
          <Image
            src="https://res.cloudinary.com/dia3y316g/image/upload/v1653340945/Coach/62_z4l8sa.jpg"
            alt="OLIVIA"
            width="100"
            height="100"
            className="border rounded-circle"
          />
          <p className="mx-2 fw-normal">JULIA MOORE</p>
        </div>
      </div>
      </div>
    </div>
  );
}
