import React, { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom';

import { Feed, Navbar ,ChannelInfo ,SearchResPage, VideoInfo } from './components';
const App = () =>(
    
    <div className='Appcont'>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element = {<Feed />} />
                <Route path ="/channel/:id" element ={<ChannelInfo />} />
                <Route path='/search/:searchVal' element ={<SearchResPage />}/>
                <Route path='/Video/:vid' element={<VideoInfo />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )


export default App