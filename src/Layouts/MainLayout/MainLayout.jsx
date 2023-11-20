import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";

const MainLayout = () => {
  return (
    <div className="font-poppins max-w-screen-xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
