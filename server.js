const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Enable CORS to allow requests from the frontend
app.use(cors());

// Mock data for images
const images = [
  { src: '/images/2.png', info: 'Nina Hotel Tsuen Wan West View' },
  { src: '/images/3.png', info: 'Detective Conan Movie Billboard' },
  { src: '/images/4.png', info: 'Food :)' },
  { src: '/images/5.png', info: 'Vending Machine' },
  { src: '/images/6.png', info: 'Top View' },
];

// Mock data for videos
const videos = [
  { id: 1, title: 'Hong Kong Skyline Timelapse', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 2, title: 'Traditional Market Walkthrough', src: 'https://www.w3schools.com/html/movie.mp4' },
];

// Serve static files (e.g., images)
app.use('/images', express.static('images'));

// API route to get images
app.get('/api/images', (req, res) => {
  res.json(images);
});

// API route to get videos
app.get('/api/videos', (req, res) => {
  res.json(videos);
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
