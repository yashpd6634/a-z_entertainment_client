import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import classes from "./List.module.css"
import ListItem from "../ListItem/ListItem"
import { useRef } from "react"

const List = () => {
    const listRef = useRef<HTMLDivElement>(null)

    const handleClick = (direction: string) => {
        
        if(direction === "left" && listRef.current){
            let distance = listRef.current.getBoundingClientRect().x/16 -4.5;
            listRef.current.style.transform = `translateX(${20 + distance}rem)`;
        }
        else if(direction === "right" && listRef.current){
            let distance = listRef.current.getBoundingClientRect().x/16 -5.5;
            listRef.current.style.transform = `translateX(${-20 + distance}rem)`;
        }

        
    }

    const leftSlider: string = `${classes.sliderArrow} ${classes.left}`;
    const rightSlider: string = `${classes.sliderArrow} ${classes.right}`;

  return (
    <div className={classes.list}>
        <span className={classes.listTitle}>Continue to watch</span>
        <div className={classes.wrapper}>
            <ArrowBackIosOutlined className={leftSlider} onClick={() => handleClick("left")} />
            <div className={classes.container} ref={listRef}>
                <ListItem index = {0} />
                <ListItem index = {1}/>
                <ListItem index = {2}/>
                <ListItem index = {3}/>
                <ListItem index = {4}/>
                <ListItem index = {5}/>
                <ListItem index = {6}/>
                <ListItem index = {7}/>
                <ListItem index = {8}/>
                <ListItem index = {9}/>
                <ListItem index = {10}/>
                <ListItem index = {11}/>
                <ListItem index = {12}/>
                <ListItem index = {13}/>
                <ListItem index = {14}/>
                <ListItem index = {15}/>
                <ListItem index = {16}/>
                <ListItem index = {17}/>
                <ListItem index = {18}/>
            </div>
            <ArrowForwardIosOutlined className={rightSlider} onClick={() => handleClick("right")} />
        </div>
    </div>
  )
}

export default List