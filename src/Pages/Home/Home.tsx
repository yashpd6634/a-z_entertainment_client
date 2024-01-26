import Navbar from "../../Components/Navbar/Navbar"
import Featured from "./Components/Featured/Featured"
import List from "./Components/List/List"
import classes from "./Home.module.css"


const Home = () => {
  return (
    <div className={classes.home}>
        <Navbar />
        <Featured type="movie" />
        <List />
        <List />
        <List />
        <List />
    </div>
  )
}

export default Home