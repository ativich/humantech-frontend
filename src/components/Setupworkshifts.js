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

function Setupworkshifts() {
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
    const Dashboard = () => {
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
                    <div style={{}}> <p style={{color:"white",fontSize:"25px",marginLeft:"25px"}}><b>ข้อมูลพนักงาน</b></p></div>
                    <div style={{float:"right",width:"60%"}} className='line5'></div>
                </header>
                <body>
                    <menu>
                        <div className='menu' onClick={Dashboard} >Dashboard</div>
                        <div className='menu'>นำเข้าข้อมูลพนักงาน</div>
                        <div className='menu' onClick={Imgemployee} >รูปพนักงาน</div>
                        <div className='menu' onClick={Data}>ข้อมูลพื้นฐาน</div> 
                        <div className='menu'>ข้อมูลผู้ใช้</div>
                        <div className='menu'>ข้อมูลใบหน้า</div>
                        <div className='menu' onClick={Assignapprovers}>กำหนดผู้อนุมัติ</div>
                        <div className='menu' onClick={Receivingchannels}>ช่องทางการรับเงิน</div>
                        <div className='menu' style={{backgroundColor:"rgb(244, 150, 50)",color:"white"}} onClick={Setupworkshifts}>ตั้งค่ากะการทำงาน</div>
                        <div className='menu'>ตั้งค่าวันทำงาน-วันหยุด</div>
                        <div className='menu'>ตั้งค่าทั่วไป</div>
                        <div className='menu'>เงินสะสมย้อนหลัง</div>
                        <div className='menu'>ตั้งค่าการแก้ไขข้อมูล</div>
                    </menu>
                    <conten>
                        <div><p style={{fontSize:"30px",marginLeft:"20px"}}><b>ตั้งค่ากะการทำงาน</b></p></div>
                        <div className='line'></div><br></br>
                        <div style={{width:"95%",marginLeft:"2.5%"}}>
                            <div className="table-container">
                                <table className="responsive-table" style={{width:"100%"}}>  
                                    {/* <tr className="heardTR" style={{textAlign:"center"}}> */}
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>ลำดับ</th>
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>ชื่อพนักงาน</th>
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>จันทร์</th>
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>อังคาร</th>
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>พุธ</th>
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>พฤหัสบดี</th>
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>ศุกร์</th>
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>เสาร์</th>
                                    <th style={{color:"white",backgroundColor:"rgb(244, 150, 50)",borderRadius:"20px",textAlign:"center"}}>อาทิตย์</th>
                                    {/* </tr> */}
                                    <tr>
                                        <td style={{textAlign:"center"}}>1</td>
                                        <td>
                                            <div className='icon-container' style={{display:"flex",float:"left",marginRight:"10px"}}><img src='/img/women1.png' className='round-icon'/></div> 
                                            <div style={{marginTop:"7px"}}>644306: สุนทรี สิริพชอนันต์ (ติ๋ว)</div>
                                        </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:"center"}}>2</td>
                                        <td>
                                            <div className='icon-container' style={{display:"flex",float:"left",marginRight:"10px"}}><img src='/img/women1.png' className='round-icon'/></div> 
                                            <div style={{marginTop:"7px"}}>644306: สุนทรี สิริพชอนันต์ (ติ๋ว)</div>
                                        </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:"center"}}>3</td>
                                        <td>
                                            <div className='icon-container' style={{display:"flex",float:"left",marginRight:"10px"}}><img src='/img/men1.png' className='round-icon'/></div> 
                                            <div style={{marginTop:"7px"}}>644306: สุนทรี สิริพชอนันต์ (ติ๋ว)</div>
                                        </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:"center"}}>4</td>
                                        <td>
                                            <div className='icon-container' style={{display:"flex",float:"left",marginRight:"10px"}}><img src='/img/men1.png' className='round-icon'/></div> 
                                            <div style={{marginTop:"7px"}}>644306: สุนทรี สิริพชอนันต์ (ติ๋ว)</div>
                                        </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                    </tr>
                                    <tr>
                                        <td style={{textAlign:"center"}}>5</td>
                                        <td>
                                            <div className='icon-container' style={{display:"flex",float:"left",marginRight:"10px"}}><img src='/img/men1.png' className='round-icon'/></div> 
                                            <div style={{marginTop:"7px"}}>644306: สุนทรี สิริพชอนันต์ (ติ๋ว)</div>
                                        </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                        <td> WC0002 </td>
                                    </tr>
                                </table>
                            </div>
                        </div><br></br>

                        <div style={{width:"100%", display: "flex", justifyContent: "center"}}>
                            <div style={{marginTop:"15px",width:"95%"}}>
                                <p style={{color:"red",fontSize:"16px"}}>*** หากมีการเปลี่ยนแปลงกะการทำงานในหน้านี้ จะเป็นการเปลี่ยนข้อมูลพื้้นฐาน ซึ่งจะไม่ส่งผลกระทบข้อมูลในแต่ละเดือน หากต้องการอัพเดทข้อมูลในแต่ละเดือน กรุณา "รีเซ็ทค่าตั้งต้น" ในเดือนที่ต้องการอีกครั้ง</p>
                            </div>
                        </div>
                    </conten>           
                </body>
            </div>
        )
    }
}
export default Setupworkshifts