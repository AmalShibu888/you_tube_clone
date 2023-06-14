import React from 'react'
import { Link } from 'react-router-dom';
import { demovideourl} from '../utils/index.js';
import {VideoCard} from '.';
const Video = ({vid , vsnip}) => {
  return (
    <div className='Video'>
        <Link to = {vid.videoId ? `/Video/${vid.videoId}` : demovideourl}>
            <VideoCard vid = {vid}  vsnip = {vsnip} />
        </Link>
        
    </div>
  )
}

export default Video