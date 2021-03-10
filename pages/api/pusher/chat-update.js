import { pusher } from "./index";

export default async function handler(req, res) {
  const { message, sender } = req.body;
  // trigger a new post event via pusher
  await pusher.trigger("presence-channel", "chat-update", {
    message,
    sender,
  });

  res.json({ status: 200 });
}
