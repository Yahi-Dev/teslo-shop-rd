"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./slideshow.css";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideShow = ({ images, title, className }: Props) => {

  return (
    <div className={className}>
      <Swiper
        style={{
          width: '100vw',
          height: '500px'
        }}
        pagination={true}
        autoplay={{
            delay: 2500
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {
            images.map(image => (
                <SwiperSlide key={image}>
                    <Image src={`/products/${image}`} width={600} height={500} alt={title}
                        className="rounded-lg object-fill"
                    />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
};
