import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import classes from "./ListItem.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import { Link, useNavigate } from "react-router-dom";

const ListItem: React.FC<{ index: number; item: any }> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState<any>({});
  const myInlineStyle: any = {
    left: `${
      isHovered ? props.index * 14.0625 - 3.125 + props.index * 0.3125 : 0
    }rem`,
  };
  console.log(myInlineStyle.left);

  const navigate = useNavigate();
  const handlePause = () => {
    navigate("/watch", { state: { video: video } });
  };

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/videos/" + props.item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmY0NWQ0ODdiZTYzYTEyZTI2MTE4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwODIyODAzNSwiZXhwIjoxNzA4NjYwMDM1fQ.ucZDCLt5LoycjPTGeMj1yo-tSfiktB1FpUSLj3Cd4Ho",
          },
        });
        setVideo(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [props.item]);

  return (
    <Link to="/watch" state={{ video: video }}>
      <div
        style={myInlineStyle}
        className={classes.listItem}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={video?.imgThumbnail} alt="" />
        {isHovered && (
          <>
            {/* <video src={video?.trailer} autoPlay={true} loop /> */}
            <ReactPlayer
              url={video?.trailer}
              width="100%"
              height="50%"
              className={classes.video}
              loop
              muted
              playing
              onPause={handlePause}
            />
            <div className={classes.itemInfo}>
              <div className={classes.icons}>
                <PlayArrow className={classes.icon} />
                <Add className={classes.icon} />
                <ThumbUpOutlined className={classes.icon} />
                <ThumbDownOutlined className={classes.icon} />
              </div>
              <div className={classes.itemInfoTop}>
                <span>{video.duration}</span>
                <span className={classes.limit}>{video?.limit}</span>
                <span>{video?.year}</span>
              </div>
              <div className={classes.desc}>{video?.desc}</div>
              <div className={classes.genre}>{video?.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
