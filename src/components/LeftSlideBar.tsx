"use client";
import { useEffect, useRef, useState } from "react";

export default function LeftSlide() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 8;
      if (atBottom && containerRef.current) containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Info = [
    { Info: "Email:", Text: "info@youremail.com" },
    { Info: "Phone:", Text: "+880 16429 24081" },
    { Info: "Residence:", Text: "Bangladesh" },
    { Info: "City:", Text: "Dhaka" },
    { Info: "Age:", Text: "24 Years" },
    { Info: "Freelance:", Text: "Available" },
    { Info: "Language:", Text: "English, Bangla" },
  ];
  const skills = [
    { Skill: "Html", Consistance: "90%" },
    { Skill: "CSS", Consistance: "80%" },
    { Skill: "UI Design", Consistance: "90%" },
    { Skill: "JavaScript", Consistance: "70%" },
    { Skill: "WordPress", Consistance: "80%" },
  ];
  const ExtraSkills = [
    { Name: "Bootstrap" }, { Name: "Materialize" }, { Name: "Sass" }, { Name: "Styles" },
    { Name: "Less" }, { Name: "Gulp" }, { Name: "Grunt" }, { Name: "GIT Knowledge" }, { Name: "Webpack" },
  ];

  const [animatedWidths, setAnimatedWidths] = useState(skills.map(() => "0%"));
  useEffect(() => { const t = setTimeout(() => setAnimatedWidths(skills.map(s => s.Consistance)), 200); return () => clearTimeout(t); }, []);

  return (
    <div
      ref={containerRef}
      className="w-[300px] h-[1128px] rounded-[12px] gap-[24px] p-[24px]
                 bg-white dark:bg-[#12161C] text-[#131313] dark:text-[#E5E7EB]
                 sticky top-8 self-start max-h-[calc(100vh-64px)] overflow-y-auto no-scrollbar
                 shadow-sm dark:shadow-black/30
                 max-[1336px]:w-[300px] max-[1336px]:h-auto max-[1336px]:sticky max-[1336px]:top-0 max-[1336px]:max-h-none max-[1336px]:overflow-visible max-[1336px]:p-[16px] max-[1024px]:hidden"
    >
      {/* User */}
      <div className="w-[252px] pt-[8px] gap-[20px] flex flex-col mx-auto">
        <div className="w-[100px] h-[100px] mx-auto bg-[url(/Images/Main-Image.svg)] border-2 border-[#131313] dark:border-white/20 bg-cover rounded-full flex justify-end items-end">
          <div className="w-[20px] h-[20px] mr-2 border-4 bg-[#F78F42] border-white dark:border-[#12161C] rounded-full" />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-[8px]">
          <h2 className="font-[600] text-[20px]">Rayan Adlardard</h2>
          <span className="w-[138px] h-[24px] rounded-[50px] flex justify-center items-center
                           bg-[#F78F42]/10 text-[#F78F42] text-[12px]">
            Frontend Developer
          </span>
        </div>

        <div className="w-full h-[40px] rounded-[8px] py-[12px] gap-[24px] flex justify-around
                        bg-white dark:bg-transparent">
          {["/Icons/Facebook.svg","/Icons/Instagramm.svg","/Icons/Twitter.svg","/Icons/LinkedIn.svg","/Icons/YouTube.svg","/Icons/Dribbble.svg"].map((src,i)=>(
            <img key={i} src={src} alt="" className="w-[16px] h-[16px] opacity-50 dark:opacity-80" />
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="w-full gap-[12px] flex flex-col">
        {Info.map((it, i) => (
          <div key={i} className="flex justify-between">
            <p className="text-sm">{it.Info}</p>
            <p className="text-sm opacity-70">{it.Text}</p>
          </div>
        ))}
      </div>

      <div className="w-full my-[24px] border-t border-black/10 dark:border-white/10" />

      {/* Major Skills */}
      <div className="w-full gap-[20px] flex flex-col">
        <h3 className="font-[600] text-[16px]">Major Skills</h3>
        <div className="w-[252px] gap-[20px] flex flex-col max-[1336px]:w-full">
          {skills.map((s, i) => (
            <div key={i} className="w-full gap-[8px] flex flex-col">
              <div className="flex justify-between items-center">
                <p className="font-[500] text-[14px]">{s.Skill}</p>
                <span className="font-[500] text-[12px] text-[#F78F42]">{s.Consistance}</span>
              </div>
              <div className="w-full h-[6px] rounded-full bg-[#E5E5E5] dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#FBBF24] via-[#F78F42] to-[#F97316] shadow-[0_0_8px_rgba(247,143,66,0.6)] transition-all duration-1000 ease-out"
                  style={{ width: animatedWidths[i] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full my-[24px] border-t border-black/10 dark:border-white/10" />

      {/* Extra Skills */}
      <div className="w-full gap-[20px] flex flex-col">
        <h4 className="font-[600] text-[16px]">Extra Skill</h4>
        <div className="w-full gap-[8px] flex flex-wrap">
          {ExtraSkills.map((x, i) => (
            <div key={i} className="px-[12px] py-[4px]">
              <p className="text-xs opacity-70">{x.Name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full my-[24px] border-t border-black/10 dark:border-white/10" />

      {/* CV */}
      <a
        href="#"
        className="font-[500] text-[16px] w-full h-[48px] rounded-[8px] flex justify-center items-center
                   bg-[#F78F42] text-black hover:brightness-95"
      >
        Download My CV <img src="/Icons/Download.svg" alt="" className="w-[20px] h-[20px] ml-2" />
      </a>
    </div>
  );
}
