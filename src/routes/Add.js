import "../css/Add.css";
import AddTrack from "../components/AddTrack";

import { useEffect, useState } from "react";

function Add() {
  let [info, setInfo] = useState({ title: "monteTrack Name", artist_name: "monteArtist Name", cover_image: "../img/wave.png" });
  return (
    <div className="add">
      <div className="row">
        <div className="col-6">
          <AddTrack info={info}></AddTrack>
        </div>
        <div className="col-6 add-info">
          <h2 style={{ "margin-bottom": "40px" }}>Add your music</h2>
          <div className="row">
            <div className="col-4">
              <h5>Title</h5>
            </div>
            <div className="col-8">
              <input placeholder="Title" className="info-pad"></input>
            </div>
            <br />
            <div className="col-4">
              <h5>Artist Name</h5>
            </div>
            <div className="col-8">
              <input placeholder="Artist Name" className="info-pad"></input>
            </div>
            <br />
            <div className="col-4">
              <h5>Music File</h5>
            </div>
            <div className="col-8">
              <input type={"file"} className="info-pad"></input>
            </div>
            <br />
            <div className="col-4">
              <h5>Cover Image</h5>
            </div>
            <div className="col-8">
              <input type={"file"} className="info-pad"></input>
            </div>
            <br />
          </div>
          <button style={{ "margin-top": "10px" }}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Add;
