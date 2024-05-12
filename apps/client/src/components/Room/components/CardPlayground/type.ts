import { SocketInstanceType } from '../../../../common/hooks';

export type CardDeskProps = {
  socket: SocketInstanceType;
  roomKey: string;
  socketConnected: boolean;
  currentUser: string;
};
