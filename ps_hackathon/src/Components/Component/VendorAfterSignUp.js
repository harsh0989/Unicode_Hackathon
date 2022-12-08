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
    const [open, setOpen] = useState(false);
    const [id, setId] = useState()
    const [units, setUnits] = useState()
    const [name, setName] = useState('')
    const handleOpen = (id, name) => {
        console.log(id, name);
        setId(id)
        setName(name)
        setUnits(units)
        setOpen(true);
    }
    const [items, setItems] = useState([])

    const [modalDetails, setModalDetails] = useState({ item: '', quantity: '', units: '', price: '', delivery_by: '', message: '', id: '' })
    const [modal, setModal] = useState({ quantity: '', price: '', delivery_by: '', message: '' })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setModal({ ...modal, [name]: value })
    }

    const handleClose = () => {
        let token = localStorage.getItem('ClientToken')
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('price', modal.price);
        data.append('item', id);
        data.append('delivery_by', modal.delivery_by);
        data.append('quantity_provided', modal.quantity);
        data.append('units', units);
        console.log(data);

        var config = {
            method: 'post',
            url: 'https://vismay9.pythonanywhere.com/quote/',
            headers: {
                'Authorization': `Token ${token}`,
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            });
        setOpen(false)
    };
    useEffect(() => {
        let token = localStorage.getItem('Token')
        console.log(token);
        var config = {
            method: 'get',
            url: 'https://vismay9.pythonanywhere.com/req-doc/5/items/',
            headers: {
                'Authorization': `Token 2a299869bb56a0ee59588238db2ff468b21948bb`,
            },
        };
        axios(config).then((response) => {
            console.log(response.data);
            const allTheItems = response.data;
            console.log(allTheItems);
            setItems(allTheItems);
        })
    }, []);
    console.log(items)
    return (
        <>
            <div className="container" style={{ width: '100%', marginTop: '3%' }}>
                <Grid container columnSpacing={2} sx={{ width: '90%', backgroundColor: 'white', padding: '1%' }} columns={17}>
                    <Grid item md={17} sx={{ fontFamily: 'Readex Pro, sans-serif', fontSize: '20px', fontWeight: '900', color: '#454C59' }} mb={4}>List of requirements</Grid>
                    <Grid item md={17} sx={{ width: '100%' }} >
                        {
                            items.map((item) => {
                                return <Grid container columnSpacing={2} sx={{ backgroundColor: 'white', padding: '1%' }} columns={17}>
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
                                        <Button onClick={() => handleOpen(item.id, item.name, item.units)}>Create quotation</Button>
                                    </Grid>
                                </Grid>
                            })
                        }

                        <Modal

                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onChange={handleChange}
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
                                        <Grid item xs={9}><TextField sx={{ width: '100%' }} value={name} variant='outlined' disabled></TextField></Grid>
                                        <Grid item xs={9}><TextField sx={{ width: '100%' }} label='Quantity' name='quantity' value={modal.quantity} onChange={() => handleChange()} ></TextField></Grid>
                                        <Grid item xs={9}><TextField sx={{ width: '100%' }} label='Price' name='price' value={modal.price} onChange={() => handleChange()} ></TextField></Grid>
                                        <Grid item xs={9}><TextField sx={{ width: '100%' }} label='Delivery Date' name='delivery_by' value={modal.delivery_by} onChange={() => handleChange()} ></TextField></Grid>
                                        <Grid item xs={18}><TextField multiline rows={4} sx={{ width: '100%', }} name='message' label='Message' value={modal.message} onChange={handleChange} ></TextField></Grid>
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
