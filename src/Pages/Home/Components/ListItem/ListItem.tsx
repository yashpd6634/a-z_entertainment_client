import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import classes from "./ListItem.module.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../authContext/AuthContext";
import { VideoOutput } from "./ListItem.type";

const ListItem: React.FC<{ index: number; item: string }> = ({
  index,
  item,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { state } = useContext(AuthContext);
  const [video, setVideo] = useState<VideoOutput>({} as VideoOutput);
  const myInlineStyle: any = {
    left: `${isHovered ? index * 14.0625 - 3.125 + index * 0.3125 : 0}rem`,
  };
  console.log(myInlineStyle.left);

  const navigate = useNavigate();
  const handlePause = () => {
    navigate("/watch", { state: { video: video } });
  };

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/videos/" + item, {
          headers: {
            token: "Bearer " + state.user?.accessToken,
          },
        });
        setVideo(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [state.user?.accessToken, item]);

  return (
    <Link to="/watch" state={{ video: video }} style={{ textDecoration: 'none' }}>
      <div
        style={myInlineStyle}
        className={classes.listItem}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={video?.imgThumbnail} alt="" />
        {!isHovered && <span className={classes.title}>{video.title}</span>}
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
              <span className={classes.titleHov}>{video.title}</span>
              <div className={classes.icons}>
                <PlayArrow className={classes.icon} />
                <Add className={classes.icon} />
                <ThumbUpOutlined className={classes.icon} />
                <ThumbDownOutlined className={classes.icon} />
              </div>
              <div className={classes.itemInfoTop}>
                <span className={classes.limit}>{video?.limit}</span>
                <span>
                  {video?.duration} | {video?.year} | {video?.genre}{" "}
                </span>
              </div>
              {/* description should be less than 295 letters  */}
              <div className={classes.desc}>{video?.desc}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
