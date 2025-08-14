"use client";
import { useEffect, useMemo, useState } from "react";

export default function NavMobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);   // выпадающее меню (бургер)
  const [sheetOpen, setSheetOpen] = useState(false); // панель профиля (ава)
  const [activeSection, setActiveSection] = useState("home");

  // Навигация
  const Nav = useMemo(
    () => [
      { label: "Home", href: "#home", id: "home" },
      { label: "Services", href: "#services", id: "services" },
      { label: "Education", href: "#education", id: "education" },
      { label: "Work", href: "#experience", id: "experience" },
      { label: "Portfolio", href: "#portfolio", id: "portfolio" },
      { label: "Contact", href: "#contact", id: "contact" },
    ],
    []
  );

  // --- Подсветка текущей секции (скролл-спай) ---
  useEffect(() => {
    const targets = Nav.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      // Чуть раньше активируем нижние секции
      { root: null, threshold: 0.4, rootMargin: "0px 0px -35% 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [Nav]);

  // Форс-подсветка "contact", если долистали до низа
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
      if (atBottom) setActiveSection("contact");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Блокируем скролл ТОЛЬКО для панели профиля (без оверлея у меню)
  useEffect(() => {
    if (sheetOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSheetOpen(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [menuOpen, sheetOpen]); // длина deps стабильна

  // Плавный переход + оптимистичная подсветка
  const smoothTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    setActiveSection(id); // сразу подсветим нужный пункт
    if (el) {
      setMenuOpen(false);
      setSheetOpen(false);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // обновим hash, чтобы после перезагрузки остаться на секции
      if (history.replaceState) history.replaceState(null, "", `#${id}`);
    }
  };

  // Инициализация активной секции из hash (если открыли страницу с якорем)
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (id) setActiveSection(id);
  }, []);

  return (
    <div className="sticky top-2 z-30 w-full h-[60px] flex rounded-[80px] bg-[#FFFFFF] px-[16px] py-[12px] gap-[12px] items-center justify-between min-[1024px]:hidden shadow-md">
      {/* Аватар (открывает панель профиля) */}
      <button
        aria-label="Open profile"
        onClick={() => setSheetOpen(true)}
        className="w-[36px] h-[36px] rounded-full bg-[url(/Images/Main-Image.svg)] bg-cover border border-black/10"
      />

      {/* Пустой центр для баланса */}
      <div className="flex-1" />

      {/* Правый блок иконок + бургер */}
      <div className="relative flex items-center gap-[8px]">
        {/* <button className="w-[36px] h-[36px] rounded-[10px] bg-[#F6F6F6] flex items-center justify-center" aria-label="Secondary action">
          <img src="/Icons/Sun.svg" alt="" className="w-[20px] h-[20px]" />
        </button> */}

        {/* Бургер / Крест */}
        <button
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="w-[36px] h-[36px] rounded-[10px] bg-[#F6F6F6] flex items-center justify-center"
        >
          <svg width="22" height="22" viewBox="0 0 24 24">
            <line x1="4" y1="7" x2="20" y2="7" className={`transition-all duration-300 origin-center ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} stroke="#131313" strokeWidth="2" strokeLinecap="round" />
            <line x1="4" y1="12" x2="20" y2="12" className={`transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`} stroke="#131313" strokeWidth="2" strokeLinecap="round" />
            <line x1="4" y1="17" x2="20" y2="17" className={`transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} stroke="#131313" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Выпадающее меню — аккуратный дропдаун справа без оверлея */}
        <div
          className={`absolute right-0 top-[48px] origin-top-right transition-all duration-200
                      ${menuOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"}`}
        >
          {/* стрелочка-указатель */}
          <div className="absolute right-3 -top-2 h-0 w-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white drop-shadow" />
          <div className="w-[min(92vw,680px)] rounded-[16px] bg-white shadow-xl border border-black/5 p-[12px]">
            <nav className="flex gap-[8px] overflow-x-auto no-scrollbar">
              {Nav.map((item) => {
                const active = activeSection === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => smoothTo(e, item.href)}
                    className={`shrink-0 px-[14px] h-[40px] rounded-[10px] text-[14px] font-[600] flex items-center justify-center transition-colors
                               ${active ? "bg-[#F78F42] text-[#131313]" : "bg-[#F6F6F6] text-[#131313] hover:bg-[#F78F42]/20"}`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* ---- ПАНЕЛЬ ПРОФИЛЯ (как LeftSlide) ---- */}
      {/* Оверлей ТОЛЬКО для профиля */}
      {sheetOpen && (
        <div
          onClick={() => setSheetOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-[1px]"
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed left-0 top-0 h-screen w-[min(92vw,360px)] max-w-[360px] bg-white shadow-2xl
                    rounded-r-[16px] p-[16px] z-40 transition-transform duration-300
                    ${sheetOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Profile"
      >
        {/* Шапка панели */}
        <div className="flex items-center justify-between mb-[12px]">
          <div className="flex items-center gap-3">
            <div className="w-[56px] h-[56px] rounded-full bg-[url(/Images/Main-Image.svg)] bg-cover border border-black/10" />
            <div>
              <h3 className="font-[700] text-[16px] text-[#131313] leading-none">Rayan Adlardard</h3>
              <span className="mt-1 inline-flex items-center justify-center h-[22px] px-2 rounded-[50px] bg-[#F78F42]/10 text-[#F78F42] text-[12px] font-[600]">
                Frontend Developer
              </span>
            </div>
          </div>
          <button
            aria-label="Close profile"
            onClick={() => setSheetOpen(false)}
            className="w-[36px] h-[36px] rounded-[10px] bg-[#F6F6F6] flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" stroke="#131313" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Тело панели */}
        <div className="h-[calc(100vh-96px)] overflow-y-auto pr-1 no-scrollbar">
          {/* Info */}
          <div className="space-y-2">
            {[
              { k: "Email:", v: "info@youremail.com" },
              { k: "Phone:", v: "+880 16429 24081" },
              { k: "Residence:", v: "Bangladesh" },
              { k: "City:", v: "Dhaka" },
              { k: "Age:", v: "24 Years" },
              { k: "Freelance:", v: "Available" },
              { k: "Language:", v: "English, Bangla" },
            ].map((row) => (
              <div key={row.k} className="flex justify-between text-[14px]">
                <span className="text-[#131313]">{row.k}</span>
                <span className="text-[#131313] opacity-60 text-right">{row.v}</span>
              </div>
            ))}
          </div>

          <div className="my-4 h-px bg-[#131313] opacity-10" />

          {/* Major Skills */}
          <div className="space-y-3">
            <h4 className="font-[700] text-[14px] text-[#131313]">Major Skills</h4>
            <div className="space-y-3">
              {[
                { name: "Html", pct: 90 },
                { name: "CSS", pct: 80 },
                { name: "UI Design", pct: 90 },
                { name: "JavaScript", pct: 70 },
                { name: "WordPress", pct: 80 },
              ].map((s) => (
                <div key={s.name} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-[600]">{s.name}</span>
                    <span className="text-[12px] font-[700] text-[#F78F42]">{s.pct}%</span>
                  </div>
                  <div className="w-full h-[6px] rounded-full bg-[#E5E5E5] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#FBBF24] via-[#F78F42] to-[#F97316] shadow-[0_0_8px_rgba(247,143,66,0.6)]"
                      style={{ width: `${s.pct}%`, transition: "width 900ms ease-out" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-4 h-px bg-[#131313] opacity-10" />

          {/* Extra Skills */}
          <div className="space-y-2">
            <h4 className="font-[700] text-[14px] text-[#131313]">Extra Skill</h4>
            <div className="flex flex-wrap gap-2">
              {["Bootstrap","Materialize","Sass","Styles","Less","Gulp","Grunt","GIT Knowledge","Webpack"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-[8px] bg-[#F6F6F6] text-[12px] text-[#131313] opacity-70">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="my-4 h-px bg-[#131313] opacity-10" />

          {/* CV */}
          <a
            href="#"
            className="w-full h-[44px] rounded-[8px] bg-[#F78F42] text-[#131313] font-[700] text-[14px] flex items-center justify-center"
          >
            Download My CV
            <img src="/Icons/Download.svg" alt="" className="w-[18px] h-[18px] ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
