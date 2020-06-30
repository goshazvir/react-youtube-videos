import React from 'react';
import PropTypes from 'prop-types';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <>
            <div className="ui embed">
                <iframe src={videoSrc} title={video.snippet.title} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </>
    )
}

VideoDetail.propTypes = {
    video: PropTypes.object,
}

export default VideoDetail;