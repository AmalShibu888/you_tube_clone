import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoVideoTitle,demoThumbnailurl,demoChannelTitle } from '../utils/index';
const VideoCard = ({vid , vsnip}) => {
  return (
    <div className='VideoCard'>
        <img   src={vsnip?.thumbnails?.medium?.url || demoThumbnailurl} alt={vsnip.thumbnails.title} />
        <div className="title_desc">
            <h5>{vsnip?.title.slice(0,60) || demoVideoTitle}</h5>
            <div className="VideoChannelName">
                <p>{vsnip?.channelTitle.slice(0,60) || demoChannelTitle }</p>
                <CheckCircleIcon />
            </div>
        </div>
    </div>
  )
}

export default VideoCard