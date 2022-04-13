import React from "react";
import "./testimonials.css";
import Avt1 from "../../assets/avatar1.jpg";
import Avt2 from "../../assets/avatar2.jpg";
import Avt3 from "../../assets/avatar3.jpg";
import Avt4 from "../../assets/avatar4.jpg";

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Avt1,
    fname: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni accusantium quas vel voluptatem deserunt tenetur perspiciatis quasi reiciendis inventore repellendus dolor assumenda rem, perferendisesse. Commodi perspiciatis, sit, nihil possimus velit voluptas sequiquibusdam dolor explicabo veniam aperiam cumque cupiditate ullampraesentium deleniti ratione dolorem odit deserunt odio illum.",
  },
  {
    avatar: Avt2,
    fname: "Shatta Male",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni accusantium quas vel voluptatem deserunt tenetur perspiciatis quasi reiciendis inventore repellendus dolor assumenda rem, perferendisesse. Commodi perspiciatis, sit, nihil possimus velit voluptas sequiquibusdam dolor explicabo veniam aperiam cumque cupiditate ullampraesentium deleniti ratione dolorem odit deserunt odio illum.",
  },
  {
    avatar: Avt3,
    fname: "Ryan Mars",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni accusantium quas vel voluptatem deserunt tenetur perspiciatis quasi reiciendis inventore repellendus dolor assumenda rem, perferendisesse. Commodi perspiciatis, sit, nihil possimus velit voluptas sequiquibusdam dolor explicabo veniam aperiam cumque cupiditate ullampraesentium deleniti ratione dolorem odit deserunt odio illum.",
  },
  {
    avatar: Avt4,
    fname: "Gusion Main",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni accusantium quas vel voluptatem deserunt tenetur perspiciatis quasi reiciendis inventore repellendus dolor assumenda rem, perferendisesse. Commodi perspiciatis, sit, nihil possimus velit voluptas sequiquibusdam dolor explicabo veniam aperiam cumque cupiditate ullampraesentium deleniti ratione dolorem odit deserunt odio illum.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
         // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, fname, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{fname}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
