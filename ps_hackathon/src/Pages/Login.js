import { Button, Grid, TextField, Typography, Paper } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Route} from 'react-router-dom'
import Logo from '../Components/Images/Logo.png'
import '../Components/Css/Signin.css'
import SignUp from './SignUp'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Cookies from "js-cookie"

const textf = {
    margin: '2vw',
    width: '37.5vw',
    backgroundColor: '#FFFFFF',
    borderRadius: '7px'
}
const button = {
    // margin:'2.5vh',
    alignItems: 'center',
    width: '37.5vw',
    backgroundColor: '#0950D5',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    height: '56px',
    borderRadius: '7px'

}
const welcomeStatement = {
    fontFamily: 'Readex Pro, sans-serif',
    fontWeight: '900', color: '#454C59',
    fontSize: '40px',
    backgroundColor: 'transparent',
    boxShadow: 'none',
}

const Login = () => {
    const [loginDetails, setLoginDetails] = useState({ email: '', password: '' })
    const [Token, setToken] = useState('');
    let navigate = useNavigate();
    const handleLoginChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setLoginDetails({ ...loginDetails, [name]: value })
    }

    const loginOnClick = () => {

        var data = JSON.stringify({
            "email": loginDetails.email,
            "password": loginDetails.password
        });

        var config = {
            method: 'post',
            url: 'https://bestdeal-site.herokuapp.com/login/',
            headers: {
                'Content-Type': 'application/json',

            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setToken(response.data.token)
                console.log(Token);
                localStorage.setItem('Token',response.data.token)

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        if (Token) {
            localStorage.setItem('isAuthenticated',true)
            console.log('Inside if loop')
            navigate(`/clienthomepage`)
        }
        else {
            navigate(`/login`)
        }
    }, [Token])



    return (
        <>
            <div className='Login'>
                <img src={Logo} alt='error' className='image' width='180px' height='55px' />
                <Grid container style={{ position: 'absolute', zIndex: '-1' }} >

                    <Grid item xs={12} md={4} sx={{ backgroundColor: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Paper style={welcomeStatement} sx={{ marginLeft: '10%', marginRight: '10%' }}>Welcome back to, </Paper>
                        <Paper sx={{ fontFamily: 'Readex Pro, sans-serif', fontWeight: '1000', color: '#454C59', fontSize: '40px', backgroundColor: 'transparent', boxShadow: 'none', marginLeft: '10%' }}><i><span style={{ color: '#0950D5' }}>Best </span><span>Deal</span></i> </Paper>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ backgroundColor: '#F5F6F9', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography fontWeight={700} sx={{ fontSize: '4vh', color: '#454C59', fontFamily: 'Poppins' }}>Login</Typography>
                        <TextField style={textf} id="outlined-basic" label="Username/Email" name='email' value={loginDetails.email} onChange={handleLoginChange} variant="outlined"></TextField>
                        <TextField style={textf} id="outlined-basic" label="Password" name='password' type={'password'} value={loginDetails.password} onChange={handleLoginChange} variant="outlined"></TextField>
                        <a href='/' style={{ marginBottom: '1vw', color: '#454C59', fontFamily: 'Poppins', textDecoration: 'none' }}>Forgot password?</a>
                        <Button style={button} onClick={loginOnClick}>LOGIN</Button>
                        <span style={{ margin: '2vw' }}>Don't have an account? <Link to='/signup' style={{ textDecoration: 'none', color: '#0950D5' }}>Create an account</Link ></span>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Login;
