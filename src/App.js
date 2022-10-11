import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { addTrack } from "./store/trackSlice";
import "./css/App.css";
import Main from "./routes/Main";
import Add from "./routes/Add";
import store from "./store/store";

function App() {
  let navigate = useNavigate();
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:8080/track/list")
      .then((results) => {
        console.log(results.data[0]);
        dispatch(addTrack(results.data[0]));
      })
      .catch((e) => {
        console.log("Failed ~/track/list\n", e);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#e9e9e9" }}>
      <div className="nav-bg">
        <Navbar>
          <Container>
            <Navbar.Brand href="#home" className="navi">
              indiOcean
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                className="navimenu"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="navimenu"
                onClick={() => {
                  navigate("/add");
                }}
              >
                Add
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/playlist" element={<></>}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
      </Routes>
    </div>
  );
}

export default App;
