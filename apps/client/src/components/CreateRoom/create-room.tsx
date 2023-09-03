import { useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setPlanningStart } from '../../store/reducers/planningSlice';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import RoomService from '../../services/room';
import { useSocketConnection } from '../../common/hooks';
import './style.scss';

type RoomType = 'roomName' | 'userName';

export const CreateRoom = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { socketInstance } = useSocketConnection();
  const [roomName, setRoomName] = useState('');
  const [userName, setUserName] = useState('');

  const handleChange =
    (type: RoomType = 'roomName') =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = event;
      if (value) {
        if (type === 'roomName') {
          setRoomName(value);
        }
        if (type === 'userName') {
          setUserName(value);
        }
      }
    };

  const handleCreateRoom = async () => {
    const options = {
      body: {
        roomName,
        userName,
      },
      method: 'POST',
    };
    if (roomName && userName) {
      try {
        const createdRoomResult = await RoomService.createRoom(options);
        const { roomKey } = createdRoomResult;
        socketInstance?.connect();
        dispatch(setPlanningStart(true));
        navigate(`/room/?roomKey=${roomKey}`);
      } catch (e) {
        //
      }
    }
  };

  return (
    <Box className="createRoomContainer">
      <h3>Create a Room to Start Voting</h3>
      <Paper elevation={3} className="createRoomFormContainer">
        <Box className="roomFormFields" mt={3}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room Name"
            fullWidth
            variant="outlined"
            placeholder="Give your room a name"
            value={roomName}
            onChange={handleChange('roomName')}
            required
            autoComplete="false"
          />
          <TextField
            margin="dense"
            id="name"
            label="Your Name"
            fullWidth
            variant="outlined"
            placeholder="Type your name"
            value={userName}
            onChange={handleChange('userName')}
            required
            autoComplete="false"
          />
          <Button
            variant="contained"
            className="createRoomButton"
            onClick={handleCreateRoom}
          >
            Create Room
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
