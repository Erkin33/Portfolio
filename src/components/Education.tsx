// Education.tsx — добавил внутренние отступы на мобиле, чтобы не липло слева
export default function Education() {
  const education = [
    { Place: 'University of Toronto', Who: 'Student', Date: 'Jan 1016 - Dec 2021', MainInfo: 'Certificate of web training',
      Info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' },
    { Place: 'University of Toronto', Who: 'Student', Date: 'Jan 1016 - Dec 2021', MainInfo: 'Certificate of web training',
      Info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' },
    { Place: 'University of Toronto', Who: 'Student', Date: 'Jan 1016 - Dec 2021', MainInfo: 'Certificate of web training',
      Info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' },
  ];

  return (
    <div className="max-[1025px]:w-[98%] max-[1025px]:mx-auto max-[1336px]:gap-[26px] max-[1336px]:h-auto
                    w-full gap-[48px] h-[836px] flex flex-col justify-between items-center
                    max-[600px]:h-auto max-[600px]:gap-6 max-[600px]:px-4">
      {/* Head */}
      <div className="max-[1336px]:w-[90%] w-[438px] h-[128px] gap-[16px] flex flex-col items-center mx-auto text-center
                      max-[600px]:w-full max-[600px]:h-auto max-[600px]:gap-2">
        <h2 className="max-[1336px]:text-[28px] font-[700] text-[36px] leading-[40px] text-[#131313]
                       max-[600px]:text-[24px] max-[600px]:leading-[30px]">Education</h2>
        <p className="max-[1336px]:text-[14px] opacity-[60%] font-[400] text-[16px] leading-[24px] text-[#131313]
                      max-[600px]:text-[13px] max-[600px]:leading-[20px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>

      {/* Body */}
      <div className="w-full max-[1336px]:py-[20px] max-[1336px]:h-auto h-[660px] bg-[#FFFFFF] flex justify-center items-center
                      max-[600px]:py-4 max-[600px]:px-3 rounded-[12px]">
        <div className="max-[1336px]:w-[90%] min-[1336px]:w-[940px] h-auto gap-[40px]
                        max-[600px]:w-full max-[600px]:gap-5">
          {education.map((educationlist, index) => (
            <div key={index}>
              <div className="w-full max-[1336px]:flex-col flex justify-between items-start max-[1336px]:gap-[16px] gap-[24px] py-[10px]
                              max-[600px]:gap-3">
                <div className="max-[1336px]:w-full w-[297px] gap-[12px] flex flex-col max-[600px]:gap-2">
                  <h2 className="font-[600] text-[18px] leading-[28px] text-[#131313] max-[600px]:text-[16px] max-[600px]:mx-auto">{educationlist.Place}</h2>
                  <div className="max-[1336px]:flex-wrap flex gap-[16px] items-center max-[600px]:gap-2 max-[600px]:mx-auto">
                    <p className="font-[400] text-[16px] leading-[24px] text-[#131313] max-[600px]:text-[14px] ">{educationlist.Who}</p>
                    <span className="px-[12px] h-[24px] rounded-[6px] flex justify-center items-center bg-[#F78F421A] text-[#F78F42] font-[500] text-[12px] leading-[16px]">
                      {educationlist.Date}
                    </span>
                  </div>
                </div>

                <div className="max-[1336px]:w-full w-[619px] gap-[16px] flex flex-col max-[600px]:gap-2">
                  <h2 className="font-[500] text-[18px] leading-[28px] text-[#131313] max-[600px]:text-[16px] max-[600px]:mx-auto max-[600px]:text-center">{educationlist.MainInfo}</h2>
                  <p className="font-[400] text-[16px] leading-[24px] text-[#131313] opacity-[50%]
                                max-[600px]:text-[14px] max-[600px]:leading-[22px] max-[600px]:mx-auto max-[600px]:text-center">{educationlist.Info}</p>
                </div>
              </div>

              {index !== education.length - 1 && (
                <div className="w-full border-b border-[#E0E0E0] my-[24px] max-[600px]:my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
