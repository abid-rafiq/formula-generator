import { Box, Button, Divider, Drawer, FormControl, Grid, InputAdornment, InputLabel, List, ListItem, ListItemButton, ListItemText, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import logo from '../../assets/images/logo.png';
import MegaMenu from '../../assets/banners/mega-menu.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import { Search } from '@mui/icons-material';
import React, { useState } from 'react';

import './header.css';

function Header() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMegaMenu = () => {
    setMenuOpen(true)
  }
  
  const closeMegaMenu = () => {
    setMenuOpen(false)
  }

  const toggleDrawer =
    (open) =>
    (event) => {
      if ( event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift') ) {
        return;
      }

      setDrawerOpen(open);
    };

  return (
    <header className='ntt__header'>
      <div className='ntt__header-top'>
        <div className='container'>
          <div className='ntt__header-top-wrapper'>
            <div className='ntt__header-logo'>
              <img src={logo} alt='Logo' />
            </div>
            <div className='ntt__header-toggle'>
              <MenuIcon onClick={toggleDrawer(true)} />
            </div>
            <div className='ntt__header-searchbox'>
              <div className='ntt__header-search-input'>
                <FormControl size='small' variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Search...</InputLabel>
                  <OutlinedInput
                    type={'text'}
                    sx={{ paddingRight: 0 }}
                    endAdornment={
                      <InputAdornment position="end">
                        <FormControl size='small' variant="filled" sx={{ minWidth: 150 }}>
                          <Select
                          className='ntt__header-search-select'
                          defaultValue={""}
                          >
                            <MenuItem value="">
                              <em>Categories</em>
                            </MenuItem>
                            <MenuItem value={"10"}>Categories 1</MenuItem>
                            <MenuItem value={"20"}>Categories 2</MenuItem>
                            <MenuItem value={"30"}>Categories 3</MenuItem>
                          </Select>
                        </FormControl>
                      </InputAdornment>
                    }
                    label="Search..."
                  />
                </FormControl>
              </div>
              <div className='ntt__header-search-button'>
                <Button variant="contained" disableElevation color='primary' size="medium" sx={{ minWidth: 150 }}>
                  <Search />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ntt__header-bottom'>
        <div className='container' onMouseLeave={closeMegaMenu}>
          <ul className='ntt__header-bottom-links'>
            <li><a href='/' onMouseEnter={openMegaMenu} className='ntt__header-bottom-anchor'>Menu Item</a></li>
            <li><a href='/' className='ntt__header-bottom-anchor'>Menu Item</a></li>
            <li><a href='/' className='ntt__header-bottom-anchor'>Menu Item</a></li>
            <li><a href='/' className='ntt__header-bottom-anchor'>Menu Item</a></li>
            <li><a href='/' className='ntt__header-bottom-anchor'>Menu Item</a></li>
            <li><a href='/' className='ntt__header-bottom-anchor'>Menu Item</a></li>
            <li><a href='/' className='ntt__header-bottom-anchor'>Menu Item</a></li>
            <li><a href='/' className='ntt__header-bottom-anchor'>Menu Item</a></li>
            <li><a href='/' className='ntt__header-bottom-anchor'>Menu Item</a></li>
            <li><a href='/' className='ntt__header-bottom-anchor'>Menu Item</a></li>
            <li><a href='/' className='ntt__header-bottom-anchor'>Menu Item</a></li>
          </ul>

          <div className={`ntt__header-mega-menu ${isMenuOpen ? 'ntt__header-mega-menu--active' : ''}`} >
            <Grid container spacing={2}>  
              <Grid item md={2} >
                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 500, color: '#000' }} mb={1}>Header</Typography>
                <ul className='ntt__header-mega-menu-links'>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                </ul>
              </Grid>
              <Grid item md={2}>
                <Typography variant='body1' sx={{ fontSize: 14, fontWeight: 500, color: '#000' }} mb={1}>Header</Typography>
                <ul className='ntt__header-mega-menu-links'>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                  <li><a href='/' className='ntt__header-mega-menu-anchor'>Subheader</a></li>
                </ul>
              </Grid>
              <Grid item flexGrow={1} md={8}>
                <img src={MegaMenu} alt='Mega Menu' className='ntt__header-mega-menu-image' />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <Drawer
        anchor={"right"}
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 350 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Category 1', 'Category 2', 'Category 3', 'Category 4'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText
                   primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </header >
  );
}

export default Header;
