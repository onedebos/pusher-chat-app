import pusher from "./index";

export default async function handler({ req, res }) {
  const { username, location } = req.body;
  // trigger a new post event via pusher
  await pusher.trigger("presence-channel", "location-update", {
    username,
    location,
  });

  res.json({ status: 200 });
}
