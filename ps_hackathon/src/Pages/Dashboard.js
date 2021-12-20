import { React, useState } from 'react'
// import axios from 'axios'
import { Button, Card, Grid } from '@mui/material';
import VendorNavbar from '../Components/Component/VendorNavbar'
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
    const btn = {
        backgroundColor: '#0950D5',
        color: '#ffffff',
        // marginTop: '3vh',
        borderRadius: '3.5px',
        fontFamily: 'Poppins'
    }
    return (
        <>
            <VendorNavbar />
            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Grid container rowspacing={3} sx={{ width: '95%' }} columns={15}>
                    <Grid item xs={4} sx={{ marginTop: '3%', display: 'flex', alignItems: 'center', paddingRight: '5vw', justifyContent: 'center', fontWeight: '600', fontFamily: 'Poppins', color: '#454C59', fontSize: '24px' }}>Your Quotations: </Grid>
                    <Grid item xs={11} />
                </Grid>
                <Grid container spacing={5} mt={0.2} sx={{ width: '95%' }}>
                    <Grid item md={4}>
                        <Card sx={{ borderRadius: '7px' }}>
                            <Grid container p={2.5} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Grid item md={10} >
                                    <h3 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', textTransform: 'capitalize', color: '#454C59' }}>lorem epsum</h3>
                                    <h5 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', color: '#88898F' }}>19/12/2021</h5>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button style={btn}>Open</Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ borderRadius: '7px' }}>
                            <Grid container p={2.5} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Grid item md={10} >
                                    <h3 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', textTransform: 'capitalize', color: '#454C59' }}>lorem epsum</h3>
                                    <h5 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', color: '#88898F' }}>19/12/2021</h5>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button style={btn}>Open</Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ borderRadius: '7px' }}>
                            <Grid container p={2.5} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Grid item md={10} >
                                    <h3 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', textTransform: 'capitalize', color: '#454C59' }}>lorem epsum</h3>
                                    <h5 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', color: '#88898F' }}>19/12/2021</h5>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button style={btn}>Open</Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ borderRadius: '7px' }}>
                            <Grid container p={2.5} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Grid item md={10} >
                                    <h3 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', textTransform: 'capitalize', color: '#454C59' }}>lorem epsum</h3>
                                    <h5 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', color: '#88898F' }}>19/12/2021</h5>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button style={btn}>Open</Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card sx={{ borderRadius: '7px' }}>
                            <Grid container p={2.5} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Grid item md={10} >
                                    <h3 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', textTransform: 'capitalize', color: '#454C59' }}>lorem epsum</h3>
                                    <h5 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', color: '#88898F' }}>19/12/2021</h5>
                                </Grid>
                                <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Button style={btn}>Open</Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Dashboard
