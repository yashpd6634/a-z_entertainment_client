import { ArrowBackOutlined } from "@mui/icons-material";
import classes from "./Watch.module.css";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const video = location.state?.video;
  return (
    <div className={classes.watch}>
      <Link to="/">
        <div className={classes.back}>
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <ReactPlayer
        className={classes.video}
        width="100%"
        height="100%"
        autoPlay
        progress
        controls
        url={video.video}
      />
    </div>
  );
};

export default Watch;
