import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home'; // Importing Home Icon
import ImageIcon from '@mui/icons-material/Image'; // Importing Image Icon

const View = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#4CAF50', width: '100vw' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FORENSIC
          </Typography>
          
          {/* Home Button with Icon */}
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit" startIcon={<HomeIcon />}>
              
            </Button>
          </Link>

          {/* Image Button with Icon */}
          <Link to={'/add'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit" startIcon={<ImageIcon />}>
              
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default View;
