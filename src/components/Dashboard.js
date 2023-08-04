import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';
import './main.css'

function Dashboard() {
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    const setdata = () => {
        localStorage.removeItem('token')
        navigate('/Dashboard')
    }

    const Imgemployee = () => {
        localStorage.removeItem('token')
        navigate('/Imgemployee')
    }
    const Data = () => {
        localStorage.removeItem('token')
        navigate('/Data')
    }
    const Assignapprovers = () => {
        localStorage.removeItem('token')
        navigate('/Assignapprovers')
    }
    const Receivingchannels = () => {
        localStorage.removeItem('token')
        navigate('/Receivingchannels')
    }
    const Setupworkshifts = () => {
        localStorage.removeItem('token')
        navigate('/Setupworkshifts')
    }
    const Homepage = () => {
        localStorage.removeItem('token')
        navigate('/Homepage')
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    if (isLoaded) return (<div>loading</div>)
    else {
        return (
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar style={{backgroundColor:"rgb(244, 150, 50)"}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }} onClick={Homepage}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            HappySoft
                        </Typography>
                            <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit">
                                <Avatar src={user.avatar} alt='user.id' />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}>
                                <MenuItem onClick={setdata}>ข้อมูลพนักงาน</MenuItem>
                                <MenuItem onClick={logout}>ออกจากระบบ</MenuItem>
                            </Menu>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
                <header className='header' style={{marginTop:"-30px"}}>
                    <div > <p style={{color:"white",fontSize:"25px",marginLeft:"25px"}}><b>ข้อมูลพนักงาน</b></p></div>
                    <div style={{float:"right",width:"60%"}} className='line5'></div>
                </header>
                <body>
                    <menu>
                        <div className='menu' style={{backgroundColor:"rgb(244, 150, 50)",color:"white"}} >Dashboard</div>
                        <div className='menu'>นำเข้าข้อมูลพนักงาน</div>
                        <div className='menu' onClick={Imgemployee} >รูปพนักงาน</div>
                        <div className='menu' onClick={Data}>ข้อมูลพื้นฐาน</div> 
                        <div className='menu'>ข้อมูลผู้ใช้</div>
                        <div className='menu'>ข้อมูลใบหน้า</div>
                        <div className='menu' onClick={Assignapprovers}>กำหนดผู้อนุมัติ</div>
                        <div className='menu' onClick={Receivingchannels}>ช่องทางการรับเงิน</div>
                        <div className='menu' onClick={Setupworkshifts}>ตั้งค่ากะการทำงาน</div>
                        <div className='menu'>ตั้งค่าวันทำงาน-วันหยุด</div>
                        <div className='menu'>ตั้งค่าทั่วไป</div>
                        <div className='menu'>เงินสะสมย้อนหลัง</div>
                        <div className='menu'>ตั้งค่าการแก้ไขข้อมูล</div>
                    </menu>
                    <conten>
                        <div><p style={{fontSize:"30px",marginLeft:"20px"}}><b>Dashboard</b></p></div>
                        <div className='line'></div>




                        <div style={{width:"95%",marginLeft:"2.5%"}}>
                            <div style={{fontSize:"20px"}}><p><b>เอกสารหมดอายุ</b></p></div>
                            <div className="">
                                <div className='row' style={{display: "flex", justifyContent: "center"}}>
                                    <div className='boxdata'>
                                        <p style={{fontSize:"20px"}}><b>เพศ</b></p>
                                        <div className='box-data'>
                                            <div className='app-img'>
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <img src='/img/men1.png' style={{ width: "105px", marginTop: "15px" }} />
                                                    <h3 style={{ textAlign: "center", marginTop: "1px", color: "blue" }}>7</h3>
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}> 
                                                    <img src='/img/women1.png' style={{ width:"105px", marginTop:"15px"}}/>
                                                    <h3 style={{ textAlign:"center",marginTop:"1px",color:"pink"}}>2</h3>
                                                </div>
                                            </div>
                                            <div className='line'></div>
                                            <div style={{textAlign:"center"}}>
                                                <b style={{fontSize:"25px"}}>รวม <span style={{color:"blue"}}>9</span> คน</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='boxdata'>
                                        <p style={{fontSize:"20px"}}><b>ประเภทพนักงาน</b></p>
                                        <ul className='item-list'>
                                            <li>พนักงานประจำ<span>7 คน</span></li>
                                            <li>พนักงานรายวัน<span>1 คน</span></li>
                                            <li>พนักงานพาร์ทไทม์<span>0 คน</span></li>
                                            <li>พนักงานเหมาจ่าย<span>1 คน</span></li>
                                        </ul>
                                    </div>
                                    <div className='boxdata'>
                                        <p style={{fontSize:"20px"}}><b>พนักงานแต่ละสาขา</b></p>
                                        <div className='box-data'>
                                            บริษัท เอ็นทีพี.พาวเวอร์ เนท 9 คน เวิร์ค จำกัด (สำหนักงานใหญ่)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className='app-grid'>
                            <div>
                                <p style={{fontSize:"20px"}}><b>เพศ</b></p>
                                <div className='box-data'>
                                    <div className='app-img'>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            <img src='/img/men1.png' style={{ width: "105px", marginTop: "15px" }} />
                                            <h3 style={{ textAlign: "center", marginTop: "1px", color: "blue" }}>7</h3>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}> 
                                            <img src='/img/women1.png' style={{ width:"105px", marginTop:"15px"}}/>
                                            <h3 style={{ textAlign:"center",marginTop:"1px",color:"pink"}}>2</h3>
                                        </div>
                                    </div>
                                    <div className='line'></div>
                                    <div style={{textAlign:"center"}}>
                                        <b style={{fontSize:"25px"}}>รวม <span style={{color:"blue"}}>9</span> คน</b>
                                    </div>
                                </div><br></br>
                            </div>
                            <div>
                                <p style={{fontSize:"20px"}}><b>ประเภทพนักงาน</b></p>
                                <ul className='item-list'>
                                    <li>พนักงานประจำ<span>7 คน</span></li>
                                    <li>พนักงานรายวัน<span>1 คน</span></li>
                                    <li>พนักงานพาร์ทไทม์<span>0 คน</span></li>
                                    <li>พนักงานเหมาจ่าย<span>1 คน</span></li>
                                </ul>
                            </div>
                            <div>
                                <p style={{fontSize:"20px"}}><b>พนักงานแต่ละสาขา</b></p>
                                <div className='box-data'>
                                    บริษัท เอ็นทีพี.พาวเวอร์ เนท 9 คน เวิร์ค จำกัด (สำหนักงานใหญ่)
                                </div>
                            </div>
                          
                        </div> */}

                        <div style={{width:"95%",marginLeft:"2.5%"}}>
                            <div style={{fontSize:"20px"}}><p><b>เอกสารหมดอายุ</b></p></div>
                            <div className="">
                                <table className="responsive-table" style={{width:"100%"}}>  
                                    {/* <tr className="heardTR" style={{textAlign:"center"}}> */}
                                    <th style={{color:"white",backgroundColor:"rgb(244, 15, 1))",borderRadius:"20px",textAlign:"center"}}>ลำดับ</th>
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>ประเภทเอกสาร</th>
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>ชื่อเอกสาร</th>
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>วันหมดอายุ</th>
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>หมดอายุภายใน</th>
                                        {/* </tr> */}
                                    <tr>
                                        <td style={{textAlign:"center"}}>1</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:"center"}}>2</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                        </div><br></br>

                    </conten>           
                </body>
            </div>
        )
    }

}
export default Dashboard