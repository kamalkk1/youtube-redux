import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
 
  //Early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='w-2/12 p-5 ml-4 shadow-lg  text-start'>
      <h1 className='font-bold pt-5'><Link to="/">Home</Link></h1>
      <ul className='py-4 my-4'>
        <li>Shorts</li>
        <li>library</li>
        <li>library</li>

      </ul>
      <hr/>
      <h1  className='font-bold pt-4'>Subscriptions</h1>
      <ul className='py-4 my-4'>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Watch Later</li>
      </ul>
      <hr/>
      <h1  className='font-bold pt-4'>Explore</h1>
      <ul className='py-4 my-4'>
        <li>Trending</li>
        <li>News</li>
        <li>Gaming</li>
        <li>Shopping</li>
      </ul>
    </div>
  )
}

export default SideBar