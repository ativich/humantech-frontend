import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Register() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imthcm4ueW9uZ0BtZWxpdmVjb2RlLmNvbSIsImlhdCI6MTY5MTAzMzExMiwiZXhwIjoxNjkxMDMzMTcyfQ.OlWsZXExeg5P1Raeyzq_vAI0VcLHOzR4Ydrup9gUCRo");

        var raw = JSON.stringify({
        "fname": inputs.fname,
        "lname": inputs.lname,
        "username": inputs.username,
        "password": inputs.password,
        "email": inputs.email,
        "avatar": inputs.avatar
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://www.melivecode.com/api/users/create", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.status == 'ok') {
                MySwal.fire({
                    html:<i>{result.message}</i>,
                    icon: 'success'
                }).then((value) => {
                    navigate('/')
                })
            } else {
                MySwal.fire({
                    html:<i>{result.message}</i>,
                    icon: 'error'
                })
            }
        })
        .catch(error => console.log('error', error));
    }


  return (
    <div>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5"> สมัครสมาชิก</Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="given-name"
                            name="fname"
                            required
                            fullWidth
                            id="fname"
                            label="ชื่อ"
                            value={inputs.fname || ""} 
                            onChange={handleChange}
                            autoFocus/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            fullWidth
                            id="lname"
                            label="สกุล"
                            name="lname"
                            value={inputs.lname || ""} 
                            onChange={handleChange}
                            autoComplete="lname"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            value={inputs.username || ""} 
                            onChange={handleChange}
                            autoComplete="username"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={inputs.password || ""} 
                            onChange={handleChange}
                            autoComplete="new-password"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={inputs.email || ""} 
                            onChange={handleChange}
                            autoComplete="email"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="avatar"
                            label="Avatar"
                            name="avatar"
                            value={inputs.avatar || ""} 
                            onChange={handleChange}
                            autoComplete="avatar"/>
                        </Grid>
                    </Grid>
                    <Button style={{backgroundColor:"rgb(244, 150, 50)"}} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        สมัครสมาชิก
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2" >เข้าสู่ระบบ</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

        {/* <form onSubmit={handleSubmit}>
            <label>ชื่อ:
            <input 
                type="text" 
                name="fname" 
                value={inputs.fname || ""} 
                onChange={handleChange}/>
            </label>
            <label>สกุล:
            <input 
                type="text" 
                name="lname" 
                value={inputs.lname || ""} 
                onChange={handleChange}/>
            </label>
            <label>ชื่อผู้ใช้:
            <input 
                type="text" 
                name="username" 
                value={inputs.username || ""} 
                onChange={handleChange}/>
            </label>
            <label>รหัสผ่าน:
                <input 
                type="password" 
                name="password" 
                value={inputs.password || ""} 
                onChange={handleChange}/>
            </label>
            <label>E-mail:
                <input 
                type="text" 
                name="email" 
                value={inputs.email || ""} 
                onChange={handleChange}/>
            </label>
            <label>รูป:
                <input 
                type="text" 
                name="avatar" 
                value={inputs.avatar || ""} 
                onChange={handleChange}/>
            </label>
            <input type="submit" />
        </form>
        <a href='/'>กลับ</a> */}
    </div>
  )
}

export default Register