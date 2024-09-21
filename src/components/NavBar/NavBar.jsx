import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Button, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, Menu, MenuItem, Toolbar, Collapse, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from '/logo.svg';

const drawerWidth = 240;

const NavBar = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mathsOpen, setMathsOpen] = useState(false);
  const [englishOpen, setEnglishOpen] = useState(false);
  const [hindiOpen, setHindiOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)'); 
  const isDesktop = useMediaQuery('(min-width:600px)');
  const navItems = ['Home', 'About','International-Students', 'Courses', 'Contact'];

  useEffect(() => {
    if (isMobile) {
      setMobileCoursesOpen(true);
    } else {
      setMobileCoursesOpen(false);
    }
  }, [isMobile]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileCoursesToggle = () => {
    setMobileCoursesOpen(!mobileCoursesOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileCoursesOpen(false);
    setMobileOpen(false);
  };

  const handleMathsToggle = () => {
    setMathsOpen(!mathsOpen);
  };

  const handleEnglishToggle = () => {
    setEnglishOpen(!englishOpen);
  };

  const handleHindiToggle = () => {
    setHindiOpen(!hindiOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <a href="/"><Box component="img" src={Logo} alt="Logo" sx={{ height: 40, my: 2 }} /></a>
      <List>
        {navItems.map((item) => (
          item === 'Courses' ? (
            <React.Fragment key={item}>
              <ListItemButton onClick={handleMobileCoursesToggle} sx={{ textAlign: 'center' }}>
                {item} <ExpandMoreIcon />
              </ListItemButton>
              <Collapse in={mobileCoursesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton component={NavLink} to="/courses" sx={{ pl: isMobile ? 4 : 2 }}>
                    All Courses
                  </ListItemButton>
                  <ListItemButton onClick={handleMathsToggle} sx={{ pl: isMobile ? 4 : 2 }}>
                    Maths <ExpandMoreIcon />
                  </ListItemButton>
                  <Collapse in={mathsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton component={NavLink} to="/courses/maths/all" sx={{ pl: isMobile ? 8 : 4 }}>
                        All Maths
                      </ListItemButton>
                      <ListItemButton component={NavLink} to="/courses/maths/math1" sx={{ pl: isMobile ? 8 : 4 }}>
                        Math 1
                      </ListItemButton>
                      <ListItemButton component={NavLink} to="/courses/maths/math2" sx={{ pl: isMobile ? 8 : 4 }}>
                        Math 2
                      </ListItemButton>
                      <ListItemButton component={NavLink} to="/courses/maths/math3" sx={{ pl: isMobile ? 8 : 4 }}>
                        Math 3
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton onClick={handleEnglishToggle} sx={{ pl: isMobile ? 4 : 2 }}>
                    English <ExpandMoreIcon />
                  </ListItemButton>
                  <Collapse in={englishOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton component={NavLink} to="/courses/english/all" sx={{ pl: isMobile ? 8 : 4 }}>
                        All English
                      </ListItemButton>
                      <ListItemButton component={NavLink} to="/courses/english/n1" sx={{ pl: isMobile ? 8 : 4 }}>
                        N1
                      </ListItemButton>
                      <ListItemButton component={NavLink} to="/courses/english/n2" sx={{ pl: isMobile ? 8 : 4 }}>
                        N2
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton onClick={handleHindiToggle} sx={{ pl: isMobile ? 4 : 2 }}>
                    Hindi <ExpandMoreIcon />
                  </ListItemButton>
                  <Collapse in={hindiOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton component={NavLink} to="/courses/hindi/all" sx={{ pl: isMobile ? 8 : 4 }}>
                        All Hindi
                      </ListItemButton>
                      <ListItemButton component={NavLink} to="/courses/hindi/h1" sx={{ pl: isMobile ? 8 : 4 }}>
                        H1
                      </ListItemButton>
                      <ListItemButton component={NavLink} to="/courses/hindi/h2" sx={{ pl: isMobile ? 8 : 4 }}>
                        H2
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItem key={item} disablePadding>
              <ListItemButton component={NavLink} to={`/${item.toLowerCase()}`} sx={{ textAlign: 'center' }} onClick={handleDrawerToggle}>
                {item}
              </ListItemButton>
            </ListItem>
          )
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'primary.main' }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <a href="/"><Box component="img" src={Logo} alt="Logo" sx={{ height: 40 }} /></a>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }, justifyContent: 'center' }}>
            <Box component="img" src={Logo} alt="Logo" sx={{ height: 40 }} />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 'auto' }}>
            {navItems.map((item) => (
              item === 'Courses' ? (
                <React.Fragment key={item}>
                  <Button
                    aria-controls="courses-menu"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                    sx={{ color: '#000000' }}
                    endIcon={<ExpandMoreIcon />}
                  >
                    {item}
                  </Button>
                  <Menu
                    id="courses-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{ pl: isDesktop ? 2 : 0 }}
                  >
                    <MenuItem component={NavLink} to="/courses" onClick={handleMenuClose}>
                      All Courses
                    </MenuItem>
                    <MenuItem onClick={handleMathsToggle}>
                      Maths <ExpandMoreIcon />
                    </MenuItem>
                    <Collapse in={mathsOpen} timeout="auto" unmountOnExit>
                      <MenuItem component={NavLink} to="/courses/maths/all" onClick={handleMenuClose} sx={{pl: 4}}>All Maths</MenuItem>
                      <MenuItem component={NavLink} to="/courses/maths/math1" onClick={handleMenuClose} sx={{pl: 4}}>Math 1</MenuItem>
                      <MenuItem component={NavLink} to="/courses/maths/math2" onClick={handleMenuClose} sx={{pl: 4}}>Math 2</MenuItem>
                      <MenuItem component={NavLink} to="/courses/maths/math3" onClick={handleMenuClose} sx={{pl: 4}}>Math 3</MenuItem>
                    </Collapse>
                    <MenuItem onClick={handleEnglishToggle}>
                      English <ExpandMoreIcon />
                    </MenuItem>
                    <Collapse in={englishOpen} timeout="auto" unmountOnExit>
                      <MenuItem component={NavLink} to="/courses/english/all" onClick={handleMenuClose} sx={{pl: 4}}>All English</MenuItem>
                      <MenuItem component={NavLink} to="/courses/english/n1" onClick={handleMenuClose} sx={{pl: 4}}>N1</MenuItem>
                      <MenuItem component={NavLink} to="/courses/english/n2" onClick={handleMenuClose} sx={{pl: 4}}>N2</MenuItem>
                    </Collapse>
                    <MenuItem onClick={handleHindiToggle}>
                      Hindi <ExpandMoreIcon />
                    </MenuItem>
                    <Collapse in={hindiOpen} timeout="auto" unmountOnExit>
                      <MenuItem component={NavLink} to="/courses/hindi/all" onClick={handleMenuClose} sx={{pl: 4}}>All Hindi</MenuItem>
                      <MenuItem component={NavLink} to="/courses/hindi/h1" onClick={handleMenuClose} sx={{pl: 4}}>H1</MenuItem>
                      <MenuItem component={NavLink} to="/courses/hindi/h2" onClick={handleMenuClose} sx={{pl: 4}}>H2</MenuItem>
                    </Collapse>
                  </Menu>
                </React.Fragment>
              ) : (
                <Button key={item} component={NavLink} to={`/${item.toLowerCase()}`} sx={{ color: '#000000' }}>
                  {item}
                </Button>
              )
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
    
  );
};

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
