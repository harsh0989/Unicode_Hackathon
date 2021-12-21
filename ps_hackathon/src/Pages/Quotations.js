import { Card, Grid, Checkbox } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Components/Component/Navbar'
import { width } from '@mui/system'


const Quotations = (id) => {
    // const [id, setID] = useState()
    const [items, setItems] = useState([])
    const gridstyling = {
        backgroundColor: '#F5F6F9',
        margin: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'poppins',
        fontWeight: '400',
        fontSize: '100%',
        borderRadius: '7px',
        padding: '4%',
        width: '90%',
        height: '45px'
    }

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://bestdeal-site.herokuapp.com/req-doc/5/items/',
            headers: {
                'Authorization': 'Token a85ec244b5d37f9c4a00bb359674384870608dee',
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
            <Navbar />
            <Grid container>
                <Grid item xs={12} md={6} sx={{ backgroundColor: '#F5F6F9', minheight: '89.5vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <h3 style={{ width: '80%', }}></h3>
                    <h6 style={{ width: '80%' }}></h6>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Grid container columns={12} sx={{ width: '80%', backgroundColor: 'white', padding: '2%', height: '100%' }}>
                            <Grid item xs={4} >
                                <p style={gridstyling}>Item Name</p>
                            </Grid>
                            <Grid item xs={4}  >
                                <p style={gridstyling}>Quantity</p>
                            </Grid>
                            <Grid item xs={4} >
                                <p style={gridstyling}>Category</p>
                            </Grid>

                        </Grid>
                        {items.map((item) => {
                            return (<Grid container columns={12} sx={{ width: '80%', backgroundColor: 'white', padding: '2%', height: '100%' }}>
                                <Grid item xs={4} >
                                    <p style={gridstyling}>{item.name}</p>
                                </Grid>
                                <Grid item xs={4}  >
                                    <p style={gridstyling}>{item.quantity}</p>
                                </Grid>
                                <Grid item xs={4} >
                                    <p style={gridstyling}>{item.industry_category}</p>
                                </Grid>
                            </Grid>)
                        })}
                    </div>

                </Grid>

                <Grid item xs={12} md={6} sx={{ backgroundColor: '#0950D5', minHeight: '89.5vh' }}>
                    <div className='scroll' style={{ position: 'relative', height: '100vh', overflowY: 'auto' }}>
                        <Grid container>
                            <Grid container>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={8} sx={{ marginTop: '6vh' }}>
                                    <Card style={{ padding: '4%' }}>
                                        <Grid container direction="columnS">
                                            <Grid item xs={12}>
                                                <p style={{ fontSize: '24px', marginTop: '0', marginBottom: '0', color: '#454C59', fontFamily: 'Poppins', fontWeight: '600', }}>
                                                    Item Name
                                                </p>
                                            </Grid>
                                            {/* {
                                                items.map((itemInList) => {
                                                    return <> */}
                                            <Grid container sx={{ backgroundColor: '#f5f6f9', padding: '0% 5%' }}>
                                                <Grid item md={10} sx={{ margin: '0px', display: 'flex', alignItems: 'center', width: '100%' }}>
                                                    <h4 >Vendor Name</h4>
                                                </Grid> <Grid item md={2} sx={{ margin: '0px', display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'flex-end' }}>
                                                    <Checkbox />
                                                </Grid>
                                                <Grid item md={12}>
                                                    <Grid container>
                                                        <Grid item md={3}>
                                                            <p>Quantity</p>
                                                        </Grid>
                                                        <Grid item md={3}>
                                                            <p>Units</p>
                                                        </Grid>
                                                        <Grid item md={3}>
                                                            <p>delivery date</p>
                                                        </Grid>
                                                        <Grid item md={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                            <p>price</p>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            {/* </> */}
                                            {/* })
                                            } */}

                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>


                        </Grid>
                    </div>
                </Grid>

            </Grid>
        </>
    )
}
export default Quotations