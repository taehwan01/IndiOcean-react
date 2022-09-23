import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import List from "./components/List";

function App() {
  let navigate = useNavigate();

  return (
    <>
      <div>
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
    </>
  );
}

export default App;
