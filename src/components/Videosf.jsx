import React from 'react'
import {  Video }  from "."
import ChannelCard from "./ChannelCard"
const Videosf = ({videosarr}) => {
  return (
    <div className='Videos'>
        {
            videosarr.map((videoel ,idx)=>(
              <div key={idx} className="cards">
                 {videoel?.id?.videoId && <Video  vid={videoel?.id} vsnip={videoel.snippet} />}
                 {videoel?.id?.channelId &&  <ChannelCard key={idx} cid={videoel?.id?.channelId} csnip={videoel.snippet} marginTop={0} />}
               </div>
              )
            
)
        }
    </div>
  )
}

export default Videosf