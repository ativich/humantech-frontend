import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

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
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Login() {
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
        "username": inputs.username,
        "password": inputs.password,
        "expiresIn": 6000000
        });
        let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        fetch("https://www.melivecode.com/api/login", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.status === 'ok'){
                MySwal.fire({
                    html: <i>{result.message}</i>,
                    icon: 'success'
                  }).then((value) => {
                    localStorage.setItem('token', result.accessToken)
                    navigate('./Profile')
                  })
            } else {
                MySwal.fire({
                    html:<i>{result.message}</i>,
                    icon: 'error'
                })
            }
        })
        .catch(error => console.log('error', error));
        console.log(inputs);
    }
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                   เข้าสู่ระบบ
                </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              value={inputs.username || ""} 
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={inputs.password || ""} 
              onChange={handleChange}/>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} style={{backgroundColor:"rgb(244, 150, 50)"}}>
              เข้าสู่ระบบ
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/Register" variant="body2">
                  {"สมัครสมาชิก"}
                </Link>
              {/* <a href='/Register'>สมัครสมาชิก</a> */}
              </Grid>
              <Grid item>
                {/* <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

{/* <form onSubmit={handleSubmit}>
            <label>ชื่อผู้ใช้:
                <input 
                    type="text" 
                    name="username" 

                />
            </label>
                <label>รหัสผ่าน:
                    <input 
                    type="password" 
                    name="password" 
                  
                />
                </label>
                <input type="submit" />
            </form>
            <a href='/Register'>Register</a> */}

        </div>
    )
}

export default Login