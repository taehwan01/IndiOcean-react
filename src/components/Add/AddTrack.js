function AddTrack(props) {
  return (
    <>
      <div className="track">
        <div className="track-box">
          <img src={props.cover} className="image-add" alt="" />
        </div>
        <br />
        <div className="track-info">
          <h5 className="title">{props.title}</h5>
          <h6 className="artist">{props.artist}</h6>
        </div>
      </div>
    </>
  );
}

export default AddTrack;
