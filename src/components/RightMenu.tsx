"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function RightMenu() {
  const { theme, toggle } = useTheme();

  const Nav = [
    { Img: "/Icons/Home.svg",      Href: "#home",        Title: "Home" },
    { Img: "/Icons/Code.svg",      Href: "#services",    Title: "Services" },
    { Img: "/Icons/Book.svg",      Href: "#education",   Title: "Education" },
    { Img: "/Icons/Briefcase.svg", Href: "#experience",  Title: "Work" },
    { Img: "/Icons/Document.svg",  Href: "#portfolio",   Title: "Portfolio" },
    { Img: "/Icons/Chat.svg",      Href: "#contact",     Title: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const ids = Nav.map(n => n.Href.slice(1));
    const targets = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActiveSection(e.target.id)),
      { root: null, threshold: 0.55, rootMargin: "0px 0px -10% 0px" }
    );
    targets.forEach(t => io.observe(t));
    return () => io.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-[88px] h-[1016px] flex flex-col rounded-[12px] p-[20px] gap-[20px]
                    bg-white dark:bg-[#12161C] 
                    sticky top-8 self-start max-h-[calc(100vh-64px)] overflow-y-auto max-[1200px]:hidden
                    shadow-sm dark:shadow-black/30">
      {/* Toggle theme */}
      {/* <button
        type="button"
        onClick={toggle}
        className="w-[48px] h-[48px] rounded-[8px] p-[12px] bg-white dark:bg-[#1A2230] 
                   ring-1 ring-black/5 dark:ring-white/10 hover:scale-105 transition"
        aria-label="Toggle theme"
        title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
      >
        <img
          src={theme === "dark" ? "/Icons/Moon.svg" : "/Icons/Sun.svg"}
          alt={theme === "dark" ? "Moon" : "Sun"}
          className="w-[24px] h-[24px]"
        />
      </button> */}

      {/* Nav */}
      <div className="w-[48px] h-[908px] gap-[32px] flex justify-center items-center">
        <div className="w-full h-[448px] gap-[32px] flex flex-col">
          {Nav.map((item, idx) => {
            const id = item.Href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={idx}
                href={item.Href}
                onClick={(e) => handleClick(e, item.Href)}
                className={`w-full h-[80px] rounded-[8px] duration-[0.7s] cursor-pointer gap-[3px]
                            flex justify-center items-center relative group
                            ${isActive 
                              ? "bg-[#F78F42] text-black" 
                              : "hover:bg-[#F78F42]/90 hover:text-black"} 
                            dark:text-[#E5E7EB]`}
                aria-current={isActive ? "true" : undefined}
              >
                <img
                  src={item.Img}
                  alt={item.Title}
                  title={item.Title}
                  className="w-[24px] h-[24px]"
                />
                <span className="absolute -top-[30px] px-2 py-1 rounded text-xs
                                 bg-[#EEEEEE] text-black 
                                 dark:bg-[#253046] dark:text-white
                                 opacity-0 group-hover:opacity-100 transition">
                  {item.Title}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
