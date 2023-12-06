import { useState, SyntheticEvent } from 'react';
//mui components
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

//mui icons
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { DialogStyles } from './constant';
import './style.scss';

export const InvitePlayersButton = () => {
  const [openDialog, setDialogOpen] = useState(false);
  const appURL = window.location.href;
  const [notify, setNotify] = useState(false);
  const handleClick = () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };
  const handleCopy = async () => {
    try {
      // Copy text to clipboard
      await navigator.clipboard.writeText(appURL);
      handleClose();
      setNotify(true);
    } catch (error) {
      console.error("Error copying text: ", error);
    }
  };

  const handleToastClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotify(false);
  };

  return (
    <Box className="invitePlayerWrapper">
      <Button
        variant="contained"
        onClick={handleClick}
        className="inviteButton"
      >
        <Box className="inviteButtonContent">
          <GroupAddIcon /> <Typography>Invite Player</Typography>
        </Box>
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        className="invitePlayerDialog"
        fullWidth
        PaperProps={DialogStyles.dialog}
      >
        <DialogTitle sx={DialogStyles.dialogTitle}>
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon
              sx={{
                color: '#fff',
              }}
            />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={DialogStyles.dialogContent}>
          <Box
            className="invitePlayersContent"
            sx={DialogStyles.dialogContentChildren.container}
          >
            <Typography>Invite Your Team</Typography>
            <TextField
              variant="outlined"
              fullWidth
              value={appURL}
              inputProps={DialogStyles.dialogContentChildren.textField}
            />
            <Button
              variant="contained"
              className="copyButton"
              onClick={handleCopy}
              fullWidth
              sx={DialogStyles.dialogContentChildren.buttonStyles}
            >
              Copy Invitation Link
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={notify}
        autoHideDuration={1000}
        onClose={handleToastClose}
      >
        <Alert severity="success" elevation={6} variant="filled">
          <Typography>Room link copied to clipboard</Typography>
        </Alert>
      </Snackbar>
    </Box>
  );
};
