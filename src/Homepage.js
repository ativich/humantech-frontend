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
import './components/main.css'

function Homepage() {
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
            </div>
        )
    }
}
export default Homepage