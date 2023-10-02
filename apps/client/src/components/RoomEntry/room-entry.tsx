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
import { useQueryParams } from '../../common/hooks';
import { ANIMATION_TEMPLATE } from '../../common/constant';
import { RoomType, RoomEntryType } from './type';
import { RoomsType } from './constant';
import './style.scss';

export const RoomEntry: FC<RoomEntryType> = (props): JSX.Element => {
  const { type = 'create' } = props;
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
      if (type === 'roomName') {
        setRoomName(value);
      }
      if (type === 'userName') {
        setUserName(value);
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
    if (type === RoomsType.CREATE) {
      handleCreateRoom();
    } else if (type === RoomsType.JOIN) {
      navigate(`/room/?roomKey=${roomKey}&userName=${userName}`);
    }
  };

  const showRoomName = type === RoomsType.CREATE;
  console.log('type in room entry >>>>>>>', type, userName);
  return (
    <motion.div {...ANIMATION_TEMPLATE.PAGE_LANDING}>
      <Box className="roomEntryContainer">
        <h3>{`${type} a Room to Start Voting`}</h3>
        <Paper elevation={3} className="roomEntryFormContainer">
          <Box className="roomFormFields" mt={3}>
            {showRoomName && (
              <TextField
                className="inputField"
                margin="dense"
                variant="outlined"
                fullWidth
                required
                id="room-name"
                label="Room Name"
                placeholder="Give your room a name"
                value={roomName}
                onChange={handleChange('roomName')}
              />
            )}
            <TextField
              autoFocus={!showRoomName}
              margin="dense"
              variant="outlined"
              fullWidth
              required
              id="user-name"
              label="Your Name"
              placeholder="Type your name"
              value={userName}
              onChange={handleChange('userName')}
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
