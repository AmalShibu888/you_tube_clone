import React, { useEffect, useState } from 'react'
import {ChannelCard ,Videosf} from '.'
import { FetchApi } from '../utils/FetchApi';
import { useParams } from 'react-router-dom';

const ChannelInfo = () => {

  const {id} = useParams();
  const [channelDetail , setChannelDetail] = useState();
  const [videos ,setVideos] = useState([]); 
  useEffect(()=>{
    const fetchRes = async ()=>{
      const data = await FetchApi(`channels?part=snippet&id=${id}`);;
      
      setChannelDetail(data.items[0]);
      const data1 = await FetchApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);
    
      setVideos(data1.items);
      // console.log(data1.items);
    }
    fetchRes();
  } , [id])
  return (
    <div className='ChannelInfo'
    style={{backgroundColor:"black",
    flexGrow:"1"
  }}
    >
        <div style={{backgroundColor: "#8EC5FC",
backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
height : "300px"
}}/>
    <div className="channelPage">
      {channelDetail && <ChannelCard cid={channelDetail.id}  csnip = {channelDetail.snippet} marginTop={-140} statistics={channelDetail.statistics}/>}
      {videos && <Videosf videosarr= {videos} />}
      </div>
    </div>
  )
}

export default ChannelInfo