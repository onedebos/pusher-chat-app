import {pusher} from '../index'

export default async function handler( req, res ) {
  // see https://pusher.com/docs/channels/server_api/authenticating-users
  const { socket_id, channel_name } = req.body;
  const {username} = req.query

  const randomString = Math.random().toString(36).slice(2);

  const presenceData = {
    user_id: randomString,
    user_info: {
      username: "@" + username,
    },
  };

  try {
    const auth = await pusher.authenticate(socket_id, channel_name, presenceData);
    res.send(auth);    
  } catch (error) {
      console.error(error)
  }
  
}

