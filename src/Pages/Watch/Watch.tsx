import { ArrowBackOutlined } from "@mui/icons-material";
import classes from "./Watch.module.css"
import ReactPlayer from "react-player";

const Watch = () => {
  return (
    <div className={classes.watch}>
      <div className={classes.back}>
        <ArrowBackOutlined />
        Home
      </div>
      <ReactPlayer
        className={classes.video}
        width="100%"
        height="100%"
        autoPlay
        progress
        controls
        url="https://youtu.be/hMbexEPAOQI"
      />
    </div>
  );
}


export default Watch