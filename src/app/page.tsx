// import MainMenu from "@/components/MainBanner";
import MainContent from "@/components/MainContent";
import LeftSlide from "@/components/LeftSlideBar";
import RightMenu from "@/components/RightMenu";
export default function Home() {
  return (
    <div className="max-w-[1472px] mx-auto mt-[32px] flex justify-between">
      <LeftSlide/>
      <MainContent/>
      <RightMenu/>

    </div>
  );
}
