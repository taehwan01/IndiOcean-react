import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import MainList from '../components/Main/MainList';
import '../css/Main/Main.css';

function Main() {
  let [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/track/list')
      .then((results) => {
        console.log(results.data);
        setList(results.data);
      })
      .catch((e) => {
        console.log('Failed ~/track/list\n', e);
      });
  }, []);

  return (
    <div>
      <div className='main'>
        <div className='row'>
          <div className='col-5 main-text'>
            <h1> Surf In IndiOcean</h1>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </h4>
          </div>
          <div className='col-7 wave-img'>
            <div className='search'>
              <input type='text' placeholder='Search song or artist' className='search-input' />
              <button className='search-btn'>
                <FontAwesomeIcon icon={solid('magnifying-glass')} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='main-list'>
        <MainList list={list}></MainList>
      </div>
    </div>
  );
}

export default Main;
