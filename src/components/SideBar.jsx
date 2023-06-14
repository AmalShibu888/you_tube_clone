import React, { useState } from 'react'
import {categories} from "../utils/index"
import { Icon } from '@mui/material';
const SideBar = ({state , setState}) => {
    
  return (
    <div className='SideBar'>
        <div className="categories">
            {
            categories.map((el) => {
                return(
                <button key={el.name} onClick={(e)=>{setState(el.name)}} className= {el.name} style={{background : el.name === state && "crimson" }}>
                        <span className='icon' style={{color : el.name === state ? "white" : "crimson"}}>{el.icon}</span> 
                        <span className='name'>{el.name}</span>    
                </button>
                )
            })
            }
        </div>
        <p>Copyright 2023 by Amal Shibu</p>
    </div>
  )
}

export default SideBar