import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FetchApi } from '../utils/FetchApi';
import ReactPlayer from "react-player";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Videosf } from '.';
const VideoInfo = () => {
    const {vid} = useParams();
    const [video ,setVideo] = useState();
    const [suggestedVid , setSuggestedVid] = useState();
    const fetchVideo = async ()=>{
        const data = FetchApi(`videos?part=snippet,statistics&id=${vid}`);
        data.then((dat)=>{setVideo(dat.items[0])
            console.log(dat.items[0]);})
        
    }

    const fetchSugVid = ()=>{
        FetchApi(`search?part=snippet&relatedToVideoId=${vid}&type=video`)
        .then((data)=>{setSuggestedVid(data.items);
        console.log(data.items)})
    }
    useEffect(()=>{
        fetchVideo();
        fetchSugVid();
    } ,[])

    // const {snippet :{title}} = video;

    
  return (
    <div className='VideoInfo'
    style={{flexGrow :"1",
    backgroundColor : "black"}}>
        <div className="VideoSec" >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${vid}`}  controls className="videoPlayer"
            width={"100%"} height={"70vh"}/>
            <h4
            style={{color:"#ddd",
            fontFamily:"Arial, Helvetica, sans-serif",
            fontSize:"1.5em",
            marginLeft : "10px",
            marginBottom:"15px"}}>{video && video.snippet.title }</h4>
            <div className='videoDesc'
            style={{display:"flex",
            justifyContent:'space-between'}}>
                <div className="channelDet">
                    <Link to= {`/channel/${video?.snippet?.channelId}`} style={{display:"flex",
                textDecoration:"none"}}>
                        <p
                        style={{color:"#ccc",
                        fontFamily :"Arial, Helvetica, sans-serif",
                        fontSize:"1em",
                        fontWeight:"bold",
                        margin:"0px  10px"}}>{video && video.snippet.channelTitle}</p>
                        <CheckCircleIcon />
                    </Link>

                </div>
                <div className="view_like" style={{color:"#aaa",
                display:"flex",
                fontFamily:"Arial, Helvetica, sans-serif"
                }}>
                
                    <p>{video && parseInt(video.statistics.viewCount).toLocaleString() + " views"}</p>
                    <p style={{margin:"0px 20px"}}>{video && parseInt(video.statistics.likeCount).toLocaleString() + " likes"}</p>
                </div>
            </div>
        </div>
        
        <div className="suggestedVid"
        style={{width:"355px"}}>
            { suggestedVid && <Videosf videosarr={suggestedVid}/> }
        </div>

    </div>
  )
}

export default VideoInfo