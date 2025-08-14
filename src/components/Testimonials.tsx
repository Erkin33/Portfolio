// Testimonials.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const reviews = [
    { img: "/Reviews/James.svg", Name: "James Gouse", Proffesion: "Graphic Designer",
      Comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...." },
    { img: "/Reviews/Tiana.svg", Name: "Tiana Philips", Proffesion: "Photographer",
      Comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...." },
    { img: "/Reviews/Talan.svg", Name: "Talan Westervelt", Proffesion: "Business Man",
      Comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...." },
  ];

  return (
    <div className="max-[1336px]:mt-[0px] mt-[112px] w-full h-[568px] gap-[48px] flex flex-col items-center
                    max-[1336px]:h-auto max-[1336px]:gap-[28px] max-[1336px]:px-4 max-[600px]:gap-6">
      {/* Head */}
      <div className="w-[438px] h-[128px] gap-[16px] mx-auto flex flex-col justify-between items-center
                      max-[1336px]:w-[92%] max-[1336px]:h-auto max-[1336px]:gap-[10px]
                      max-[600px]:w-full max-[600px]:gap-2">
        <h2 className="max-[1336px]:text-[34px] font-[700] text-[36px] leading-[40px] tracking-[0%] text-[#131313] text-center
                       max-[1336px]:leading-[38px] max-[600px]:text-[24px] max-[600px]:leading-[30px]">
          Testimonials
        </h2>
        <p className="font-[400] text-[16px] leading-[24px] tracking-[0%] text-[#131313] text-center opacity-[60%] h-[72px]
                      max-[1336px]:h-auto max-[1336px]:text-[14px] max-[1336px]:leading-[22px]
                      max-[600px]:text-[13px] max-[600px]:leading-[20px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>

      <div className="w-full max-w-[1184px] max-[1336px]:max-w-[92vw]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, pauseOnMouseEnter: true, disableOnInteraction: false }}
          speed={600}
          loop
          grabCursor
          slidesPerGroup={1}
          direction="horizontal"
          breakpoints={{
            0:   { slidesPerView: 1, spaceBetween: 12 }, // смартфоны
            600: { slidesPerView: 2, spaceBetween: 16 },
            1337:{ slidesPerView: 3, spaceBetween: 24 },
          }}
          className="!pb-10 max-[1336px]:!pb-8"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className="w-[324px] h-[298px] mx-auto rounded-[12px] bg-[#FFFFFF] shadow-xl flex
                              max-[1336px]:w-full max-[1336px]:h-[240px] max-[600px]:h-[220px]">
                <div className="m-auto pl-[14px] pr-[14px] w/[276px] h/[250px] gap-[24px] flex flex-col justify-between items-start
                                max-[1336px]:w-[90%] max-[1336px]:h-auto max-[1336px]:gap-[16px] max-[1336px]:py-[14px]
                                max-[600px]:gap-3">
                  {/* User */}
                  <div className="w-[222px] h-[64px] gap-[16px] flex max-[1336px]:w-full max-[1336px]:h-[56px]">
                    <img src={r.img} alt="" className="w-[64px] h-[64px] select-none rounded-full
                                                     max-[1336px]:w-[56px] max-[1336px]:h-[56px]
                                                     max-[600px]:w-[48px] max-[600px]:h-[48px]" />
                    <div className="w-[142px] h-full flex flex-col justify-center items-start max-[1336px]:w-auto">
                      <h3 className="font-[600] text-[18px] leading-[28px] tracking-[0%]
                                     max-[1336px]:text-[16px] max-[1336px]:leading-[24px]
                                     max-[600px]:text-[15px]">
                        {r.Name}
                      </h3>
                      <p className="font-[400] text-[14px] leading-[20px] tracking-[0%] opacity-[60%] text-[#131313]
                                    max-[1336px]:text-[13px] max-[1336px]:leading-[18px]
                                    max-[600px]:text-[12px]">
                        {r.Proffesion}
                      </p>
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="font-[400] text-[16px] leading-[24px] tracking-[0%] opacity-[60%] text-[#131313]
                                max-[1336px]:text-[14px] max-[1336px]:leading-[22px]
                                max-[600px]:text-[13px] max-[600px]:leading-[20px]">
                    {r.Comment}
                  </p>

                  {/* Stars */}
                  <img src="/Reviews/Stars.svg" alt="" className="w-[106px] h-[18px] select-none
                                                                 max-[1336px]:w-[96px] max-[1336px]:h-[16px]
                                                                 max-[600px]:w-[90px] max-[600px]:h-[14px]" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
