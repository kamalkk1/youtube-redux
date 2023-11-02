import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from "../utils/constants";
import Videocard from './Videocard';
import {Link} from "react-router-dom";
const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideo();
    }, []);

    const getVideo = async () => {
        try {
            const data = await fetch(YOUTUBE_API);
            if (!data.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await data.json();
            // console.log(json.items);
            setVideos(json.items);
        } catch (error) {
            console.error('Error fetching data:', error);
          
        }
    }
  return (
    <div className='flex flex-wrap'>
        {videos.map((video) => 
       ( <Link key={video.id} to={"/watch?v="+ video.id}>
        <Videocard  info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer