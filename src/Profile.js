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

function Profile() {
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    const [isLoaded, setIsLoaded] = useState(true);
    const [user, setUser] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token')
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        fetch("https://www.melivecode.com/api/auth/user", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.status === 'ok') {
                setUser(result.user)
                setIsLoaded(false)
            } else if (result.status == 'forbidden') {
                MySwal.fire({
                    html:<i>{result.message}</i>,
                    icon: 'error'
                }).then((value) => {
                    navigate('/')
                })
            }
            console.log(result)
        })
        .catch(error => console.log('error', error));
    }, [])
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    const setdata = () => {
        localStorage.removeItem('token')
        navigate('/Dashboard')
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
                            <MenuIcon  />
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
                                {/* <MenuItem onClick={handleClose}>จัดการข้อมูล</MenuItem> */}
                                <MenuItem onClick={setdata}>ข้อมูลพนักงาน</MenuItem>
                                <MenuItem onClick={logout}>ออกจากระบบ</MenuItem>
                            </Menu>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
                {/* <div>{user.id}</div>
                <div>{user.fname}</div>
                <div>{user.lname}</div>
                <div>{user.username}</div>
                <div>{user.email}</div>
                <img src={user.avatar} alt={user.id} width={100}></img>
                <div><button onClick={logout}>logout</button></div> */} 
                <body>
                555
                </body>
            </div>
        )
    }

}
export default Profile