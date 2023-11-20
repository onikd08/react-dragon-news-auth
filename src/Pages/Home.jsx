import LeftSideNav from "../Components/LeftSideNav/LeftSideNav";
import NavBar from "../Components/NavBar/NavBar";
import RightSideNav from "../Components/RightSideNav/RightSideNav";
import Slider from "../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <NavBar></NavBar>
      <div className="grid lg:grid-cols-4 gap-5">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="border lg:col-span-2">News Container</div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
