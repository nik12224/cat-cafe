import React, { useState, useRef } from "react";
import { SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { ReactComponent as LeftArrow } from "../../../assets/left-arrow.svg"

import {
  SliderWrapper,
  StyledSwiper,
  StyledSwiperMini,
  StyleSlide,
  StyleSlideMini,
  StyledButtonLeft,
  StyledButtonRight,
  RightArrow
} from "./styles";



function Gallery({ slides = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <React.Fragment>
      <StyledSwiper
        modules={[Navigation, Thumbs]}
        onSlideChange={(slider) => {
          setActiveSlide(slider.realIndex);
        }}
        spaceBetween={20}
        thumbs={{ swiper: thumbsSwiper }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <StyleSlide
              src={slide.src}
              alt={slide.alt}
              width={728}
              height={408}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <SliderWrapper>
        <StyledSwiperMini
          onSwiper={(e) => {
            setThumbsSwiper(e);
          }}
          modules={[Navigation, Thumbs]}
          spaceBetween={20}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <StyleSlideMini
                $active={activeSlide === index}
                src={slide.src} alt={slide.alt} />
            </SwiperSlide>
          ))}
        </StyledSwiperMini>
        <StyledButtonLeft ref={navigationPrevRef}>
          <LeftArrow />
        </StyledButtonLeft>
        <StyledButtonRight ref={navigationNextRef}>
          <RightArrow />
        </StyledButtonRight>
      </SliderWrapper>
    </React.Fragment>
  )
}

export default Gallery;