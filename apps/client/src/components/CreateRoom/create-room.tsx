import { useState, ChangeEvent } from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import './style.scss';

export const CreateRoom = (): JSX.Element => {
  const [ roomName, setRoomName ] = useState("")

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    if(value){
      setRoomName(value)
    }
  }
  return (
    <Container className="createRoomContainer">
      <Box>
        <h3>Create a Room to Start Voting</h3>
      </Box>
      <Paper elevation={3}>
        <Box p={5} className="createRoomModal">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room Name"
            fullWidth
            variant="standard"
            placeholder="Give your room a name"
            value={roomName}
            onChange={handleNameChange}
          />
          <Box>
            <Button variant="contained">Create Room</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};
