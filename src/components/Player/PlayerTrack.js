function PlayerTrack() {
  return (
    <>
      <div className="row player-track">
        <div className="col-4 playerlist-cover">
          <img src={require("../../img/wave.png")} className="playerlist-cover-img" alt="" />
        </div>
        <div className="col-8 playerlist-info">
          <h5 style={{ marginBottom: "0.35rem" }}>Track Name</h5>
          <h6 style={{ marginBottom: "0" }}>Artist Name</h6>
        </div>
      </div>
      <hr />
    </>
  );
}

export default PlayerTrack;
