import pusher from './index'

export default function authUser({req, res}){
    // https://pusher.com/docs/channels/server_api/authenticating-users
    const socketId = req.body.socket_id;
    const channel = 'presence-chat';
    const presenceData = {
        user_id: "unique_user_id",
        user_info: {
          name: "Mr Channels",
          twitter_id: "@pusher"
        }
      };

      
    const auth = pusher.authenticate(socketId, channel, presenceData);
    res.send(auth);
}
