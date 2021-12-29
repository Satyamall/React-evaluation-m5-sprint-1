import {Link} from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{display: "flex",gap: "2rem"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Home</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/orders/:id">Orders</Link>
          </Typography>
          <Link to="/showCart"><img style={{width: "40px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCYOcz2do9rQylt8XnMawcSwL1a-qaEfXxQ&usqp=CAU" alt=""/></Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
