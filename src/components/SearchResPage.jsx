import React, { useEffect, useState } from 'react'
import { FetchApi } from '../utils/FetchApi';
import HomePage from './HomePage';
import { useParams } from 'react-router-dom';

const SearchResPage = () => {
    const [videosarr ,SetVideosarr] = useState([]);
    const {searchVal} = useParams(); 
    useEffect(()=>{
      FetchApi(`search?part=snippet&q=${searchVal}`)
      .then((res)=>{
        SetVideosarr(res.items)})
  }, [])    
  return (
    <div className='SearchResPage'
    style={{
        backgroundColor:"black"
    }}>
        <HomePage  state = {"Search Result for:"}  videosarr = {videosarr} Videodesc = {searchVal} />
    </div>
  )
}

export default SearchResPage