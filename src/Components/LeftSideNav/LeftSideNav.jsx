import { NavLink } from "react-router-dom";
import useLoadData from "../../hooks/loadData";

const LeftSideNav = () => {
  const categories = useLoadData();
  return (
    <div className="space-y-4">
      <h3 className="text-xl">All Categories</h3>
      {categories.map((category) => (
        <NavLink
          className="block  py-4 pl-10"
          key={category.id}
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
