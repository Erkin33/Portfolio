// Experience.tsx — те же отступы, чтобы не липло слева на мобиле
export default function Experience(){
  const education = [
    { Place: 'Ojjomedia', Who:'Student', Date:'Jan 1016 - Dec 2021', MainInfo:'Lead Web Designer',
      Info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' },
    { Place: 'Ojjomedia', Who:'Student', Date:'Jan 1016 - Dec 2021', MainInfo:'Lead Web Designer',
      Info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' },
    { Place: 'Ojjomedia', Who:'Student', Date:'Jan 1016 - Dec 2021', MainInfo:'Lead Web Designer',
      Info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' },
  ]
  return(
    <div className="max-[1025px]:w-[98%] max-[1025px]:mx-auto w-full gap-[48px] h-[836px] flex flex-col justify-between items-center
                    max-[1336px]:h-auto max-[1336px]:gap-[26px] max-[600px]:px-4 max-[600px]:gap-6">
      {/* Head */}
      <div className="w-[438px] h-[128px] gap-[16px] flex flex-col items-center mx-auto
                      max-[1336px]:w-[90%] max-[600px]:w-full max-[600px]:h-auto max-[600px]:gap-2">
        <h2 className="max-[1336px]:text-[34px] font-[700] text-[36px] leading-[40px] text-[#131313] text-center
                       max-[1336px]:leading-[38px] max-[600px]:text-[24px] max-[600px]:leading-[30px]">
          Experience
        </h2>
        <p className="opacity-[60%] font-[400] text-[16px] leading-[24px] text-[#131313] text-center
                      max-[1336px]:text-[14px] max-[600px]:text-[13px] max-[600px]:leading-[20px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>

      {/* Body */}
      <div className="w-full h-[660px] gap-[10px] bg-[#FFFFFF] flex justify-center items-center
                      max-[1336px]:h-auto max-[1336px]:py-[20px] max-[600px]:py-4 max-[600px]:px-3 rounded-[12px]">
        <div className="w-[940px] h-[580px] gap-[40px]
                        max-[1336px]:w-[90%] max-[1336px]:h-auto max-[600px]:w-full max-[600px]:gap-5">
          {education.map((educationlist, index) => (
            <div key={index}>
              <div className="w-full h-[140px] gap-[24px] flex justify-between items-center
                              max-[1336px]:h-auto max-[1336px]:gap-[16px] max-[1336px]:flex-col max-[1336px]:items-start
                              max-[600px]:gap-3">
                {/* Left */}
                <div className="w-[297px] h-[64px] gap-[12px] flex flex-col mb-auto
                                max-[1336px]:w-full max-[1336px]:h-auto max-[600px]:gap-2 max-[600px]:mx-auto max-[600px]:text-center">
                  <h2 className="font-[600] text-[18px] leading-[28px] text-[#131313] max-[600px]:text-[16px]">
                    {educationlist.Place}
                  </h2>
                  <div className="w-[217px] h-[24px] gap-[16px] flex justify-between items-center
                                  max-[1336px]:w-auto max-[1336px]:gap-[12px] max-[600px]:mx-auto max-[600px]:text-center">
                    <span className="w-[141px] h-[24px] rounded-[6px] flex justify-center items-center bg-[#F78F421A] text-[#F78F42]
                                     font-[500] text-[12px] leading-[16px] tracking-[0%]
                                     max-[1336px]:w-auto max-[1336px]:px-[12px]">
                      {educationlist.Date}
                    </span>
                  </div>
                </div>

                {/* Right */}
                <div className="w-[619px] h-[140px] gap-[16px] flex flex-col items-start justify-between
                                max-[1336px]:w-full max-[1336px]:h-auto max-[600px]:gap-2">
                  <h2 className="max-[600px]:mx-auto max-[600px]:text-center font-[500] text-[18px] leading-[28px] text-[#131313] max-[600px]:text-[16px]">
                    {educationlist.MainInfo}
                  </h2>
                  <p className="max-[600px]:mx-auto max-[600px]:text-center font-[400] text-[16px] leading-[24px] text-[#131313] opacity-[50%]
                                max-[1336px]:text-[15px] max-[600px]:text-[14px] max-[600px]:leading-[22px]">
                    {educationlist.Info}
                  </p>
                </div>
              </div>

              {index !== education.length - 1 && (
                <div className="w-full border-b border-[#E0E0E0] my-[40px] max-[1336px]:my-[24px] max-[600px]:my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
