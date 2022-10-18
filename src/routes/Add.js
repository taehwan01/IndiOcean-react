import "../css/Add/Add.css";
import AddTrack from "../components/Add/AddTrack";

import { useState } from "react";
import axios from "axios";

function Add() {
  let [title, setTitle] = useState("Track Name");
  let [artist, setArtist] = useState("Artist Name");
  // let [audio, setAudio] = useState();
  let [cover, setCover] = useState();

  const previewImage = function (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((res) => {
      reader.onload = () => {
        setCover(reader.result);
        res();
      };
    });
  };
  const addTrack = (e) => {
    console.log("addTrack executed");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("artist_name", artist);
    formData.append("cover_image", e.targer.cover.files[0]);
    formData.append("audio_file", e.target.audio.files[0]);
    console.log(formData);
    axios({
      url: "http://localhost:8080/track/add",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((e) => {
        console.log("Failed ~/track/add", e);
      });
  };

  // const data = {
  //   title: title,
  //   artist_name: artist,
  //   audio_file: audio,
  //   cover_image: cover,
  // };
  // const addTrack = async () => {
  //   axios
  //     .post("http://localhost:8080/track/add", data, { headers: { "Content-Type": "multipart/form-data" } })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((e) => {
  //       console.log("Failed ~/track/add", e);
  //     });
  // };

  return (
    <div className="add">
      <div className="row">
        <div className="col-6">
          <AddTrack title={title} artist={artist} cover={cover}></AddTrack>
        </div>
        <div className="col-6 add-info">
          <h2 style={{ marginBottom: "40px" }}>Add your music</h2>
          <form action="" onSubmit={addTrack}>
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
                <input type={"file"} name="audio" className="info-pad"></input>
              </div>
              <br />
              <div className="col-4">
                <h5>Cover Image</h5>
              </div>
              <div className="col-8">
                <input
                  type={"file"}
                  name="cover"
                  className="info-pad"
                  onChange={(e) => {
                    previewImage(e.target.files[0]);
                  }}
                ></input>
              </div>
              <br />
              <button type="submit">UPLOAD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;
