import FetchUtil, { FetchOptions } from './fetch-utils';
import { SERVER_URL } from '../config';

export type RoomDetails = {
  [key: string]: {
    roomKey: typeof key;
    roomName: string;
    userName: string;
  };
};

export type CreateRoomResponseData = {
  status: number;
  roomKey: string;
  roomName: string;
  userName: string;
};

export type GetRoomResponseData = {
  status: number;
  roomsDetails: RoomDetails;
};

export type GetRoomByIdResponseData = {
  status: number;
  roomsDetails: RoomDetails;
};

class RoomService {
  static BaseUrl = SERVER_URL;

  static getRooms(): Promise<GetRoomResponseData> {
    const URL = `${SERVER_URL}/rooms`;
    return FetchUtil.call(URL, { method: 'GET' });
  }
  static createRoom(options: FetchOptions): Promise<CreateRoomResponseData> {
    const URL = `${SERVER_URL}/room`;
    const { method, body } = options;
    return FetchUtil.call(URL, { method, body });
  }
  static getRoomById(key: string): Promise<GetRoomByIdResponseData> {
    const URL = `${SERVER_URL}/room?roomKey=${key}`;
    return FetchUtil.call(URL, { method: 'GET' });
  }
}

export default RoomService;
