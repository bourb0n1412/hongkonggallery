import React from 'react';
import '../styles/Videopage.css';

const videos = [
    {
        id: 1,
        title: 'Hong Kong Skyline Timelapse',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 2,
        title: 'Traditional Market Walkthrough',
        src: 'https://www.w3schools.com/html/movie.mp4',
    },
    {
        id: 3,
        title: 'Night View from Victoria Peak',
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
        id: 4,
        title: 'Street Food in Mong Kok',
        src: 'https://www.w3schools.com/html/movie.mp4',
    },
];

const VideoPage = () => {
    return (
        <div className="video-page-container">
            <h1 className="video-page-title">HK Video Gallery</h1>
            <div className="video-list">
                {videos.map((video) => (
                    <div key={video.id} className="video-item">
                        <video className="video-player" controls>
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="video-info">
                            <p>{video.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoPage;
