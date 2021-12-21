import React, { useState, useEffect } from 'react';
import { Button, Card, Grid, TextField } from '@mui/material';
import VendorNavbar from '../Components/Component/VendorNavbar'
import { useNavigate, Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';


const Dashboard = () => {
    const [items, setItems] = useState([])
    const btn = {
        backgroundColor: '#0950D5',
        color: '#ffffff',
        // marginTop: '3vh',
        borderRadius: '3.5px',
        fontFamily: 'Poppins'
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
        borderRadius: '17px'
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const getList = () => {
        let token = localStorage.getItem('ClientToken')
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'bestdeal-site.herokuapp.com/quote/',
            headers: {
                'Authorization': `Token ${token}`,
            }
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);

                setItems(response.data)
                console.log(items)

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        getList();
    }, [])


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
                            {
                                items.map((item) => {
                                    return <Grid container p={2.5} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                        <Grid item md={10} >
                                            <h3 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', textTransform: 'capitalize', color: '#454C59' }}>{item.name}</h3>
                                            <h5 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', color: '#88898F' }}>{item.created_at}</h5>
                                        </Grid>
                                        <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Button style={btn}>Open</Button>
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
                                                        <Grid container sx={{ width: '100%' }} spacing={2} columns={18} >
                                                            <Grid item xs={9}><TextField sx={{ width: '100%' }} label='Item' variant='outlined' disabled></TextField></Grid>
                                                            <Grid item xs={9}><TextField sx={{ width: '100%' }} label='Quantity' variant='outlined'></TextField></Grid>
                                                            <Grid item xs={9}><TextField sx={{ width: '100%' }} label='Price ' variant='outlined'></TextField></Grid>
                                                            <Grid item xs={9}><TextField sx={{ width: '100%' }} label='Delivery Date' variant='outlined'></TextField></Grid>
                                                            <Grid item xs={18}><TextField multiline rows={4} sx={{ width: '100%', }} label='Message' variant='outlined'></TextField></Grid>
                                                            <Grid item xs={18}><Button>Create A Quotation</Button></Grid>
                                                        </Grid>
                                                    </Box>
                                                </Fade>
                                            </Modal>
                                        </Grid>
                                    </Grid>
                                })
                            }
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Dashboard
