import { useState, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import './style.scss';

export const CreateRoom = (): JSX.Element => {
  const [roomName, setRoomName] = useState('');

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    if (value) {
      setRoomName(value);
    }
  };
  return (
    <Box className="createRoomContainer">
      <h3>Create a Room to Start Voting</h3>
      <Paper elevation={3} className="createRoomFormContainer">
        <Box className="roomFormFields">
          <label>Room Name</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            // label="Room Name"
            fullWidth
            variant="outlined"
            placeholder="Give your room a name"
            value={roomName}
            onChange={handleNameChange}
            required
            autoComplete="false"
          />
          <label>Your Name</label>
          <TextField
            // autoFocus
            margin="dense"
            id="name"
            // label="Your Name"
            fullWidth
            variant="outlined"
            placeholder="Type your name"
            value={roomName}
            onChange={handleNameChange}
            required
            autoComplete='false'
          />
          <Button variant="contained" className="createRoom">Create Room</Button>
        </Box>
      </Paper>
    </Box>
  );
};
