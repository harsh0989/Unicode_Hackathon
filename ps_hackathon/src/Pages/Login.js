import { Button, Grid, TextField, Typography, Paper } from '@mui/material'
import React from 'react'
import Logo from '../Components/Images/Logo.png'
import '../Components/Css/Signin.css'

const Login = () => {
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
    return (
        <>
            <div className='Login'>
                <img src={Logo} alt='error' className='image' width='180px' height='55px' />
                <Grid container style={{ position: 'absolute', zIndex: '-1' }} >

                    <Grid item xs={12} md={4} sx={{ backgroundColor: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Paper style={welcomeStatement} sx={{ marginLeft: '10%', marginRight: '10%' }}>Welcome back to, </Paper>
                        <Paper sx={{ fontFamily: 'Readex Pro, sans-serif', fontWeight: '1000', color: '#454C59', fontSize: '40px', backgroundColor: 'transparent', boxShadow: 'none', marginLeft: '10%' }}><i><span style={{ color: '#0950D5' }}>Best </span><span>Deal</span></i> </Paper>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ backgroundColor: '#E5E5E5', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography fontWeight={700} sx={{ fontSize: '4vh', color: '#454C59', fontFamily: 'Poppins' }}>Login</Typography>
                        <TextField style={textf} id="outlined-basic" label="Username/Email" variant="outlined"></TextField>
                        <TextField style={textf} id="outlined-basic" label="Password" variant="outlined"></TextField>
                        <a href='/' style={{ marginBottom: '1vw', color: '#454C59', fontFamily: 'Poppins', textDecoration: 'none' }}>Forgot password?</a>
                        <Button style={button}>LOGIN</Button>
                        <span style={{ margin: '2vw' }}>Don't have an account? <a href='/' style={{ textDecoration: 'none', color: '#0950D5' }}>Create an account</a></span>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Login
