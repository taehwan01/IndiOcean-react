import { useEffect, useState } from "react";
import axios from "axios";

import "../css/Player/Player.css";
import PlayerTrack from "../components/Player/PlayerTrack";
import MusicPlayer from "../components/Player/MusicPlayer";

function Player() {
  let [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/track/list")
      .then((results) => {
        console.log(results.data);
        setList(results.data);
      })
      .catch((e) => {
        console.log("Failed ~/track/list\n", e);
      });
  }, []);

  return (
    <div className="player">
      <div style={{ marginBottom: "35px" }}>
        <h2 style={{ textShadow: "0 0 3px white" }}>Weekly New Songs</h2>
      </div>
      <div className="row">
        <div className="col-6">
          {list.map((track, i) => {
            return <PlayerTrack track={track}></PlayerTrack>;
          })}
        </div>
        <div className="col-6">
          <MusicPlayer></MusicPlayer>
        </div>
      </div>
    </div>
  );
}

export default Player;
