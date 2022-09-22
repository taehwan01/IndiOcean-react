import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./App.css";
import List from './components/List'

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
      <List></List>
      <List></List>
      <List></List>
    </>
  );
}

export default App;
