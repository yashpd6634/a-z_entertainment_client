import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Featured from "./Components/Featured/Featured";
import List from "./Components/List/List";
import classes from "./Home.module.css";
import axios from "axios";

const Home: React.FC<{ type?: string }> = (props) => {
  const [lists, setLists] = useState<any>([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${props.type ? "?type=" + props.type : ""}${
            genre ? "?&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmY0NWQ0ODdiZTYzYTEyZTI2MTE4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzYzMjU3MywiZXhwIjoxNzA4MDY0NTczfQ.ayKWGNf_RbohRBHu51RAwFw9NhNCKsxeI3tLLSWLKsA",
            },
          }
        );
        console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomList();
  }, [props.type, genre]);

  console.log(lists);
  return (
    <div className={classes.home}>
      <Navbar />
      <Featured type={props?.type} />
      {lists.map((list: any) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
