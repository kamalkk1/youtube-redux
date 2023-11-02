import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {



    const [suggestions, setSuggestions] = useState([]);

    const [showSuggestions, setShowSugestions] = useState(false);

    //SearchBox debouncing function
    const [searchQuery, setSearchQuery]  = useState("");


   const  searchCache = useSelector((store)=> store.search);


    //timer function
    useEffect(() => {
        console.log(searchQuery);

       const timer = setTimeout(() => {
        if(searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery]);
        }else{
            getSearchSuggestions();
        }
       }, 200);
        // clear the timer which destroy the component 
       return () => {
        clearTimeout(timer);
       }
    },[searchQuery]);

    const getSearchSuggestions = async () =>{
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json.data);
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [searchQuery] : json[1],
        }));
    }


    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
       <div className='flex col-span-1'>
        <img
        onClick={()=> toggleMenuHandler()}
         className='h-8 cursor-pointer' alt='burger' src='https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png'/>
        <a href='/'>
            <img className='h-10 mx-2' alt='logo' src='https://t3.ftcdn.net/jpg/03/00/38/90/240_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'/>
        </a>
        </div>
       <div className='col-span-10 px-10'>
        <div>
        <input 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSugestions(true)}
        onBlur={() => setShowSugestions(false)}
        type='text' placeholder='Search' className='w-1/2 border border-gray-400 rounded-l-full px-6 py-2'/>
        <button className='bg-slate-200 rounded-r-full px-4 py-2 border border-gray-400 hover:from-amber-50'>🔍</button>
       
        </div>
       {showSuggestions && ( 
            <div className='p-2 absolute bg-white px-5 w-2/5 rounded-md border border-gray-50 hover:bg-gray-100 shadow-lg'>
            <ul>
                {suggestions.map((s) =>  <li key={s} className='py-2'>{s}</li>)}
               
            </ul>
        </div>)}
        </div>
       <div className='col-span-1'>
        <img className='h-8' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
       </div>
    </div>
  )
}

export default Head