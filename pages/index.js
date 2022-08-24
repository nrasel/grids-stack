import * as React from "react";
import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import List from "@mui/material/List";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import crown from "../public/image/crown.png";
import avatar from "../public/image/elipse.png";
import GroupIcon from "@mui/icons-material/Group";
import OutboundIcon from "@mui/icons-material/Outbound";
// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
import Donuts from "../components/Donuts";
import Mytable from "../components/Mytable";
import LastPart from "../components/LastPart";
import DressPart from "../components/DressPart";
// import BasicTable from "../components/BasicTable";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const drawerWidth = 115;



const Home = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Image
        src={crown}
        alt="Picture of the author"
        width={85}
        height={85}
        style={{ margin: "auto" }}
      />

      <List>
        <div
          style={{
            background: "#E2BC82",
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <DashboardIcon style={{ color: "#FFFFFF" }} />
          <p style={{ margin: "0px" }}>Dashboard</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <ShoppingCartIcon />
          <p style={{ margin: "0px" }}>Orders</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <ShoppingBagIcon />
          <p style={{ margin: "0px" }}>Products</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <PeopleOutlineIcon />
          <p style={{ margin: "0px" }}>Customers</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <ThumbUpOffAltIcon />
          <p style={{ margin: "0px" }}>Reviews</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <LocalShippingIcon />
          <p style={{ margin: "0px" }}>Shipping</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <BarChartIcon />
          <p style={{ margin: "0px" }}>Analytics</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <NotificationsNoneIcon />
          <p style={{ margin: "0px" }}>Notification</p>
        </div>
      </List>

      <List>
        <div
          style={{
            height: "70px",
            width: "100px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            color: "#FFFFFF",
          }}
        >
          <SettingsIcon />
          <p style={{ margin: "0px" }}>Settings</p>
        </div>
      </List>
    </div>
  );

  const [state, setState] = React.useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#FFFFFF",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ color: "#292929" }}>Hello John Doe 👋</div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <input
                    style={{
                      border: "black",
                      background: "#FFFFFF",
                      color: "#D2D2D2",
                      outline: "none",
                    }}
                    type="text"
                    disabled
                  />
                  <input
                    style={{
                      border: "black",
                      background: "#FFFFFF",
                      color: "#D2D2D2",
                      outline: "none",
                    }}
                    type="text"
                    disabled
                  />
                  <input
                    style={{
                      border: "black",
                      background: "#FFFFFF",
                      color: "#D2D2D2",
                      outline: "none",
                    }}
                    type="text"
                    disabled
                  />
                  <input
                    style={{
                      border: "black",
                      background: "#FFFFFF",
                      color: "#D2D2D2",
                      outline: "none",
                    }}
                    type="text"
                    disabled
                  />
                  <input
                    style={{
                      border: "black",
                      background: "#FFFFFF",
                      color: "#D2D2D2",
                      outline: "none",
                    }}
                    type="text"
                    disabled
                  />
                  <input
                    style={{
                      border: "black",
                      background: "#FFFFFF",
                      color: "#D2D2D2",
                      outline: "none",
                    }}
                    type="text"
                    disabled
                  />

                  <input
                    style={{
                      border: "black",
                      background: "#FFFFFF",
                      color: "#D2D2D2",
                      marginLeft: "40px",
                      outline: "none",
                      padding: "7px 30px",
                      borderRadius: "10px",
                      marginRight: "5px",
                      border:'1px solid #E2BC82'
                    }}
                    onChange={()=>{}}
                    type="text"
                    value="Search"
                  />
                </div>
                <NotificationsNoneIcon style={{ color: "#E2BC82" }} />
                <Image src={avatar} alt="avatar" />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "#2e3345",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "#2e3345",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 15px rgba(41, 41, 41, 0.15)",
                borderRadius: "20px",
                width: "360px",
                height: "125px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <span
                style={{
                  color: " #E2BC82",
                  backgroundColor: "#99B2C6",
                  borderRadius: "40px",
                  height: "75px",
                  width: "75px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GroupIcon />
              </span>
              <div>
                <span
                  style={{
                    color: "#292929",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  10
                </span>
                <p
                  style={{ margin: "0px", color: "#292929", fontWeight: "500" }}
                >
                  Customers
                </p>
              </div>
              <div style={{ color: "#04AF00" }}>
                <OutboundIcon />
                <p style={{ margin: "0px" }}>+20% Inc</p>
              </div>
            </div>

            <div style={{ margin: "0px 0px 0px 20px" }}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 4px 15px rgba(41, 41, 41, 0.15)",
                  borderRadius: "20px",
                  width: "360px",
                  height: "125px",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <span
                  style={{
                    color: " #E2BC82",
                    backgroundColor: "#99B2C6",
                    borderRadius: "40px",
                    height: "75px",
                    width: "75px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GroupIcon />
                </span>
                <div>
                  <span
                    style={{
                      color: "#292929",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
                  >
                    10
                  </span>
                  <p
                    style={{
                      margin: "0px",
                      color: "#292929",
                      fontWeight: "500",
                    }}
                  >
                    Customers
                  </p>
                </div>
                <div style={{ color: "#04AF00" }}>
                  <OutboundIcon />
                  <p style={{ margin: "0px" }}>+20% Inc</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", margin: "0px 0px 0px 20px" }}>
            <div
              style={{
                display: "flex",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 15px rgba(41, 41, 41, 0.15)",
                borderRadius: "20px",
                width: "360px",
                height: "125px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <span
                style={{
                  color: " #E2BC82",
                  backgroundColor: "#99B2C6",
                  borderRadius: "40px",
                  height: "75px",
                  width: "75px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GroupIcon />
              </span>
              <div>
                <span
                  style={{
                    color: "#292929",
                    fontSize: "24px",
                    fontWeight: "700",
                  }}
                >
                  10
                </span>
                <p
                  style={{ margin: "0px", color: "#292929", fontWeight: "500" }}
                >
                  Customers
                </p>
              </div>
              <div style={{ color: "#04AF00" }}>
                <OutboundIcon />
                <p style={{ margin: "0px" }}>+20% Inc</p>
              </div>
            </div>

            <div style={{ margin: "0px 0px 0px 20px" }}>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 4px 15px rgba(41, 41, 41, 0.15)",
                  borderRadius: "20px",
                  width: "360px",
                  height: "125px",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <span
                  style={{
                    color: " #E2BC82",
                    backgroundColor: "#99B2C6",
                    borderRadius: "40px",
                    height: "75px",
                    width: "75px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GroupIcon />
                </span>
                <div>
                  <span
                    style={{
                      color: "#292929",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
                  >
                    10
                  </span>
                  <p
                    style={{
                      margin: "0px",
                      color: "#292929",
                      fontWeight: "500",
                    }}
                  >
                    Customers
                  </p>
                </div>
                <div style={{ color: "#04AF00" }}>
                  <OutboundIcon />
                  <p style={{ margin: "0px" }}>+20% Inc</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            justifyContent: "space-bewteen",
          }}
        >
          {/* <div> */}
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="area"
            height={350}
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 4px 15px rgba(41, 41, 41, 0.15)",
              borderRadius: "15px",
              width: "48%",
              margin: "10px",
            }}
          />
          {/* </div> */}
          <div style={{ display: "flex", margin: "10px" }}>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 15px rgba(41, 41, 41, 0.15)",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <p style={{ color: "#292929", fontSize: "18px" }}>Top Sales</p>
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
                  <option value="volvo">This Year</option>
                  <option value="saab">Demo1</option>
                  <option value="opel">Demo2</option>
                  <option value="audi">Demo3</option>
                </select>
              </div>

              <Donuts />
            </div>
            <div style={{ margin: "0px 0px 0px 21px" }}>
              <Mytable />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* <div> */}
          <LastPart />
          {/* </div> */}
          {/* <div> */}
          <DressPart />
          {/* </div> */}
        </div>
      </Box>
    </Box>
  );
};

export default Home;
