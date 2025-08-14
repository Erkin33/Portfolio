// Portfolio.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portfolio() {
  const portfolio = [
    { title: "Title", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia eos perferendis eum ea dolore placeat doloremque animi tenetur et." },
    { title: "Title", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia eos perferendis eum ea dolore placeat doloremque animi tenetur et." },
    { title: "Title", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia eos perferendis eum ea dolore placeat doloremque animi tenetur et." },
  ];

  return (
    <div className="max-[1336px]:mt-[0px] mt-[112px] w-full h-[474px] gap-[48px] flex flex-col items-center 
                    max-[1336px]:h-auto max-[1336px]:gap-[20px] max-[1336px]:px-4 max-[600px]:gap-6">
      {/* Head */}
      <div className="w-[438px] h-[128px] gap-[16px] mx-auto flex flex-col justify-between items-center
                      max-[1336px]:w-[92%] max-[1336px]:h-auto max-[1336px]:gap-[10px]
                      max-[600px]:w-full max-[600px]:gap-2">
        <h2 className="max-[1336px]:text-[28px] font-[700] text-[36px] leading-[40px] text-[#131313] text-center
                       max-[1336px]:leading-[32px] max-[600px]:text-[24px] max-[600px]:leading-[30px]">
          Portfolio
        </h2>
        <p className="font-[400] text-[16px] leading-[24px] text-[#131313] text-center opacity-[60%] h-[72px]
                      max-[1336px]:h-auto max-[1336px]:text-[13px] max-[1336px]:leading-[20px]
                      max-[600px]:text-[13px] max-[600px]:leading-[20px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>

      {/* Tags */}
      <div className="w-[593px] h-[24px] gap-[48px] mx-auto flex justify-between items-center
                      max-[1336px]:w-full max-[1336px]:gap-[12px] max-[1336px]:flex-wrap max-[1336px]:justify-center
                      max-[600px]:gap-3">
        <a href="#" className="font-[500] text-[16px] leading-[24px] text-[#F78F42] max-[1336px]:text-[14px] max-[600px]:text-[13px]">All categories</a>
        <a href="#" className="font-[400] text-[16px] leading-[24px] text-[#131313] max-[1336px]:text-[14px] max-[600px]:text-[13px]">UI Design</a>
        <a href="#" className="font-[400] text-[16px] leading-[24px] text-[#131313] max-[1336px]:text-[14px] max-[600px]:text-[13px]">Web Templates</a>
        <a href="#" className="font-[400] text-[16px] leading-[24px] text-[#131313] max-[1336px]:text-[14px] max-[600px]:text-[13px]">Logo</a>
      </div>

      {/* Shows */}
      <div className="w-full max-w-[1184px] max-[1336px]:max-w-[92vw]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, pauseOnMouseEnter: true, disableOnInteraction: false }}
          speed={600}
          loop
          grabCursor
          direction="horizontal"
          slidesPerGroup={1}
          breakpoints={{
            0:   { slidesPerView: 1, spaceBetween: 12 }, // для телефонов
            600: { slidesPerView: 2, spaceBetween: 12 },
            1337:{ slidesPerView: 3, spaceBetween: 24 },
          }}
          className="!pb-10 max-[1336px]:!pb-8"
        >
          {portfolio.map((portfolioitems, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="w-[324px] h-[324px] shadow-xl rounded-[12px] gap-[10px] bg-[url(/Projects/Project.svg)] bg-cover overflow-hidden
                              mx-auto max-[1336px]:w-full max-[1336px]:h-[400px] max-[600px]:h-[260px]">
                <div className="bg-[#ffb400] h-full w-full flex flex-col justify-center items-center text-center opacity-[0%]
                                ease-in-out duration-[0.7s] hover:opacity-[90%] select-none px-[16px]
                                max-[1336px]:px-[10px]">
                  <h3 className="font-[700] text-[36px] leading-[40px] text-[#000000] mb-[10%]
                                 max-[1336px]:text-[20px] max-[1336px]:leading-[26px] max-[1336px]:mb-[6%]
                                 max-[600px]:text-[18px] max-[600px]:leading-[24px] max-[600px]:mb-3">
                    {portfolioitems.title}
                  </h3>
                  <p className="font-[400] text-[16px] leading-[24px] text-[#000000] text-center opacity-[60%]
                                max-[1336px]:text-[12px] max-[1336px]:leading-[18px]
                                max-[600px]:text-[12px] max-[600px]:leading-[18px]">
                    {portfolioitems.comment}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
