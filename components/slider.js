import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import AOS from "aos";

export default function Slider() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="container m-auto my-5"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-pagination-color": "white",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-end"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div
            className=" fs-4 p-3 text-light px-5"
            data-swiper-parallax="-300"
          >
            01.
          </div>
          <div
            className=" fs-3 p-3 text-light px-5"
            data-swiper-parallax="-200"
          >
            Reduce Anxiety - Stress
          </div>
          <div
            className=" FDM p-3 text-light px-5"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" fs-4 p-3 text-light px-5"
            data-swiper-parallax="-300"
          >
            02.
          </div>
          <div
            className=" fs-3 p-3 text-light px-5"
            data-swiper-parallax="-200"
          >
            Support Career Change
          </div>
          <div
            className=" FDM p-3 text-light px-5"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" fs-4 p-3 text-light px-5"
            data-swiper-parallax="-300"
          >
            03.
          </div>
          <div
            className=" fs-3 p-3 text-light px-5"
            data-swiper-parallax="-200"
          >
            Gain Confidence
          </div>
          <div
            className=" FDM p-3 text-light px-5"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" fs-4 p-3 text-light px-5"
            data-swiper-parallax="-300"
          >
            04.
          </div>
          <div
            className=" fs-3 p-3 text-light px-5"
            data-swiper-parallax="-200"
          >
            Find Your New Narrative
          </div>
          <div
            className=" FDM p-3 text-light px-5"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
