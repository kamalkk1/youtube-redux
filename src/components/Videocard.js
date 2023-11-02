import React from 'react'

const Videocard = ({ info }) => {
    // console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-1 m-1 w-72 shadow-lg rounded-lg'>
       <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
       <ul>
            <li className='font-bold py-2'>{title}</li>
            <li className='opacity-50'>{channelTitle}</li>
            <li className='opacity-50'>{statistics.viewCount}views<span>{}</span></li>
       </ul>
    </div>
  )
}

export default Videocard