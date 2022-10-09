function AddTrack(props) {
  return (
    <>
      <div className="track">
        <div className="track-box">
          <img src={require("../img/sunflower.png")} alt="monteIMG" className="image-add" />
        </div>
        <br />
        <div className="track-info">
          <h5 className="title">{props.info.title}</h5>
          <h6 className="artist">{props.info.artist_name}</h6>
        </div>
      </div>
    </>
  );
}

export default AddTrack;
