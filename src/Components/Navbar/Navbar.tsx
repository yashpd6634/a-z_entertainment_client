import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import clasess from "./Navbar.module.css";
import { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const navbar: string = `${clasess.navbar} ${
    isScrolled ? clasess.scrolled : ""
  }`;
  console.log(isScrolled);
  return (
    <div className={navbar}>
      <div className={clasess.container}>
        <div className={clasess.left}>
          <StyledSpan className={clasess.logo}>A-Z Entertainment</StyledSpan>
          <Link to="/" className={clasess.link}>
            <span>Homepage</span>
          </Link>
          <Link to="/series" className={clasess.link}>
            <span>Series</span>
          </Link>
          <Link to="/movies" className={clasess.link}>
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className={clasess.right}>
          <Search className={clasess.icon} />
          <span>KID</span>
          <Notifications className={clasess.icon} />
          <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" />
          <div className={clasess.profile}>
            <ArrowDropDown className={clasess.icon} />
            <div className={clasess.options}>
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledSpan = styled.span`
  font-family: "Lobster", cursive;
  /* Add other styles as needed */
`;

export default Navbar;
