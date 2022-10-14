function Track(props) {
  return (
    <>
      {/* {process.env.HELLO} */}
      <div className="track col-2">
        <div className="track-box">{props.track.cover_image}</div>
        <br />
        <div className="track-info">
          <h5 className="title">{props.track.title}</h5>
          <h6 className="artist">{props.track.artist_name}</h6>
        </div>
      </div>
    </>
  );
}

export default Track;
