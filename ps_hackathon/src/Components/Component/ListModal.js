import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Grid, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '10%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '17px'
};

export default function ListModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
            <Grid container sx={{ width: '100%' }} columns={18} >
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
    </div>
  );
}