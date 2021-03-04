import React from 'react';
import VideoPlayer from "react-video-js-player";
import workoutImg from '../../../../images/ImageAndIcon/workoutImage.jfif'
import workout from "./workout.mp4";

const Video = () => {
    const videoSrc = workout;
    const poster = workoutImg
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <VideoPlayer
                className="embed-responsive-item video"
                src={videoSrc}
                poster={poster}
            />

        </div>
    );
};

export default Video;