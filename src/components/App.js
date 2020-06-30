import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import youtube from './../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const DEFAULT_SEARCH_RESULT = 'buildings';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit(DEFAULT_SEARCH_RESULT)
    }, [])

    const onTermSubmit = async term => {
        const response = await  youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    return (
        <div className='ui container'>
            <SearchBar searcFormValue={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="nine wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="seven wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={onVideoSelect}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  App