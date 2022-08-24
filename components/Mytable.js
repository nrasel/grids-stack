import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Mytable() {
  return (
    <div style={{backgroundColor:'#FFFFFF',boxShadow:'0px 4px 15px rgba(41, 41, 41, 0.15)',borderRadius:'15px',width:'420px',padding:'10px'}}>
      <ul style={{display:'flex',borderBottom:'1px solid #292929',alignItems:'center',justifyContent:'space-between'}}>
        <li style={{color:'#292929',fontSize:'18px'}}>Users</li>
        <li style={{color:'#ABABAB',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',cursor:'pointer'}}><span >See all </span><KeyboardArrowRightIcon/></li>

      </ul>
      <ul style={{display:'flex',borderBottom:'1px solid #292929',alignItems:'center',justifyContent:'space-between'}}>
        <li style={{color:'#292929'}}># Name</li>
        <li style={{color:'#292929'}}>Email</li>
        <li style={{color:'#292929'}}>Status</li>
      </ul>
      <ul style={{display:'flex',borderBottom:'1px solid #292929',alignItems:'center',justifyContent:'space-between'}}>
        <li style={{color:'#292929'}}>1 John Doe</li>
        <li style={{color:'#292929'}}>John@abc.com</li>
        <li style={{color:'#04AF00'}}>Verified</li>
      </ul>
      <ul style={{display:'flex',borderBottom:'1px solid #292929',alignItems:'center',justifyContent:'space-between'}}>
        <li style={{color:'#292929'}}>2 Maraih </li>
        <li style={{color:'#292929'}}>Mari@ab.com</li>
        <li style={{color:'#FF0303'}}>Unverified</li>
      </ul>
      <ul style={{display:'flex',borderBottom:'1px solid #292929',alignItems:'center',justifyContent:'space-between'}}>
        <li style={{color:'#292929'}}>3 John Doe</li>
        <li style={{color:'#292929'}}>John@abc.com</li>
        <li style={{color:'#04AF00'}}>Verified</li>
      </ul>
      <ul style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <li style={{color:'#292929'}}>4 Maraih </li>
        <li style={{color:'#292929'}}>Mari@ab.com</li>
        <li style={{color:'#FF0303'}}>Unverified</li>
      </ul>
    </div>
  )
}

export default Mytable