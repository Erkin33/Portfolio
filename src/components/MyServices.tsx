// MyServices.tsx (Services) — добавил актив/фокус для тача
export default function Services(){
  const services = [
    { icon: "/ServicesIcons/Web.svg",  title: "Web Development", description: "Blog, E-Commerce" },
    { icon: "/ServicesIcons/Design.svg", title: "UI/UX Design",   description: "Mobile App, Website Design" },
    { icon: "/ServicesIcons/Microphone.svg", title: "Sound Design", description: "Voice Over, Beat Making" },
    { icon: "/ServicesIcons/Game.svg", title: "Game Design", description: "Character Design, Props & Objects" },
    { icon: "/ServicesIcons/Photo.svg", title: "Photography", description: "Portrait, Product Photography" },
  ];
  return(
    <div className="max-[1025px]:gap-[15px] max-[1336px]:h-[556px] max-[1336px]:gap-[26px]
                    w-full gap-[48px] h-[756px] flex flex-col justify-between items-center
                    max-[600px]:h-auto max-[600px]:gap-6 max-[600px]:px-4">
      {/* Header */}
      <div className="w-[438px] h-[128px] gap-[16px] flex flex-col justify-between items-center mx-auto
                      max-[600px]:w-full max-[600px]:h-auto max-[600px]:gap-2">
        <h2 className="max-[1336px]:text-[34px] font-[700] text-[36px] leading-[40px]
                       max-[600px]:text-[24px] max-[600px]:leading-[30px]">
          My Services
        </h2>
        <p className="max-[1336px]:text-[14px] opacity-[60%] text-center font-[400] text-[16px] leading-[24px] text-[#131313]
                      max-[600px]:text-[13px] max-[600px]:leading-[20px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>

      {/* Grid */}
      <div className="max-[1025px]:w-[98%] max-[1025px]:gap-[15px] w-full h-[580px] gap-[24px] flex flex-wrap
                      max-[600px]:h-auto max-[600px]:gap-3">
        {services.map((service, index) => (
          <button
            key={index}
            className="w-[310px] max-[1336px]:w-[250px] max-[1336px]:h-[170px] h-[225px] bg-white shadow-sm text-center
                       relative overflow-hidden group transition-all duration-300 rounded-[12px]
                       max-[600px]:w-full max-[600px]:h-[160px]
                       cursor-pointer touch-manipulation focus:outline-none"
          >
            {/* Иконка */}
            <img
              src={service.icon}
              alt={service.title}
              className="max-[1336px]:w-[54px] max-[1336px]:h-[54px] w-[78px] h-[78px] mb-2 mt-[10%]
                         transition-all duration-300
                         group-hover:opacity-0 group-hover:-translate-y-5
                         group-active:opacity-0 group-active:-translate-y-5
                         focus-within:opacity-0 focus-within:-translate-y-5
                         max-[600px]:w-[48px] max-[600px]:h-[48px] max-[600px]:mt-4 mx-auto"
            />

            {/* Текст */}
            <div className="w-full h-[35%] flex flex-col justify-around items-center transition-all duration-300
                            group-hover:-translate-y-10 group-active:-translate-y-10 focus-within:-translate-y-10
                            max-[600px]:h-auto max-[600px]:gap-1">
              <h3 className="max-[1336px]:text-[15px] font-[500] text-[18px] max-[600px]:text-[15px]">
                {service.title}
              </h3>
              <p className="max-[1336px]:text-[14px] text-[#131313] opacity-[60%] text-[15px] text-center
                            max-[600px]:text-[13px]">
                {service.description}
              </p>
            </div>

            {/* Оверлей + ORDER NOW — показывать и при hover, и при active/focus */}
            <div
              className="pointer-events-none absolute inset-0 bg-[#ffb400] opacity-0
                         flex flex-col items-center justify-center text-center px-4
                         transition-opacity duration-300
                         group-hover:opacity-90 group-active:opacity-90 focus-within:opacity-90"
            >
              <span className="font-[700] text-[24px] leading-[28px] text-black mb-3 max-[600px]:text-[18px]">ORDER NOW</span>
              <img src="/Arrows/ArrowRightlow.svg" alt="" className="w-[22px] h-[22px]"/>
            </div>
          </button>
        ))}

        {/* Последняя карточка */}
        <div className="max-[1336px]:w-[250px] max-[1336px]:h-[170px] bg-[#ffffff] w-[310px] h-[225px] text-[#131313]
                        flex flex-col justify-around items-center rounded-[12px]
                        max-[600px]:w-full max-[600px]:h-[160px]">
          <div className="w-full flex flex-col justify-around items-center px-[10%] max-[600px]:px-4">
            <h3 className="max-[1336px]:text-[15px] text-lg mb-2 max-[600px]:text-[15px] max-[600px]:mb-1">Advertising</h3>
            <p className="max-[1336px]:text-[14px] text-[#131313] opacity-[60%] text-[15px] text-center max-[600px]:text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. 
            </p>
          </div>
          <a href="#" className="max-[1336px]:text-[15px] text-[#FFB400] flex font-bold max-[600px]:text-[14px]">
            ORDER NOW <img src="/Arrows/ArrowRightlow.svg" alt="" className="w-[20px] h-[20px]"/>
          </a>
        </div>
      </div>
    </div>
  )
}
