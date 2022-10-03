import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./css/App.css";
import Main from "./routes/Main";

function App() {
  let navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div style={{ "background-color": "#e9e9e9" }}>
      <div class="nav-bg">
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
      </Routes>
    </div>
  );
}

export default App;
