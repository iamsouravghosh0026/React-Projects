import React, { useState, useEffect, useRef } from 'react'
import './App.css'
const songs = [
  {
    title: "Song One",
    artist: "Artist One",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Song Two",
    artist: "Artist Two",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Song Three",
    artist: "Artist Three",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];
function App() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5); // default half volume
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(1);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);


  const playPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const nextSong = () => {
    setCurrentSong((index) => (index + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSong((index) =>
      index === 0 ? songs.length - 1 : index - 1
    );
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (!isMuted) {
      setPrevVolume(volume); // save current volume
      setVolume(0);
      setIsMuted(true);
    } else {
      setVolume(prevVolume || 1); // restore volume
      setIsMuted(false);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);


  // const handleTimeUpdate = () => {
  //   const current = audioRef.current.currentTime;
  //   const duration = audioRef.current.duration;
  //   setProgress((current / duration) * 100);
  // };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    setProgress(current);
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 to-purple-600">
        <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center">
          <h2 className="text-xl font-bold">{songs[currentSong].title}</h2>
          <p className="text-gray-500 mb-4">
            {songs[currentSong].artist}
          </p>
          <audio
            ref={audioRef}
            src={songs[currentSong].src}
            onLoadedMetadata={() => setDuration(audioRef.current.duration)}
            onTimeUpdate={handleTimeUpdate}
            onEnded={nextSong}
          />

          {/* Progress Bar */}

          {/* <div className="w-full bg-gray-200 h-2 rounded mb-4">
            <div
              className="bg-indigo-500 h-2 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div> */}

          <div className="mt-4">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={progress}
              onChange={(e) => handleSeek(e)}
              onInput={(e) => handleSeek(e)}
              className="w-full"
            />
          </div>

          {/* Current Time & Duration */}
          {/* <div className="flex justify-between text-sm text-gray-500">
            <span>{Math.floor(progress)}s</span>
            <span>{Math.floor(duration)}s</span>
          </div> */}

          <div className="flex justify-center text-sm text-gray-500  mb-4">
            <span>{formatTime(progress)} / {formatTime(duration)}</span>
          </div>


          {/* Controls */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSong}
              className="px-3 py-2 bg-gray-200 rounded"
            >
              ⏮
            </button>

            <button
              onClick={playPause}
              className="px-3 py-2 bg-gray-200 rounded"
            >
              {isPlaying ? "⏸️" : "▶️"}
            </button>
            <button
              onClick={nextSong}
              className="px-3 py-2 bg-gray-200 rounded"
            >
              ⏭
            </button>

          </div>
          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={toggleMute}
            >
              {isMuted ? "🔇" : "🔊"}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => {
                const val = Number(e.target.value);
                setVolume(val);
                if (val > 0 && isMuted) setIsMuted(false);
                if (val == 0 && !isMuted) setIsMuted(true);
              }}
              className="w-full"
            />
            <span className="text-sm">{Math.round(volume * 100)}%</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


