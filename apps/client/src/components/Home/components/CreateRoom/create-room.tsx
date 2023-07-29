import { FC } from "react"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

type CreateRoomType = {
    setRoomModal: (open: boolean) => void
} & Parameters<typeof Dialog>[0]

export const CreateRoom: FC<CreateRoomType> = (props) => {
  const { open, setRoomModal } = props;

  const handleOnClose = () => {
    setRoomModal(false)
  }

  return (
    <Dialog open={open} onClose={handleOnClose}>
      <DialogTitle>Create Room</DialogTitle>  
      <DialogContent>
        <Box className="createRoomModal">
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room Name"
            fullWidth
            variant="standard"
            placeholder="Give your room a name"
          />
          <DialogActions>
            <Button variant="contained">Create Room</Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
