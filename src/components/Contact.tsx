// Contact.tsx (ContactUs)
export default function ContactUs() {
  return (
    <div className="max-[1025px]:w-[98%] max-[1025px]:mx-auto max-[1336px]:mt-[0px] mt-[112px] w-full h-[812px] gap-[48px] flex flex-col items-center
                    max-[1336px]:h-auto max-[1336px]:gap-[28px] max-[1336px]:px-4 max-[600px]:gap-6">
      {/* Head */}
      <div className="w-[438px] h-[128px] gap-[16px] mx-auto flex flex-col justify-between items-center
                      max-[1336px]:w-[92%] max-[1336px]:h-auto max-[1336px]:gap-[10px]
                      max-[600px]:w-full max-[600px]:gap-2">
        <h2 className="max-[1336px]:text-[34px] font-[700] text-[36px] leading-[40px] tracking-[0%] text-[#131313]
                       max-[600px]:text-[24px] max-[600px]:leading-[30px]">
          Get In Touch
        </h2>
        <p className="font-[400] text-[16px] leading-[24px] tracking-[0%] text-[#131313] text-center opacity-[60%] h-[72px]
                      max-[1336px]:h-auto max-[1336px]:text-[14px] max-[1336px]:leading-[22px]
                      max-[600px]:text-[13px] max-[600px]:leading-[20px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>

      {/* Content */}
      <div className="w-full h-[636px] gap-[24px] flex justify-between
                      max-[1336px]:h-auto max-[1336px]:flex-col max-[1336px]:gap-[16px]">
        {/* Email */}
        <div className="max-[1025px]:w-full w-[672px] h-[628px] rounded-[12px] p-[40px] flex justify-center items-center gap-[10px] bg-[#FFFFFF]
                        max-[1336px]:w-[92%] max-[1336px]:mx-auto max-[1336px]:h-auto max-[1336px]:p-[20px] order-2
                        max-[600px]:w-full max-[600px]:p-4">
          <div className="w-[592px] h-[548px] flex flex-col justify-between items-start gap-[24px]
                          max-[1336px]:w-full max-[1336px]:h-auto max-[1336px]:gap-[16px]
                          max-[600px]:gap-4">
            {/* MAIN */}
            <h2 className="max-[1336px]:text-[20px] font-[700] text-[20px] leading-[28px] tracking-[0%] text-[#131313]
                           max-[600px]:text-[18px]">
              Leave a Message
            </h2>

            <div className="w-full h-[424px] gap-[20px] flex flex-col justify-between
                            max-[1336px]:h-auto max-[1336px]:gap-[14px] max-[600px]:gap-3">
              {/* First block */}
              <div className="w-full h-[76px] flex justify-between items-center
                              max-[1336px]:h-auto max-[1336px]:flex-col max-[1336px]:items-stretch max-[1336px]:gap-[12px]
                              max-[600px]:gap-3">
                <div className="w-[284px] h-full flex flex-col gap-[8px] max-[1336px]:w-full">
                  <label htmlFor="Name" className="font-[400] text-[14px] leading-[20px] tracking-[0%] text-[#131313] opacity-[80%]">
                    Name
                  </label>
                  <input type="text" id="Name"
                         className="w-full h-[48px] rounded-[8px] px-[16px] py-[12px] gap-[10px] bg-[#F6F6F6]" />
                </div>
                <div className="w-[284px] h-full flex flex-col gap-[8px] max-[1336px]:w-full">
                  <label htmlFor="Email" className="font-[400] text-[14px] leading-[20px] tracking-[0%] text-[#131313] opacity-[80%]">
                    Email
                  </label>
                  <input type="email" id="Email"
                         className="w-full h-[48px] rounded-[8px] px-[16px] py-[12px] gap-[10px] bg-[#F6F6F6]" />
                </div>
              </div>

              {/* Second block */}
              <div className="w-full h-[76px] flex items-center max-[1336px]:h-auto">
                <div className="w-full h-full flex flex-col gap-[8px]">
                  <label htmlFor="Subject" className="font-[400] text-[14px] leading-[20px] tracking-[0%] text-[#131313] opacity-[80%]">
                    Subject
                  </label>
                  <input type="text" id="Subject"
                         className="w-full h-[48px] rounded-[8px] px-[16px] py-[12px] gap-[10px] bg-[#F6F6F6]" />
                </div>
              </div>

              {/* Third block */}
              <div className="w-full h-[232px] flex items-center max-[1336px]:h-auto">
                <div className="w-full h-full flex flex-col gap-[8px]">
                  <label htmlFor="Messages" className="font-[400] text-[14px] leading-[20px] tracking-[0%] text-[#131313] opacity-[80%]">
                    Messages
                  </label>
                  <textarea id="Messages"
                            className="w-full h-[204px] rounded-[8px] px-[16px] py-[12px] gap-[10px] bg-[#F6F6F6] resize-none
                                       max-[1336px]:h-[160px] max-[600px]:h-[140px]"></textarea>
                </div>
              </div>
            </div>

            <a href="#"
               className="w-[153px] h-[48px] rounded-[8px] flex justify-center items-center gap-[20xp] bg-[#F78F42] font-[500] text-[16px] leading-[24px] tracking-[0%] text-[#131313]
                          max-[1336px]:w-full max-[600px]:h-[44px]">
              Send Message
            </a>
          </div>
        </div>

        {/* Contacts */}
        <div className="w-[324px] max-[1025px]:w-full max-[1440px]:w-[280px] h-[636px] flex flex-col justify-between items-center gap-[24px]
                        max-[1336px]:w-[92%] max-[1336px]:mx-auto max-[1336px]:h-auto max-[1336px]:gap-[16px] order-1
                        max-[600px]:w-full">
          {/* block one */}
          <div className="w-full h-[196px] rounded-[12px] p-[24px] gap-[24px] flex flex-col justify-between bg-[#FFFFFF] items-center
                          max-[1336px]:h-auto max-[1336px]:p-[16px] max-[600px]:p-4">
            <div className="w-[40px] h-[40px] rounded-[50px] p-[10px] gap-[10px] bg-[#F78F42] mx-auto" >
              <img src="/Contact/Map.svg" alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className="w-full h-[84px] flex flex-col gap-[12px] max-[1336px]:h-auto">
              <div className="w-full h-[20px] gap-[12px] flex justify-between max-[1336px]:h-auto max-[1336px]:items-center">
                <p className="font-[400] text-[14px] leading-[20px] text-[#131313]">Country:</p>
                <p className="w-[206px] text-right opacity-[60%] font-[400] text-[14px] leading-[20px] text-[#131313] max-[1336px]:w-auto">Bangladesh</p>
              </div>
              <div className="w-full h-[20px] gap-[12px] flex justify-between max-[1336px]:h-auto max-[1336px]:items-center">
                <p className="font-[400] text-[14px] leading-[20px] text-[#131313]">City:</p>
                <p className="w-[206px] text-right opacity-[60%] font-[400] text-[14px] leading-[20px] text-[#131313] max-[1336px]:w-auto">Dhaka</p>
              </div>
              <div className="w-full h-[20px] gap-[12px] flex justify-between max-[1336px]:h-auto max-[1336px]:items-center">
                <p className="font-[400] text-[14px] leading-[20px] text-[#131313]">Street</p>
                <p className="w-[206px] text-right opacity-[60%] font-[400] text-[14px] leading-[20px] text-[#131313] max-[1336px]:w-auto">35 Vhatara, Badda</p>
              </div>
            </div>
          </div>

          {/* block two */}
          <div className="w-full h-[196px] rounded-[12px] p-[24px] gap-[24px] flex flex-col justify-between bg-[#FFFFFF] items-center
                          max-[1336px]:h-auto max-[1336px]:p-[16px] max-[600px]:p-4">
            <div className="w-[40px] h-[40px] rounded-[50px] p-[10px] gap-[10px] bg-[#F78F42] mx-auto">
              <img src="/Contact/Letter.svg" alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className="w-full h-[84px] flex flex-col gap-[12px] max-[1336px]:h-auto">
              <div className="w-full h-[20px] gap-[12px] flex justify-between max-[1336px]:h-auto max-[1336px]:items-center">
                <p className="font-[400] text-[14px] leading-[20px] text-[#131313]">Email:</p>
                <p className="w-[206px] text-right opacity-[60%] font-[400] text-[14px] leading-[20px] text-[#131313] max-[1336px]:w-auto">info@youremail.com</p>
              </div>
              <div className="w-full h-[20px] gap-[12px] flex justify-between max-[1336px]:h-auto max-[1336px]:items-center">
                <p className="font-[400] text-[14px] leading-[20px] text-[#131313]">Skype:</p>
                <p className="w-[206px] text-right opacity-[60%] font-[400] text-[14px] leading-[20px] text-[#131313] max-[1336px]:w-auto">@yourusername</p>
              </div>
              <div className="w-full h-[20px] gap-[12px] flex justify-between max-[1336px]:h-auto max-[1336px]:items-center">
                <p className="font-[400] text-[14px] leading-[20px] text-[#131313]">Telegram:</p>
                <p className="w-[206px] text-right opacity-[60%] font-[400] text-[14px] leading-[20px] text-[#131313] max-[1336px]:w-auto">@yourusername</p>
              </div>
            </div>
          </div>

          {/* block three */}
          <div className="w-full h-[196px] rounded-[12px] p-[24px] gap-[24px] flex flex-col justify-between bg-[#FFFFFF] items-center
                          max-[1336px]:h-auto max-[1336px]:p-[16px] max-[600px]:p-4">
            <div className="w-[40px] h-[40px] rounded-[50px] p-[10px] gap-[10px] bg-[#F78F42] mx-auto">
              <img src="/Contact/Phone.svg" alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className="w-full h-[84px] flex flex-col gap-[12px] max-[1336px]:h-auto">
              <div className="w-full h-[20px] gap-[12px] flex justify-between max-[1336px]:h-auto max-[1336px]:items-center">
                <p className="font-[400] text-[14px] leading-[20px] text-[#131313]">Support:</p>
                <p className="w-[206px] text-right opacity-[60%] font-[400] text-[14px] leading-[20px] text-[#131313] max-[1336px]:w-auto">15369</p>
              </div>
              <div className="w-full h-[20px] gap-[12px] flex justify-between max-[1336px]:h-auto max-[1336px]:items-center">
                <p className="font-[400] text-[14px] leading-[20px] text-[#131313]">Office:</p>
                <p className="w-[206px] text-right opacity-[60%] font-[400] text-[14px] leading-[20px] text-[#131313] max-[1336px]:w-auto">+58 (021) 356 587 235</p>
              </div>
              <div className="w-full h-[20px] gap-[12px] flex justify-between max-[1336px]:h-auto max-[1336px]:items-center">
                <p className="font-[400] text-[14px] leading-[20px] text-[#131313]">Personal:</p>
                <p className="w-[206px] text-right opacity-[60%] font-[400] text-[14px] leading-[20px] text-[#131313] max-[1336px]:w-auto">+58 (021) 356 587 235</p>
              </div>
            </div>
          </div>
        </div>
        {/* /Contacts */}
      </div>
    </div>
  );
}
