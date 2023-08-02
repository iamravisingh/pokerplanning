export type CreateRoomRequestBuilder = {
    roomId: string;
    userToken: string;
}

export type CreateRoomResponse = {
    roomName: string;
    userName: string
}