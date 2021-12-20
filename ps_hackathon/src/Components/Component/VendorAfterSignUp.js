import { Button, Grid, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import '../Css/VendorAfterSignUp.css'
import '../Css/CreateList.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

function VendorAfterSignUp() {
    const tableFields = {
        backgroundColor: '#F5F6F9', width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-start', paddingLeft: '10px', alignItems: 'center', borderRadius: '7px', fontFamily: 'Readex Pro, sans-serif', color: '#454C59'
    }
    const displayFlex = {
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '17px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const btn = {
        backgroundColor: '#0950D5',
        color: '#FFFFFF',
        width: '100%',
        fontFamily: 'poppins',
        fontWeight: '700',
        height: '56px'
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [items, setItems] = useState('')

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://bestdeal-site.herokuapp.com/req-doc/1/items/',
            headers: {
                'Authorization': 'Token 277a3f174c479e427e4db430edd51375ef4eabff',
            },
        };
        axios(config).then((response) => {
            console.log(response.data);
            const allTheItems = response.data;
            console.log(allTheItems);
            setItems(allTheItems);
        })
    }, []);


    const makeQuotation = (id, name) => {

    }

    return (
        <>
            <div className="container" style={{ width: '100%', marginTop: '3%' }}>
                <Grid container columnSpacing={2} sx={{ width: '90%', backgroundColor: 'white', padding: '1%' }} columns={17}>
                    <Grid item md={17} sx={{ fontFamily: 'Readex Pro, sans-serif', fontSize: '20px', fontWeight: '900', color: '#454C59' }} mb={4}>List of requirements</Grid>
                    <Grid item md={17} sx={{ width: '100%' }} >
                        {
                            items.map((item) => {
                                <Grid container columnSpacing={2} sx={{ backgroundColor: 'white', padding: '1%' }} columns={17}>
                                    <Grid item md={3} sx={displayFlex}>
                                        <p style={tableFields}>{item.name}</p>
                                    </Grid>
                                    <Grid item md={2} sx={displayFlex}>
                                        <p style={tableFields}>{item.quantity}</p>
                                    </Grid>
                                    <Grid item md={2} sx={displayFlex}>
                                        <p style={tableFields}>{item.units}</p>
                                    </Grid>
                                    <Grid item md={2} sx={displayFlex}>
                                        <p style={tableFields}>{item.max_budget}</p>
                                    </Grid>
                                    <Grid item md={3} sx={displayFlex}>
                                        <p style={tableFields}>{item.industry_category}</p>
                                    </Grid>
                                    <Grid item md={4} sx={displayFlex}>
                                        <p style={tableFields}>{item.description}</p>
                                    </Grid>
                                    <Grid item md={1} sx={displayFlex}>
                                        <Button onClick={() => { makeQuotation(item.id, item.name) }}>Create quotation</Button>
                                    </Grid>
                                </Grid>
                            })
                        }
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <Box sx={style}>
                                    <Grid container spacing={3} columns={18} sx={{ width: '100%' }} >
                                        <Grid item xs={9}><TextField sx={{ width: '100%' }} label='Item' variant='outlined' disabled></TextField></Grid>
                                        <Grid item xs={9}><TextField sx={{ width: '100%' }} label='Quantity' variant='outlined'></TextField></Grid>
                                        <Grid item xs={9}><TextField sx={{ width: '100%' }} label='Price ' variant='outlined'></TextField></Grid>
                                        <Grid item xs={9}><TextField sx={{ width: '100%' }} label='Delivery Date' variant='outlined'></TextField></Grid>
                                        <Grid item xs={18}><TextField multiline rows={4} sx={{ width: '100%', }} label='Message' variant='outlined'></TextField></Grid>
                                        <Grid item xs={18} sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}><Button onClick={handleClose} style={btn}>Create A Quotation</Button></Grid>
                                    </Grid>
                                </Box>
                            </Fade>
                        </Modal>



                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default VendorAfterSignUp
