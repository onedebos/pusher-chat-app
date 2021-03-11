import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import SendMessage from "../components/SendMessage";
import axios from "axios";
import ChatList from "../components/ChatList";
import LeftPanel from "../components/LeftPanel";
import Notifications from "../components/Notifications";
import { useRouter } from "next/router";

const Chat = ({ username, userLocation }) => {
  const router = useRouter();
  const pusher = new Pusher(process.env.NEXT_PUBLIC_KEY, {
    cluster: "eu",
    // use jwts in prod
    authEndpoint: `api/pusher/auth`,
    auth: { params: {username, userLocation}}
  });

  const [chats, setChats] = useState([]);
  const [messageToSend, setMessageToSend] = useState("");
  const [onlineUsersCount, setOnlineUsersCount] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [usersRemoved, setUsersRemoved] = useState([]);

  useEffect(() => {
    const channel = pusher.subscribe("presence-channel"); 
    const {count} = channel.members

    // when a new member successfully subscribes to the channel
    channel.bind("pusher:subscription_succeeded", (members) => {
      // total subscribed
      setOnlineUsersCount(members.count);
    });

    // when a new member joins the chat
    channel.bind("pusher:member_added", (member) => {
      setOnlineUsersCount(count);
      setOnlineUsers((prevState) => [
        ...prevState,
        { username: member.info.username, userLocation: member.info.userLocation },
      ]);
    });

    // when a member leaves the chat
    channel.bind("pusher:member_removed", (member) => {
      setOnlineUsersCount(count);
      setUsersRemoved((prevState) => [...prevState, member.info.username]);
    });

    // updates chats
    channel.bind("chat-update", function (data) {
      const {username, message} = data
      setChats((prevState) => [
        ...prevState,
        { username, message },
      ]);
    });

    return () => {
      pusher.unsubscribe("presence-channel");
    };
  }, []);

  const handleSignOut = () => {
    pusher.unsubscribe("presence-channel");
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/pusher/chat-update", {
      message: messageToSend,
      username
    });
  };

  return (
    <div className="m-auto max-w-full h-screen bg-purple-500 shadow-lg">
      <div className="max-w-4xl m-auto pt-20">
        <div className="grid grid-cols-3 bg-white px-10 py-10 rounded-lg">
          <div className="col-span-1 mr-5 ">
            <LeftPanel sender={username} onSignOut={handleSignOut} />
            <Notifications
              onlineUsersCount={onlineUsersCount}
              onlineUsers={onlineUsers}
              usersRemoved={usersRemoved}
            />
          </div>

          <div className="col-span-2 flex flex-col bg-purple-50 rounded-lg px-5 py-5">
            <div className="flex-1">
              {chats.map((chat, id) => (
                <ChatList key={id} chat={chat} currentUser={username} />
              ))}
            </div>

            <div className="pt-20">
              <SendMessage
                message={messageToSend}
                handleMessageChange={(e) => setMessageToSend(e.target.value)}
                handleSubmit={(e) => {
                  handleSubmit(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
