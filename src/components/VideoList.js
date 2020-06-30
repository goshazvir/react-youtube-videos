import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderenList = videos.map(video => {
        return (
            <VideoItem
                onVideoSelect={onVideoSelect}
                video={video}
                key={video.id.videoId}
            />
        )
    })

    return <div className='ui relaxed divided list'>{renderenList}</div>
}

VideoList.propTypes = {
    videos: PropTypes.array,
    onVideoSelect: PropTypes.func,
}


export default VideoList;