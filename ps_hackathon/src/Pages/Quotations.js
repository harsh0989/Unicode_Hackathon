import { Card, Grid, Checkbox } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Component/Navbar'
const Quotations = () => {
    const items = [
        { item: 'tyre', quantity: '100', price: '6000' },
        { item: 'motor', quantity: '25', price: '10000' }
    ]
    const gridstyling = {
        backgroundColor: '#F5F6F9',
        margin: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'poppins',
        fontWeight: '400',
        fontSize: '2vh',
        borderRadius: '7px',
        padding: '4%'
    }
    return (
        <>
            <Navbar />
            <Grid container>

                <Grid item xs={12} md={6} sx={{ backgroundColor: '#F5F6F9', minheight: '89.5vh' }}>
                    <div style={{ width: '100%',marginTop:'10%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Grid container rowSpacing={3} columns={20} sx={{ width: '80%', backgroundColor: 'white', padding: '2%', height: '100%' }}>
                            <Grid item xs={20} sx={{margin:'0',padding:'0'}} ><h3 style={{padding:'0',margin:'0'}}>Your List</h3></Grid>
                            <Grid item xs={6} sx={{ padding: '0px', width: '95%' }}>
                                <p style={gridstyling}>Hello</p>
                            </Grid>
                            <Grid item xs={1} sx={{ width: '80%' }}></Grid>
                            <Grid item xs={6} sx={{ padding: '0px', width: '95%' }} >
                                <p style={gridstyling}>78</p>
                            </Grid>
                            <Grid item xs={1} sx={{ width: '80%' }}></Grid>
                            <Grid item xs={6} >
                                <p style={gridstyling}>jshhbhbuhk</p>
                            </Grid>
                            <Grid item xs={6} sx={{ padding: '0px', width: '95%' }}>
                                <p style={gridstyling}>Hello</p>
                            </Grid>
                            <Grid item xs={1} sx={{ width: '80%' }}></Grid>
                            <Grid item xs={6} sx={{ padding: '0px', width: '95%' }} >
                                <p style={gridstyling}>78</p>
                            </Grid>
                            <Grid item xs={1} sx={{ width: '80%' }}></Grid>
                            <Grid item xs={6} >
                                <p style={gridstyling}>jshhbhbuhk</p>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} sx={{ backgroundColor: '#0950D5', minHeight: '89.5vh' }}>
                    <div className='scroll' style={{ position: 'relative', height: '89.5vh', overflowY: 'auto' }}>
                        <Grid container>
                            <Grid container>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={8} sx={{ marginTop: '6vh' }}>
                                    <Card style={{ padding: '4%' }}>
                                        <Grid container direction="columnS">
                                            <Grid item xs={12}>
                                                <p style={{ fontSize: '24px', marginTop: '0', marginBottom: '0', color: '#454C59', fontFamily: 'Poppins', fontWeight: '600', }}>
                                                    Vendor Name
                                                </p>
                                            </Grid>
                                            {
                                                items.map((itemInList) => {
                                                    return <>
                                                        <Grid container columnspacing={1} sx={{ display: 'flex' }}>
                                                            <Grid item xs={3} sx={{}} >
                                                                <p style={{ margin: '0px', color: '#454C59', fontWeight: '400', fontFamily: 'Poppins' }} className="listItems">{itemInList.item}</p>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }} >
                                                                <p style={{ margin: '0px', color: '#454C59', fontWeight: '400', fontFamily: 'Poppins' }} className="listItems">{itemInList.quantity}</p>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }} >
                                                                <p style={{ margin: '0px', color: '#454C59', fontWeight: '400', fontFamily: 'Poppins' }} className="listItems">{itemInList.price}</p>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ marginTop: '-2%', display: 'flex', justifyContent: 'center' }}>
                                                                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                                                            </Grid>
                                                        </Grid>
                                                    </>
                                                })
                                            }
                                            <Grid item >
                                                <h3 style={{ marginTop: '5px', marginBottom: '5px', color: '#454C59', fontWeight: '700', fontFamily: 'Poppins' }}>message:</h3>
                                                <h5 style={{ marginTop: '0', marginBottom: '5px', color: '#88898F', fontWeight: '400', fontFamily: 'Poppins' }}>lorem epsum kahsajd</h5>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={8} sx={{ marginTop: '6vh' }}>
                                    <Card style={{ padding: '4%' }}>
                                        <Grid container direction="columnS">
                                            <Grid item xs={12}>
                                                <p style={{ fontSize: '24px', marginTop: '0', marginBottom: '0', color: '#454C59', fontFamily: 'Poppins', fontWeight: '600', }}>
                                                    Vendor Name
                                                </p>
                                            </Grid>
                                            {
                                                items.map((itemInList) => {
                                                    return <>
                                                        <Grid container columnspacing={1} sx={{ display: 'flex' }}>
                                                            <Grid item xs={3} sx={{}} >
                                                                <p style={{ margin: '0px', color: '#454C59', fontWeight: '400', fontFamily: 'Poppins' }} className="listItems">{itemInList.item}</p>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }} >
                                                                <p style={{ margin: '0px', color: '#454C59', fontWeight: '400', fontFamily: 'Poppins' }} className="listItems">{itemInList.quantity}</p>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }} >
                                                                <p style={{ margin: '0px', color: '#454C59', fontWeight: '400', fontFamily: 'Poppins' }} className="listItems">{itemInList.price}</p>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ marginTop: '-2%', display: 'flex', justifyContent: 'center' }}>
                                                                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                                                            </Grid>
                                                        </Grid>
                                                    </>
                                                })
                                            }
                                            <Grid item >
                                                <h3 style={{ marginTop: '5px', marginBottom: '5px', color: '#454C59', fontWeight: '700', fontFamily: 'Poppins' }}>message:</h3>
                                                <h5 style={{ marginTop: '0', marginBottom: '5px', color: '#88898F', fontWeight: '400', fontFamily: 'Poppins' }}>lorem epsum kahsajd</h5>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={8} sx={{ marginTop: '6vh' }}>
                                    <Card style={{ padding: '4%' }}>
                                        <Grid container direction="columnS">
                                            <Grid item xs={12}>
                                                <p style={{ fontSize: '24px', marginTop: '0', marginBottom: '0', color: '#454C59', fontFamily: 'Poppins', fontWeight: '600', }}>
                                                    Vendor Name
                                                </p>
                                            </Grid>
                                            {
                                                items.map((itemInList) => {
                                                    return <>
                                                        <Grid container columnspacing={1} sx={{ display: 'flex' }}>
                                                            <Grid item xs={3} sx={{}} >
                                                                <p style={{ margin: '0px', color: '#454C59', fontWeight: '400', fontFamily: 'Poppins' }} className="listItems">{itemInList.item}</p>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }} >
                                                                <p style={{ margin: '0px', color: '#454C59', fontWeight: '400', fontFamily: 'Poppins' }} className="listItems">{itemInList.quantity}</p>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }} >
                                                                <p style={{ margin: '0px', color: '#454C59', fontWeight: '400', fontFamily: 'Poppins' }} className="listItems">{itemInList.price}</p>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ marginTop: '-2%', display: 'flex', justifyContent: 'center' }}>
                                                                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                                                            </Grid>
                                                        </Grid>
                                                    </>
                                                })
                                            }
                                            <Grid item >
                                                <h3 style={{ marginTop: '5px', marginBottom: '5px', color: '#454C59', fontWeight: '700', fontFamily: 'Poppins' }}>message:</h3>
                                                <h5 style={{ marginTop: '0', marginBottom: '5px', color: '#88898F', fontWeight: '400', fontFamily: 'Poppins' }}>lorem epsum kahsajd</h5>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={8} sx={{ marginTop: '6vh' }}>
                                    <Card style={{ padding: '4%' }}>
                                        <Grid container direction="columnS">
                                            <Grid item xs={12}>
                                                <p style={{ fontSize: '24px', marginTop: '0', marginBottom: '0', color: '#454C59', fontFamily: 'Poppins', fontWeight: '600', }}>
                                                    Vendor Name
                                                </p>
                                            </Grid>
                                            {
                                                items.map((itemInList) => {
                                                    return <>
                                                        <Grid container columnspacing={1} sx={{ display: 'flex' }}>
                                                            <Grid item xs={3} sx={{}} >
                                                                <p style={{ margin: '0px', color: '#454C59', fontWeight: '400', fontFamily: 'Poppins' }} className="listItems">{itemInList.item}</p>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }} >
                                                                <p style={{ margin: '0px', color: '#454C59', fontWeight: '400', fontFamily: 'Poppins' }} className="listItems">{itemInList.quantity}</p>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }} >
                                                                <p style={{ margin: '0px', color: '#454C59', fontWeight: '400', fontFamily: 'Poppins' }} className="listItems">{itemInList.price}</p>
                                                            </Grid>
                                                            <Grid item xs={3} sx={{ marginTop: '-2%', }}>
                                                                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                                                            </Grid>
                                                        </Grid>
                                                    </>
                                                })
                                            }
                                            <Grid item >
                                                <h3 style={{ marginTop: '5px', marginBottom: '5px', color: '#454C59', fontWeight: '700', fontFamily: 'Poppins' }}>message:</h3>
                                                <h5 style={{ marginTop: '0', marginBottom: '5px', color: '#88898F', fontWeight: '400', fontFamily: 'Poppins' }}>lorem epsum kahsajd</h5>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>


                        </Grid>
                    </div>
                </Grid>

            </Grid>
        </>
    )
}
export default Quotations