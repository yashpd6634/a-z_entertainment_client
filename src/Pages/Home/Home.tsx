import { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Featured from "./Components/Featured/Featured";
import List from "./Components/List/List";
import classes from "./Home.module.css";
import axios from "axios";
import { AuthContext } from "../../authContext/AuthContext";
import { ListOutput } from "./Components/List/List.type";

const Home: React.FC<{ type?: string }> = ({ type }) => {
  const [lists, setLists] = useState<ListOutput[]>([]);
  const [genre, setGenre] = useState<string>("");
  const { state } = useContext(AuthContext);
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: "Bearer " + state.user?.accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomList();
  }, [type, genre, state.user?.accessToken]);

  console.log(lists);
  return (
    <div className={classes.home}>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list: ListOutput) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
