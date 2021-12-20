import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../Images/Logo.png'
import { useHistory } from 'react-router-dom';


export default function ButtonAppBar() {
    let history = useHistory();
    const openList=()=>{
        history.push(`/clienthomepage`)
    }
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'white' }}>
            <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" padding={1} component="div" sx={{ flexGrow: 1 }}>
                        <img src={Logo} alt="Best Deal" width='180px' height='55px' />
                    </Typography>
                    <Button color="inherit" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#454C59', fontSize: '18px' }} onClick={openList}>Lists</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
