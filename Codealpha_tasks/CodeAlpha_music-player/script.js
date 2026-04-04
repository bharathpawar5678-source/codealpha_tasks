let songs = [
  "songs/song1.mp3",
  "songs/song2.mp3"
];

let titles = [
  "Song 1",
  "Song 2"
];

let index = 0;

let audio = document.getElementById("audio");
let title = document.getElementById("title");
let progress = document.getElementById("progress");
let volume = document.getElementById("volume");

// Load Song
function loadSong() {
  audio.src = songs[index];
  title.textContent = titles[index];
  audio.load();
}

// Play / Pause
function playPause() {
  if (audio.paused) {
    audio.play().catch(err => console.log(err));
  } else {
    audio.pause();
  }
}

// Next Song
function nextSong() {
  index = (index + 1) % songs.length;
  loadSong();
  audio.play();
}

// Previous Song
function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong();
  audio.play();
}

// Update Progress Bar
audio.ontimeupdate = function () {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
};

// Seek
progress.oninput = function () {
  if (audio.duration) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
};

// Volume Control
volume.oninput = function () {
  audio.volume = volume.value;
};

// Default Volume
volume.value = 0.5;
audio.volume = 0.5;

// Load first song
loadSong();