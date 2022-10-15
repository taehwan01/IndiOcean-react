import "../css/Player/Player.css";
import PlayerTrack from "../components/Player/PlayerTrack";
import MusicPlayer from "../components/Player/MusicPlayer";

function Player() {
  return (
    <div className="player">
      <div style={{ marginBottom: "35px" }}>
        <h2 style={{ textShadow: "0 0 3px white" }}>Weekly New Songs</h2>
      </div>
      <div className="row">
        <div className="col-6">
          <PlayerTrack></PlayerTrack>
          <PlayerTrack></PlayerTrack>
          <PlayerTrack></PlayerTrack>
          <PlayerTrack></PlayerTrack>
          <PlayerTrack></PlayerTrack>
          <PlayerTrack></PlayerTrack>
        </div>
        <div className="col-6">
          <MusicPlayer></MusicPlayer>
        </div>
      </div>
    </div>
  );
}

export default Player;
