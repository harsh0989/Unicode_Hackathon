import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../Images/Logo.png'


export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'white' }}>
            <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" padding={1} component="div" sx={{ flexGrow: 1 }}>
                        <img src={Logo} alt="Best Deal" width='180px' height='55px' />
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
