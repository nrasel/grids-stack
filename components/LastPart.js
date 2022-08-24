import React from "react";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
function LastPart() {
  return (
    <div style={{ width: "100%", margin: "10px",paddingTop:'0px' }}>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 15px rgba(41, 41, 41, 0.15)",
          borderRadius: "15px",
          textAlign:'center'
        }}
      >
        <ul
          style={{
            display: "flex",
            borderBottom: "1px solid #292929",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li style={{ color: "#292929", fontSize: "18px" }}>Orders</li>
          <li
            style={{
              color: "#ABABAB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            <select style={{backgroundColor:'#ECECEC',color:'#292929',boxShadow:'0px 0px 5px rgba(40, 86, 120, 0.1)',borderRadius:'5px',width:'100px',height:'29px'}} name="cars" id="cars">
              <option value="volvo">Recent</option>
              <option value="saab">Demo1</option>
              <option value="opel">Demo2</option>
              <option value="audi">Demo3</option>
            </select>
          </li>
        </ul>
        <ul
          style={{
            display: "flex",
            borderBottom: "1px solid #292929",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
            <li style={{ color: "#292929",fontSize:'14px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer' }}>#</li>
          <li style={{ color: "#292929",fontSize:'14px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer' }}><span >Customers </span><UnfoldMoreIcon/></li>
          <li style={{ color: "#292929",fontSize:'14px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer' }}><span >Email </span><UnfoldMoreIcon/></li>
          <li style={{ color: "#292929",fontSize:'14px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer' }}><span >Amount </span><UnfoldMoreIcon/></li>
          <li style={{ color: "#292929",fontSize:'14px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer' }}><span >Status </span><UnfoldMoreIcon/></li>
          <li style={{ color: "#292929",fontSize:'14px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer' }}><span >Action </span><UnfoldMoreIcon/></li>
        </ul>
        <ul
          style={{
            display: "flex",
            borderBottom: "1px solid #292929",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li style={{ color: "#292929" }}>1 </li>
          <li style={{ color: "#292929" }}> John Doe</li>
          <li style={{ color: "#292929" }}>John@abc.com</li>
          <li style={{ color: "#04AF00" }}>$100.00</li>
          <li style={{ color: "#04AF00" }}>Delivered</li>
          <li style={{ color: "#04AF00" }}><button style={{background:'<button>view</button>',borderRadius:'5px',width:'80px',height:'30px'}}>view</button></li>
        </ul>
        <ul
          style={{
            display: "flex",
            borderBottom: "1px solid #292929",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li style={{ color: "#292929" }}>2</li>
          <li style={{ color: "#292929" }}> Maraih </li>
          <li style={{ color: "#292929" }}>Mari@ab.com</li>
          <li style={{ color: "#FF0303" }}>$100.00</li>
          <li style={{ color: "#FF0303" }}>Delivered</li>
          <li style={{ color: "#FF0303" }}><button style={{background:'<button>view</button>',borderRadius:'5px',width:'80px',height:'30px'}}>view</button></li>
        </ul>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign:'center'
          }}
        >
          <li style={{ color: "#292929" }}>3</li>
          <li style={{ color: "#292929" }}>3 John Doe</li>
          <li style={{ color: "#292929" }}>John@abc.com</li>
          <li style={{ color: "#04AF00" }}>$100.00</li>
          <li style={{ color: "#04AF00" }}>Delivered</li>
          <li style={{ color: "#04AF00" }}><button style={{background:'<button>view</button>',borderRadius:'5px',width:'80px',height:'30px'}}>view</button></li>
        </ul>
        
      </div>
    </div>
  );
}

export default LastPart;
