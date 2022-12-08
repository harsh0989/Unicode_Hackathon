import { Grid, Paper, Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Logo from '../Components/Images/Logo.png'
import '../Components/Css/SignUp.css'
import { Link } from 'react-router-dom';
import '../Components/Css/Login.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const welcomeStatement = {
    fontFamily: 'Readex Pro, sans-serif', fontWeight: '900', color: '#454C59', fontSize: '40px', backgroundColor: 'transparent', boxShadow: 'none',
}

const button = {
    marginLeft: '-1vw',
    alignItems: 'center',
    width: '44vw',
    backgroundColor: '#0950D5',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    height: '56px',
    marginTop: '2%',
    marginBottom: '2%'
}

function SignUp() {

    const [signUpDetails, setSignUpDetails] = useState({ name: '', email: '', password: '', confirmPassword: '', phoneNumber: '', industry_category: '' })
    const [signUpResponse, setSignUpResponse] = useState('')
    let history = useHistory();
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setSignUpDetails({ ...signUpDetails, [name]: value })
        console.log(signUpDetails);
    }

    const signUpOnClick = () => {
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('name', signUpDetails.name);
        data.append('email', signUpDetails.email);
        data.append('password ', signUpDetails.password);
        data.append('confirm_password ', signUpDetails.confirmPassword);
        data.append('phone_no', signUpDetails.phoneNumber);
        data.append('industry_category', signUpDetails.industryCategory);

        console.log(data);

        var config = {
            method: 'post',
            url: 'https://vismay9.pythonanywhere.com/vendor_register/',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setSignUpResponse(response.data)
                console.log(signUpResponse);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        if (signUpResponse) {
            console.log('Inside if loop')
            history.push('/vendorlogin')
        }
        else {
            history.push('/vendorsignup')
        }
    }, [signUpResponse])

    return (
        <>
            <div className="SignUp">
                <img src={Logo} alt="Best Deal" width='180px' height='55px' className='BestDealLogo' />
                <Grid container sx={{ height: '100vh', position: 'absolute', zIndex: '-1' }}>

                    <Grid item className='loginMQ' md={4} sx={{ backgroundColor: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Paper style={welcomeStatement} sx={{ marginLeft: '10%', marginRight: '10%' }}>Hey there, create your first account at </Paper>
                        <Paper sx={{ fontFamily: 'Readex Pro, sans-serif', fontWeight: '1000', color: '#454C59', fontSize: '40px', backgroundColor: 'transparent', boxShadow: 'none', marginLeft: '10%' }}><i><span style={{ color: '#0950D5' }}>Best </span><span>Deal</span></i> </Paper>
                    </Grid>
                    <Grid item md={8} sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Paper style={welcomeStatement} sx={{ marginLeft: '10%', marginRight: '10%', marginBottom: '2%' }}>Sign Up </Paper>
                        <div className="SignUpContainer">
                            <Grid container>
                                <Grid item md={6} sx={{ display: 'block' }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        id="name"
                                        label="Name"
                                        name="name"
                                        value={signUpDetails.name}
                                        onChange={handleChange}
                                        sx={{ width: '95%' }}
                                    />
                                    <Box sx={{ maxWidth: '95%', fontFamily: 'Readex Pro, sans-serif', marginTop: '5%' }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                            <Select
                                                required id="industry_category" label="Category" name="industry_category" value={signUpDetails.industry_category} onChange={handleChange}
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={'CT'}>Clothing and Textiles (CT)</MenuItem>
                                                <MenuItem value={'PCP'}>Petroleum, Chemicals and Plastics (PCP)</MenuItem>
                                                <MenuItem value={'ECT'}>Electronics, Computers and Transportation (ECT)</MenuItem>
                                                <MenuItem value={'FP'}>Food Production (FP)</MenuItem>
                                                <MenuItem value={'MM'}>Metal Manufacturing (MM)</MenuItem>
                                                <MenuItem value={'WLP'}>Wood, Leather and Paper (WLP)</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid item md={6} sx={{ display: 'block' }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        id="email"
                                        label="Username/ Email"
                                        name="email"
                                        value={signUpDetails.email}
                                        onChange={handleChange}
                                        sx={{ width: '95%' }}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        id="phoneNumber"
                                        label="Phone no."
                                        value={signUpDetails.phoneNumber}
                                        onChange={handleChange}
                                        name="phoneNumber"
                                        sx={{ width: '95%' }}
                                    />
                                </Grid>
                                <Grid item md={6} sx={{ display: 'block' }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        id="password"
                                        label="Password"
                                        name="password"
                                        type='password'
                                        value={signUpDetails.password}
                                        onChange={handleChange}
                                        sx={{ width: '95%' }}
                                    />
                                </Grid>
                                <Grid item md={6} sx={{ display: 'block' }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        id="confirmPassword"
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        type='password'
                                        value={signUpDetails.confirmPassword}
                                        onChange={handleChange}
                                        sx={{ width: '95%' }}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                        <Button style={button} sx={{ textTransform: 'capitalize' }} onClick={signUpOnClick}>Sign Up</Button>
                        <span>Already have an account? <Link to='/vendorlogin' style={{ textDecoration: 'none', color: '#0950D5' }}>Login</Link></span>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default SignUp
