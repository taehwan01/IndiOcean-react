import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  return (
    <>
      <div className="tae">
        <Navbar bg="light" varian="light">
          <Container>
            <Navbar.Brand href="#home">indiOcean</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
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
      <section>
        <div>
          <h1>New Popular Songs</h1>
        </div>
        <div>{/* here goes the lists */}</div>
      </section>
      <section>
        <div>
          <h1>Genre 1</h1>
        </div>
        <div>{/* here goes the lists */}</div>
      </section>
      <section>
        <div>
          <h1>Genre 2</h1>
        </div>
        <div>{/* here goes the lists */}</div>
      </section>
    </>
  );
}

export default App;
