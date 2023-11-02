import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage'

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store)=> store.chat.message);

    useEffect(()=> {
       const i =  setInterval(()=>{
        dispatch(addMessage({
            name: "kamal",
            message: "ajkgdhsvbfj",
        }))
        }, 2000);

        return () => clearInterval(i);
    }, []);

  return (
    <div className='ml-2 p-2 w-full h-[515px] border border-black rounded-lg bg-slate-100'>
       {chatMessages.map((c, i)=> <ChatMessage key={i} name={c.name} message={c.message}/>)}
    </div>
  )
}

export default LiveChat