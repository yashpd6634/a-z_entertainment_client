import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material"
import classes from "./ListItem.module.css"
import { useState } from "react"

const ListItem: React.FC<{index: number}> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const myInlineStyle: any = {
    left: `${isHovered && props.index * 13 - 2.88 + props.index * 0.5}rem`
  };

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";


  return (
    <div style={myInlineStyle} className={classes.listItem} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
         <img
            src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
            alt=""
         />
         {isHovered && (
            <>
            <video src={trailer} autoPlay={true} loop />
            <div className={classes.itemInfo}>
                <div className={classes.icons}>
                    <PlayArrow className={classes.icon}/>
                    <Add className={classes.icon}/>
                    <ThumbUpOutlined className={classes.icon}/>
                    <ThumbDownOutlined className={classes.icon}/>
                </div>
                <div className={classes.itemInfoTop}>
                    <span>1 hour 14 mins</span>
                    <span className={classes.limit}>+16</span>
                    <span>1999</span>
                </div>
                <div className={classes.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti vitae reprehenderit in, soluta voluptas sapiente eum.
                </div>
                <div className={classes.genre}>
                    Action
                </div>
            </div>
            </>
          )}
    </div>
  )
}

export default ListItem