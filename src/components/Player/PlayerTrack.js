function PlayerTrack(props) {
  return (
    <>
      <div className="row player-track">
        <div className="col-4 playerlist-cover">
          <img src={`${process.env.REACT_APP_URL}/track/list/uploads/image/${props.track.cover_image}`} className="playerlist-cover-img" alt="" />
        </div>
        <div className="col-8 playerlist-info">
          <h5 style={{ marginBottom: "0.35rem" }}>{props.track.title}</h5>
          <h6 style={{ marginBottom: "0" }}>{props.track.artist_name}</h6>
        </div>
      </div>
      <hr />
    </>
  );
}

export default PlayerTrack;
