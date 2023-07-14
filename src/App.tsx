import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import { Button, Typography, Modal, Box } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

  return (
      <div className="Bg">
        <header className='App-header'>
          <h1> Pokéguesser </h1>
          <div className='Top-bar'>
            <Button 
             startIcon={<InfoIcon />}
             onClick={handleOpen}
            >
              Info
            </Button>
          </div>
        </header>
        <Modal 
        open={open} 
        onClose={handleClose}
        >    
        <Box sx={style}>
          <Typography style={{"color": "white"}} variant="h6" component="h2">
            Pokeguesser
          </Typography>
          <Typography style={{"color": "white"}} variant="h6" component="h3">
            Try to guess the location displayed in-game.
          </Typography>
        </Box>
        </Modal>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
