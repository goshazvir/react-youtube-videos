import axios from 'axios';

const KEY = 'AIzaSyBSqpVxZR33_qv_6dEkanB5FfSuaPf94oo';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});