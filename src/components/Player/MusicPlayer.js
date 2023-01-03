import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

function MusicPlayer() {
  let audioElem, tracks;
  let [isPlaying, setIsPlaying] = useState(false);
  let [currentSong, setCurrentSong] = useState();

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const skipToPrevious = () => {
    const index = tracks.findIndex((track) => track.title === currentSong.title);
    if (index === 0) {
      setCurrentSong(tracks[tracks.length - 1]);
    } else {
      setCurrentSong(tracks[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const skipToNext = () => {
    const index = tracks.findIndex((x) => x.title === currentSong.title);

    if (index === tracks.length - 1) {
      setCurrentSong(tracks[0]);
    } else {
      setCurrentSong(tracks[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  return (
    <>
      <div className='music-player'>
        <div className='player-cover'>
          <img src={require('../../img/wave.png')} className='player-cover-img' alt='' />
        </div>
        <div className='player-info'>
          <div className='player-track-info'>
            <h4 style={{ marginBottom: '0' }}>A Glimpse Of Us</h4>
            <h7>Joji</h7>
          </div>
          <div className='player-timer'>
            00:00
            <input type='range' className='player-range' />
            03:41
          </div>
          <div className='player-buttons'>
            <FontAwesomeIcon icon={solid('shuffle')} className='player-button-2' />
            <FontAwesomeIcon
              icon={solid('angles-left')}
              onClick={() => {
                skipToPrevious();
              }}
              className='player-button'
            />
            {isPlaying ? (
              <FontAwesomeIcon
                icon={solid('pause')}
                onClick={() => {
                  playPause();
                }}
                className='play-button'
              />
            ) : (
              <FontAwesomeIcon
                icon={solid('play')}
                onClick={() => {
                  playPause();
                }}
                className='pause-button'
              />
            )}
            <FontAwesomeIcon
              icon={solid('angles-right')}
              onClick={() => {
                skipToNext();
              }}
              className='player-button'
            />
            <FontAwesomeIcon icon={solid('rotate-right')} className='player-button-2' />
          </div>
        </div>
      </div>
    </>
  );
}

export default MusicPlayer;
