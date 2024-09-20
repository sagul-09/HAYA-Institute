import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "purple", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are committed to providing quality education that empowers individuals to achieve their full potential. Join us to embark on a journey of knowledge and growth.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="none" display="block">
              Home
            </Link>
            <Link href="/course" color="inherit" underline="none" display="block">
              Courses
            </Link>
            <Link href="/about" color="inherit" underline="none" display="block">
              About
            </Link>
            <Link href="/contact" color="inherit" underline="none" display="block">
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: info@institute.com</Typography>
            <Typography variant="body2">Phone: +123 456 7890</Typography>
            <Typography variant="body2">Address: 123 Education St, Knowledge City</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="https://facebook.com" target="_blank" color="inherit">
                <FaFacebookF />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <FaTwitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <FaInstagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" color="inherit">
                <FaLinkedinIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} HAYA. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;