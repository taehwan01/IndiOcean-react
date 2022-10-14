function Track(props) {
  return (
    <>
      <div className="track col-2">
        <div className="track-box">
          <img src={`${process.env.REACT_APP_URL}/track/list/uploads/image/${props.track.cover_image}`} className="track-img" alt="" />
        </div>
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
