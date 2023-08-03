export type CreateRoomRequestBuilder = {
    roomName: string;
    userName: string;
}

export type CreateRoomResponse = {
    status: number;
    roomName: string;
    userName: string;
    roomKey: string;
}

export type RoomDetails = {
    status: number;
    roomDetails: {
        roomKey: string;
        roomName: string;
        userName: string;
    }
}