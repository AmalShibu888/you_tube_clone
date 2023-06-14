import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Seaerchbar = () => {
  const [searchVal ,setSearchVal] = useState("");
  const navigate = useNavigate();
  const inputListen = (e)=>{
    // console.log(e.target)
    setSearchVal(e.target.value)
  }
  const Submit = ()=>{
    navigate(`search/${searchVal}`)
    
    // console.log(data);
  }
  return (
    <div className='SearchBar'>
        <div className="searchinp">
        <input
        placeholder='Search...'
        value={searchVal}
        onChange={inputListen}
          type="text"/>
          </div>
          <div className="searchbutt">
            <button type='submit' onClick={()=>{Submit()}}>
          <SearchIcon
          sx={{color :'crimson'}} 
          
          />
          </button>
          </div>
    </div>
  )
}

export default Seaerchbar