import { Checkbox, Grid } from '@mui/material'
import React from 'react'
import '../Css/VendorAfterSignUp.css'
import '../Css/CreateList.css'

function VendorAfterSignUp() {
    const tableFields = {
        backgroundColor: '#F5F6F9', width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-start', paddingLeft: '10px', alignItems: 'center', borderRadius: '7px', fontFamily: 'Readex Pro, sans-serif', color: '#454C59'
    }
    const displayFlex = {
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    }

    return (
        <>
            <div className="container" style={{ width: '100%', marginTop: '3%' }}>
                <Grid container columnSpacing={2} sx={{ width: '80%', backgroundColor: 'white', padding: '1%' }} columns={17}>
                    <Grid item md={17} sx={{ fontFamily: 'Readex Pro, sans-serif', fontSize: '20px', fontWeight: '900', color: '#454C59' }} mb={4}>List of requirements</Grid>
                    <Grid item md={17} sx={{ width: '100%' }} >
                        <Grid container columnSpacing={2} sx={{ backgroundColor: 'white', padding: '1%' }} columns={17}>
                            <Grid item md={3} sx={displayFlex}>
                                <p style={tableFields}>hello</p>
                            </Grid>
                            <Grid item md={2} sx={displayFlex}>
                                <p style={tableFields}>hello</p>
                            </Grid>
                            <Grid item md={2} sx={displayFlex}>
                                <p style={tableFields}>hello</p>
                            </Grid>
                            <Grid item md={2} sx={displayFlex}>
                                <p style={tableFields}>hello</p>
                            </Grid>
                            <Grid item md={3} sx={displayFlex}>
                                <p style={tableFields}>hello</p>
                            </Grid>
                            <Grid item md={4} sx={displayFlex}>
                                <p style={tableFields}>hello</p>
                            </Grid>
                            <Grid item md={1} sx={displayFlex}>
                                <Checkbox />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default VendorAfterSignUp
