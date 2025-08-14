// MainContent.tsx
import MainMenu from "./MainBanner";
import Services from "./MyServices";
import Education from "./Education";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import ContactUs from "./Contact";
import Footer from "./Footer";
import NavMobileMenu from "./MobileMenu";

export default function MainContent(){
  return(
    <div className="w-[1020px] gap-[112px] flex mx-auto flex-col
                    max-[1440px]:w-[980px]
                    max-[1336px]:w-[800px]
                    max-[960px]:gap-[40px]
                    max-[600px]:w-[92%] max-[600px]:gap-[28px]">
      <NavMobileMenu/>
      <section id="home"><MainMenu/></section>
      <section id="services"><Services/></section>
      <section id="education"><Education/></section>
      <section id="experience"><Experience/></section>
      <section id="portfolio"><Portfolio/></section>
      <section id="testimonials"><Testimonials/></section>
      <section id="contact"><ContactUs/></section>
      <Footer/>
    </div>
  )
}
