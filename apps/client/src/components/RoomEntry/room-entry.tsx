import { useState, ChangeEvent, FC } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '../../store/hooks';
import { setPlanningStart } from '../../store/reducers/planningSlice';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import RoomService from '../../services/room';
import { ANIMATION_TEMPLATE } from '../../common/constant';
import { RoomType, RoomEntryType } from './type';
import { RoomsType } from './constant';
import './style.scss';
import { useSocketConnection, useQueryParams } from '../../common/hooks';

export const RoomEntry: FC<RoomEntryType> = (props): JSX.Element => {
  const { type = 'create' } = props;
  const socket = useSocketConnection();
  const navigate = useNavigate();
  const { roomKey } = useQueryParams();
  const dispatch = useAppDispatch();
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
        const { roomKey: createdRoomKey } = createdRoomResult;
        dispatch(setPlanningStart(true));
        navigate(`/room/?roomKey=${createdRoomKey}`);
      } catch (e) {
        //
      }
    }
  };

  const handleRoomEntry = () => {
    //TODO: we should have a one instance of socket which
    socket.connect();
    if (type === RoomsType.CREATE) {
      handleCreateRoom();
    } else if (type === RoomsType.JOIN) {
      if (socket) {
        socket?.emit('join', roomKey, userName);
        navigate(`/room/?roomKey=${roomKey}`);
      }
    }
  };

  const showRoomName = type === RoomsType.CREATE;
  console.log('type in room entry >>>>>>>', type);
  return (
    <motion.div {...ANIMATION_TEMPLATE.PAGE_LANDING}>
      <Box className="roomEntryContainer">
        <h3>{`${type} a Room to Start Voting`}</h3>
        <Paper elevation={3} className="roomEntryFormContainer">
          <Box className="roomFormFields" mt={3}>
            {showRoomName && (
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
              />
            )}
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
            />
            <Button
              variant="contained"
              className={`roomEntryButton ${type}`}
              onClick={handleRoomEntry}
            >
              {`${type} Room`}
            </Button>
          </Box>
        </Paper>
      </Box>
    </motion.div>
  );
};
