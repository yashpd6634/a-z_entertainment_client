import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import classes from "./List.module.css";
import ListItem from "../ListItem/ListItem";
import { useRef, useState } from "react";

const List = (props: any) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const [slideNumber, setSlideNumber] = useState<number>(0);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (direction === "left" && listRef.current && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      let distance = listRef.current.getBoundingClientRect().x / 16 - 3.125;
      listRef.current.style.transform = `translateX(${14.375 + distance}rem)`;
    } else if (direction === "right" && listRef.current && slideNumber < 7) {
      setSlideNumber(slideNumber + 1);
      let distance = listRef.current.getBoundingClientRect().x / 16 - 3.125;
      listRef.current.style.transform = `translateX(${-14.375 + distance}rem)`;
    }
  };

  const leftSlider: string = `${classes.sliderArrow} ${classes.left}`;
  const rightSlider: string = `${classes.sliderArrow} ${classes.right}`;

  return (
    <div className={classes.list}>
      <span className={classes.listTitle}>{props.list.title}</span>
      <div className={classes.wrapper}>
        <ArrowBackIosOutlined
          className={leftSlider}
          onClick={() => handleClick("left")}
          style={{ display: `${!isMoved ? "none" : ""}` }}
        />
        <div className={classes.container} ref={listRef}>
          {props.list.content.map((item: any, i: number) => (
            <ListItem index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className={rightSlider}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
