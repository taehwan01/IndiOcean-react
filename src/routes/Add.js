import "../css/Add.css";
import AddTrack from "../components/AddTrack";

import { useState } from "react";

function Add() {
  let [title, setTitle] = useState("Track Name");
  let [artist, setArtist] = useState("Artist Name");
  let [cover, setCover] = useState("../img/wave.png");

  const preview = function (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((res) => {
      reader.onload = () => {
        setCover(reader.result);
        res();
      };
    });
  };

  return (
    <div className="add">
      <div className="row">
        <div className="col-6">
          <AddTrack title={title} artist={artist} cover={cover}></AddTrack>
        </div>
        <div className="col-6 add-info">
          <h2 style={{ marginBottom: "40px" }}>Add your music</h2>
          <div className="row">
            <div className="col-4">
              <h5>Title</h5>
            </div>
            <div className="col-8">
              <input
                placeholder="Title"
                className="info-pad"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
            <br />
            <div className="col-4">
              <h5>Artist Name</h5>
            </div>
            <div className="col-8">
              <input
                placeholder="Artist Name"
                className="info-pad"
                onChange={(e) => {
                  setArtist(e.target.value);
                }}
              ></input>
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
              <input
                type={"file"}
                className="info-pad"
                onChange={(e) => {
                  preview(e.target.files[0]);
                }}
              ></input>
            </div>
            <br />
          </div>
          <button style={{ marginTop: "10px" }}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Add;
