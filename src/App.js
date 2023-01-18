import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './css/App.css';
import Main from './routes/Main';
import Add from './routes/Add';
import Player from './routes/Player';
import Playlist from './routes/Playlist';

function App() {
  let navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#e9e9e9' }}>
      <div className='nav-bg'>
        <Navbar>
          <Container>
            <Navbar.Brand href='#home' className='navi'>
              indiOcean
            </Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link
                className='navimenu'
                onClick={() => {
                  navigate('/');
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className='navimenu'
                onClick={() => {
                  navigate('/add');
                }}
              >
                Add
              </Nav.Link>
              <Nav.Link
                className='navimenu'
                onClick={() => {
                  navigate('/playlist');
                }}
              >
                Playlist
              </Nav.Link>
              <Nav.Link
                className='navimenu'
                onClick={() => {
                  navigate('/player');
                }}
              >
                Player
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/playlist' element={<Playlist></Playlist>}></Route>
        <Route path='/player' element={<Player></Player>}></Route>
      </Routes>
    </div>
  );
}

export default App;
