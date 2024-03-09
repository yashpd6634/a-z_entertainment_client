import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import classes from "./List.module.css";
import ListItem from "../ListItem/ListItem";
import React, { useRef, useState } from "react";
import { ListOutput } from "./List.type";

const List: React.FC<{ list: ListOutput }> = ({ list }) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(true);
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const sizeOfList: number = list.content.length;

  const handleClick = (direction: string) => {

    if (direction === "left" && listRef.current && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      let distance = listRef.current.getBoundingClientRect().x / 16 - 3.125;
      listRef.current.style.transform = `translateX(${14.375 + distance}rem)`;
    } else if (direction === "right" && listRef.current && slideNumber < 3) {
      setSlideNumber(slideNumber + 1);
      let distance = listRef.current.getBoundingClientRect().x / 16 - 3.125;
      listRef.current.style.transform = `translateX(${-14.375 + distance}rem)`;
    }
  };

  const leftSlider: string = `${classes.sliderArrow} ${classes.left}`;
  const rightSlider: string = `${classes.sliderArrow} ${classes.right}`;

  return (
    <div className={classes.list}>
      <span className={classes.listTitle}>{list.title}</span>
      <div className={classes.wrapper}>
        <ArrowBackIosOutlined
          className={leftSlider}
          onClick={() => handleClick("left")}
          style={{ display: `${!showLeftArrow ? "none" : ""}` }}
        />
        <div className={classes.container} ref={listRef}>
          {list.content.map((item: string, i: number) => (
            <ListItem index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className={rightSlider}
          onClick={() => handleClick("right")}
          style={{ display: `${!showRightArrow ? "none" : ""}` }}
        />
      </div>
    </div>
  );
};

export default List;
