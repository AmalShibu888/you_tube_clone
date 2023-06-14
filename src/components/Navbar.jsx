import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { Searchbar } from '.';


const Navbar = () => {
  return (
    <div className='NavBar'>
        <div className="NavBarCont">   
          <Link to={'/'}><img src="/icon.webp" alt="photo" /> </Link>
          <Searchbar />
        </div> 
      
    </div>
  )
}

export default Navbar