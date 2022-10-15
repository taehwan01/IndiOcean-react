import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

function MusicPlayer() {
  return (
    <>
      <div className="music-player">
        <div className="player-cover">
          <img src={require("../../img/wave.png")} className="player-cover-img" alt="" />
        </div>
        <div className="player-info">
          <div className="player-track-info">
            <h4 style={{ marginBottom: "0" }}>A Glimpse Of Us</h4>
            <h7>Joji</h7>
          </div>
          <div className="player-timer">
            00:00
            <input type="range" className="player-range" />
            03:41
          </div>
          <div className="player-buttons">
            <FontAwesomeIcon icon={solid("shuffle")} className="player-button-2" />
            <FontAwesomeIcon icon={solid("angles-left")} className="player-button" />
            <FontAwesomeIcon icon={solid("play")} className="player-button" />
            <FontAwesomeIcon icon={solid("angles-right")} className="player-button" />
            <FontAwesomeIcon icon={solid("rotate-right")} className="player-button-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicPlayer;
