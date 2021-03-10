import Pusher from "pusher";

export const pusher = new Pusher({
  appId: process.env.app_id,
  key: process.env.key,
  secret: process.env.secret,
  cluster: process.env.cluster,
  useTLS: true,
});

export default async function handler(req, res) {
  const { message, sender } = req.body;
  await pusher.trigger("chat", "chat-event", {
    message,
    sender,
  });

  res.json({ message: "completed" });
}
