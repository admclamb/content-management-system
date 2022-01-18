import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>
            <i className="fas fa-home"></i>
          </Link>
          <Link to={"/notifications"}>
            <i className="far fa-bell"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
