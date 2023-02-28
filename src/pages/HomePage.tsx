import BannerSlider from "../components/BannerSlider";

function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <BannerSlider />
      <div className="flex justify-between items-center"></div>
    </div>
  );
}

export default HomePage;
