import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="">
        <h3 className="text-xl mb-2">Login With</h3>
        <button className="btn btn-outline btn-primary w-full mb-2">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full mb-2">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-xl mb-2">Find Us On</h3>
        <div className="flex border items-center gap-2 p-4">
          <FaFacebook />
          <span>Facebook</span>
        </div>
        <div className="flex border items-center gap-2 p-4">
          <FaTwitter />
          <span>Twitter</span>
        </div>
        <div className="flex border items-center gap-2 p-4">
          <FaInstagram />
          <span>Instagram</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl">Q-Zone</h3>
        <figure>
          <img src={qZone1} alt="" />
        </figure>
        <figure>
          <img src={qZone2} alt="" />
        </figure>
        <figure>
          <img src={qZone3} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default RightSideNav;
