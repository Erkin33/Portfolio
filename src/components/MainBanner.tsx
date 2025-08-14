// MainBanner.tsx (MainMenu)
export default function MainMenu(){
  return(
    <div className="max-w-[1020px] max-[1025px]:w-[98%] max-[1440px]:w-full max-[1336px]:h-[300px]
                    w-[1020px] bg-[#FFFFFF] mx-auto h-[492px]
                    flex justify-around items-center rounded-[12px]
                    max-[600px]:w-full max-[600px]:px-4 max-[600px]:py-6 max-[600px]:h-auto max-[600px]:flex-col max-[600px]:gap-6">
      {/* Image — на мобиле первая */}
      <div className="w-[350px] h-[492px] max-[1336px]:h-full
                      max-[600px]:order-1 max-[600px]:w-[70%] max-[600px]:h-auto max-[600px]:mx-auto">
        <img src="/Images/Main-Image.svg" alt="" className="w-full h-full object-contain max-[600px]:max-h-[280px]"/>
      </div>

      {/* Content — на мобиле вторая, центрируем */}
      <div className="w-[460px] h-[364px] gap-[32px] flex flex-col max-[1336px]:h-full
                      max-[600px]:order-2 max-[600px]:w-full max-[600px]:h-auto max-[600px]:gap-4 max-[600px]:items-center max-[600px]:text-center">
        {/* Contex */}
        <div className="w-full h-[276px] max-[1336px]:h-[180px] max-[1336px]:pl-[5%] gap-[24px] flex flex-col justify-between
                        max-[600px]:pl-0 max-[600px]:h-auto max-[600px]:gap-3">
          <h1 className="max-[1025px]:text-[30px] max-[1336px]:text-[34px] max-[1336px]:h-auto
                         font-[600] text-[48px] leading-[56px] tracking-[0%] text-[#131313] h-[168px]
                         max-[600px]:text-[26px] max-[600px]:leading-[34px] max-[600px]:h-auto">
            I design products
            that delight and inspire people.
          </h1>
          <p className="font-[400] max-[1336px]:h-auto max-[1336px]:text-[14px]
                        text-[18px] leading-[28px] tracking-[0%] text-[#131313] opacity-[60%] h-[84px]
                        max-[600px]:text-[14px] max-[600px]:leading-[22px] max-[600px]:h-auto">
            A Product Designer and Visual Developer in SF. I specialize in UI/UX Design, Responsive Web Design, and Visual Development.
          </p>
        </div>

        <a href="#"
   className="max-[1336px]:ml-[5%] 
              w-[160px] h-[48px] 
              rounded-[48px] flex justify-center items-center gap-2 
              px-[16px] text-[16px] font-[500] leading-[24px] tracking-[0%] 
              bg-[#FFB400] 
              max-[600px]:ml-0 max-[600px]:w-auto max-[600px]:h-[44px] max-[600px]:px-[14px] max-[600px]:text-[15px]">
  Let’s Talk 
  <img src="/Arrows/ArrowRight.svg" alt="" className="w-[20px] h-[20px]" />
</a>
      </div>
    </div>
  )
}
