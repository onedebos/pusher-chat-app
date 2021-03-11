import {pusher} from '../../../lib/pusher'

// public channel handler
export default async function handler(req, res) {
  const { message, sender } = req.body;
  await pusher.trigger("chat", "chat-event", {
    message,
    sender,
  });

  res.json({ message: "completed" });
}
