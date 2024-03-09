import {
  InfoOutlined,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import classes from "./Featured.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { VideoOutput } from "../ListItem/ListItem.type";

const Featured: React.FC<{ type?: string; setGenre: React.Dispatch<React.SetStateAction<string>> }> = ({
  type,
  setGenre,
}) => {
  const [content, setContent] = useState<VideoOutput>({} as VideoOutput);
  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/videos/random?type=${type && ""}`);
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className={classes.featured}>
      {type && (
        <div className={classes.category}>
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      {/* <img className={classes.background} src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
      <img className={classes.background} src={content.imgFeatured} alt="featured" />
      <div className={classes.info}>
        {/* <img
            src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
            alt=""
            /> */}
        <img src={content.imgTitle} alt="" />
        <div className={classes.itemInfo}>
          <div className={classes.itemInfoTop}>
            <span className={classes.limit}>{content?.limit}</span>
            <span>
              {content?.duration} | {content?.year} | {content?.genre}{" "}
            </span>
          </div>
          <div className={classes.icons}>
            <ThumbUpOutlined className={classes.icon} />
            <ThumbDownOutlined className={classes.icon} />
          </div>
          <span className={classes.desc}>{content.desc}</span>
        </div>

        <div className={classes.buttons}>
          <button className={classes.play}>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className={classes.more}>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
