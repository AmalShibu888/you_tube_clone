import React, { useEffect, useState } from 'react'
import {SideBar , HomePage} from "."
import { FetchApi } from '../utils/FetchApi';

const Feed = () => {
    const [state ,setState] = useState("New");
    const [videosarr ,SetVideosarr] = useState([]);
    useEffect(()=>{
      FetchApi(`search?part=snippet&q=${state}`)
      .then((res)=>{
        SetVideosarr(res.items)})
  }, [state])    
  return (
    <div className='Feed'>
        <SideBar  state = {state} setState = {setState} />
        <HomePage  state = {state}  videosarr = {videosarr} />
        
    </div>
  )
}

export default Feed;