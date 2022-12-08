import { React, useState, useEffect } from 'react'
// import axios from 'axios'
import { Button, Card, Grid } from '@mui/material';
import Navbar from '../Components/Component/Navbar'
import { useNavigate, Link, useHistory } from 'react-router-dom';

const Homepage = () => {
    let history = useHistory();
    const btn = {
        backgroundColor: '#0950D5',
        color: '#ffffff',
        // marginTop: '3vh',
        borderRadius: '3.5px',
        fontFamily: 'Poppins'

    }
    let [items, setItems] = useState([]);
    const getList = () => {
        let token = localStorage.getItem('Token')
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://vismay9.pythonanywhere.com/req-doc/',
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
    const openListItem = (id) => {
        console.log(id)
        history.push({ pathname: '/quotations', state: { id: id } })
    }
    return (
        <>
            <Navbar />

            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Grid container rowspacing={3} sx={{ width: '95%' }} columns={15}>
                    <Grid item xs={4} sx={{ marginTop: '3%', display: 'flex', alignItems: 'center', paddingRight: '5vw', justifyContent: 'center', fontWeight: '600', fontFamily: 'Poppins', color: '#454C59', fontSize: '24px' }}>Your requirements: </Grid>
                    <Grid item xs={9} />
                    <Grid item xs={2} sx={{ marginTop: '3%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link to='/createList' style={{ textDecoration: 'none' }}>
                            <Button style={{ backgroundColor: '#0950D5', color: '#FFFFFF', borderRadius: '4', fontWeight: '700', fontFamily: 'Poppins' }}>Create a new list</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container spacing={5} mt={0.2} sx={{ width: '95%' }}>
                    {
                        items.map((item) => {
                            return (

                                <Grid item md={4} key={item.id}>
                                    <Card sx={{ borderRadius: '7px' }}>
                                        <Grid container p={2.5} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <Grid item md={10} >
                                                <h3 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', textTransform: 'capitalize', color: '#454C59' }}>{item.name}</h3>
                                                <h5 style={{ margin: '0', fontFamily: 'Poppins', fontWeight: '400', color: '#88898F' }}>{item.created_at}</h5>
                                            </Grid>
                                            <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Link to={{
                                                    pathname: '/quotations',
                                                    state: { id: item.id }
                                                }} >
                                                    <Button style={btn} >Open</Button>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Grid>

                            )
                        })

                    }
                </Grid>
            </div>
        </>
    )
}

export default Homepage