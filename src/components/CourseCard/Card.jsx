import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import './Card.css'; // Import the CSS file

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const MultiActionAreaCardWithDialog = ({ title, description, image, detailedDescription, feeStructure }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        className="card-root"
        sx={{
          '&:hover': {
            backgroundColor: '#F2F0EF', // Ensure background color remains white on hover
          }, backgroundColor: '#',borderRadius: '12px' // Set the background color to white
        }}
      >
        <CardActionArea onClick={handleClickOpen}>

             {image ? (
          <CardMedia
            component="img"
            className="card-media"
            image={image}
            alt={title}
          />
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            Image not available
          </Typography>
        )}
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button
          size="small"
          color="purple"
          onClick={handleClickOpen}
          className="card-button"
          sx={{ color: 'white', backgroundColor: 'rgb(74, 0, 88)', fontSize: '0.875rem' }}
        >
          Learn More
        </Button>
      </Card>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          {title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {detailedDescription}
          </Typography>
          <Typography gutterBottom>
            <h3>Fee Structure: {feeStructure}</h3>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default MultiActionAreaCardWithDialog;