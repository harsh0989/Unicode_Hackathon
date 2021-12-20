import { Button, Grid, TextField, Typography, Paper, Card, CardContent } from '@mui/material'
import React from 'react'
import Logo from '../Components/Images/Logo.png'
import '../Components/Css/Signin.css'
import SignUp from './SignUp'
import { Link } from 'react-router-dom'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LoginIcon from '@mui/icons-material/Login';
const Mainpage = () => {

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
        fontFamily: 'Poppins',
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
                        <Paper style={welcomeStatement} sx={{ marginLeft: '10%', marginRight: '10%' }}>A few clicks away </Paper>
                        <Paper style={welcomeStatement} sx={{ marginLeft: '10%', marginRight: '10%' }}>from saving money </Paper>
                        <Paper sx={{ fontFamily: 'Poppins', fontWeight: '1000', color: '#454C59', fontSize: '40px', backgroundColor: 'transparent', boxShadow: 'none', marginLeft: '10%' }}><i><span>with </span><span >Best </span><span style={{ color: '#0950D5' }}>Deal</span></i> </Paper>
                        <Paper sx={{boxShadow:'none',fontFamily: 'Poppins', fontWeight: '500',fontSize:'24',marginLeft: '10%', marginRight: '10%' }}>Get the best deals for raw materials</Paper>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ backgroundColor: '#F5F6F9', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography fontWeight={800} sx={{ fontSize: '4.5vh', color: '#454C59', fontFamily: 'Poppins',marginBottom:'5%' }}>Hey there, start your journey with <i><span>with </span><span >Best </span><span style={{ color: '#0950D5' }}>Deal</span></i></Typography>
                        <div>
                        <Grid container>
                            <Grid item md={6} sx={{position:'relative'}}>
                            <div className='circle' style={{position:'absolute',width:'60px', height:'60px', backgroundColor:'#0950D5', color:'white', borderRadius:'50%',top:'-20%', left:'40%', display:'flex', justifyContent:'center', alignItems:'center'}}><LoginIcon/></div>
                                <div style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%',height:'100%'}}>
                                <Card sx={{width:'60%',height:'100%'}}>
                                    <CardContent>
                                <div style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%', flexDirection:'column'}}>
                                        <p style={{textAlign:'center'}}>
                                        Are you a client looking for a best deal?
                                        </p>
                                        <Link to='/signup' style={{ textDecoration: 'none', color: '#0950D5',marginTop:'11.4%' }}>Yes</Link>
                                    </div>
                                    </CardContent>
                                </Card>
                                
                                </div>
                            </Grid>
                            <Grid item md={6} sx={{position:'relative'}}>
                                <div className='circle' style={{position:'absolute',width:'60px', height:'60px', backgroundColor:'#0950D5', color:'white', borderRadius:'50%',top:'-20%', left:'40%', display:'flex', justifyContent:'center', alignItems:'center'}}><PeopleAltIcon/></div>
                                <div style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%'}}>
                                <Card sx={{width:'60%',}}>
                                    <CardContent>
                                <div style={{display:'flex',justifyContent:'center', alignItems:'center', width:'100%', flexDirection:'column'}}>
                                        <p style={{textAlign:'center'}}>
                                        Do you have an industry and want to become a Vendor?
                                        </p>
                                        <Link to='/vendorsignup' style={{ textDecoration: 'none', color: '#0950D5' }}>Yes</Link>
                                    </div>
                                    </CardContent>
                                </Card>
                                
                                </div>
                            </Grid>
                            
                        </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>




        </>
    )
}

export default Mainpage
