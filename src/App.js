import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import List from "./components/List";

function App() {
  let navigate = useNavigate();

  return (
    <div style={{ "background-color": "white" }}>
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
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="main">
        <div className="row">
          <div className="col-5 main-text">
            <h1> Welcome to indiOcean</h1>
            <h4>Surf in to your flavor</h4>
          </div>
          <div className="col-7 wave-img"></div>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <List></List>
              <List></List>
              <List></List>
            </div>
          }
        ></Route>
        <Route path="/playlist" element={<></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
