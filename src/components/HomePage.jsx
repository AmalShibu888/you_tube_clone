import React from 'react'
import { ChannelCard, Videosf } from '.'
const HomePage = ({state , Videodesc, videosarr}) => {
  return (
    <div className='HomePage'>
        <h2 className='title'>{state} <span>{Videodesc || "Video"}</span> {Videodesc?"Video":""} </h2>
        <Videosf videosarr ={videosarr}/>
        
    </div>
  )
}

export default HomePage