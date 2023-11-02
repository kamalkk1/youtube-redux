import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
const WatchPage = () => {

const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='flex flex-col w-full'>
    <div className='flex mx-4 px-5 rounded-lg w-full'>
        <div className=''>
        <iframe width="960" height="515" frameBorder="10" src={"https://www.youtube.com/embed/" + searchParams.get("v") }
        title="YouTube video player" 
        rameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='w-full mr-4'>
            <LiveChat />
        </div>
    </div>
    <CommentsContainer />
    </div>
  )
}

export default WatchPage