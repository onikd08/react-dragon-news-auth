import moment from "moment";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <figure className="mt-12 mb-5">
        <img className="" src={logo} alt="" />
      </figure>
      <p className="mb-3">Journalism Without Fear or Favour</p>
      <p className="mb-8">{moment().format("dddd, MMMM D, YYYY")} </p>
    </div>
  );
};

export default Header;
