import React from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import Image from "next/image";
import OutboundIcon from "@mui/icons-material/Outbound";
import dress1 from "../public/image/shart.png";
import dress2 from "../public/image/t-shirt.png";

function DressPart() {
  return (
    <div style={{ width: "100%", margin: "10px", padding: "0px" }}>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 4px 15px rgba(41, 41, 41, 0.15)",
          borderRadius: "15px",
          textAlign: "center",
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
          <li style={{ color: "#292929", fontSize: "18px" }}>
            Top selling products
          </li>
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
            <select
              style={{
                backgroundColor: "#ECECEC",
                color: "#292929",
                boxShadow: "0px 0px 5px rgba(40, 86, 120, 0.1)",
                borderRadius: "5px",
                width: "100px",
                height: "29px",
              }}
              name="cars"
              id="cars"
            >
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
          <li
            style={{
              color: "#292929",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            #
          </li>
          <li
            style={{
              color: "#292929",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span>Name </span>
            <UnfoldMoreIcon />
          </li>
          <li
            style={{
              color: "#292929",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span>Amount </span>
            <UnfoldMoreIcon />
          </li>
          <li
            style={{
              color: "#292929",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span>Stock </span>
            <UnfoldMoreIcon />
          </li>
          <li
            style={{
              color: "#292929",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span>Stock Status </span>
            <UnfoldMoreIcon />
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
          <li style={{ color: "#292929" }}>1 </li>
          <li
            style={{ color: "#292929", display: "flex", alignItems: "center"}}
          >
            <Image src={dress1} alt="avatar" />
            <div style={{marginLeft:'5px'}}>
                <p style={{color:'#292929',fontSize:'14px'}}>Tshirt Levis</p>
              <span style={{ color: "#04AF00", display: "flex" }}>
                <OutboundIcon />
                <p style={{ margin: "0px" }}>+20% Inc</p>
              </span>
            </div>
          </li>
          <li style={{ color: "#292929" }}>John@abc.com</li>
          <li style={{ color: "#04AF00" }}>$100.00</li>
          <li style={{ color: "#04AF00" }}>Delivered</li>
        </ul>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <li style={{ color: "#292929" }}>2</li>
          <li
            style={{ color: "#292929", display: "flex", alignItems: "center" }}
          >
            <Image src={dress2} alt="avatar" />
            <div style={{marginLeft:'5px'}}>
                <p style={{color:'#292929',fontSize:'14px'}}>Jeans jacket</p>
              <span style={{ color: "#04AF00", display: "flex" }}>
                <OutboundIcon />
                <p style={{ margin: "0px" }}>+20% Inc</p>
              </span>
            </div>
          </li>
          <li style={{ color: "#292929" }}>Mari@ab.com</li>
          <li style={{ color: "#FF0303" }}>$100.00</li>
          <li style={{ color: "#FF0303" }}>Delivered</li>
        </ul>
      </div>
    </div>
  );
}

export default DressPart;
