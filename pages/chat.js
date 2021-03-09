import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import SendMessage from "../components/SendMessage";
import axios from "axios";
import ChatList from "../components/ChatList";
import LeftPanel from "../components/LeftPanel";

const Chat = ({ sender }) => {
  const [chats, setChats] = useState([]);
  const [messageToSend, setMessageToSend] = useState("");

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_KEY, {
      cluster: "eu",
    });

    const channel = pusher.subscribe("chat");

    channel.bind("chat-event", function (data) {
      setChats((prevState) => [
        ...prevState,
        { sender: data.sender, message: data.message },
      ]);
    });

    return () => {
      pusher.unsubscribe("chat");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/pusher", { message: messageToSend, sender });
  };

  return (
    <div className="m-auto max-w-full h-screen bg-purple-500 shadow-lg">
      <div className="max-w-4xl m-auto pt-20">
        <div className="grid grid-cols-3 bg-white px-10 py-10 rounded-lg">
          <div className="col-span-1 mr-5 ">
            <LeftPanel sender={sender} />
          </div>

          <div className="col-span-2 flex flex-col bg-purple-50 rounded-lg px-5 py-5">
            <div className="flex-1">
              {chats.map((chat, id) => (
                <ChatList key={id} chat={chat} currentUser={sender} />
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
