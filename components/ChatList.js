const ChatList = ({ chat, currentUser }) => {
  return (
    <>
      <div
        className={`${
          chat.sender !== currentUser
            ? "bg-gray-900 text-white "
            : "bg-purple-200 text-gray-700 ml-32"
        } max-w-xs rounded-md mt-2 px-3 py-3 text-sm`}
      >
        <p>{chat.message}</p>
      </div>
      <div
        className={`${
          chat.sender === currentUser && "w-full text-right"
        } text-purple-900`}
      >
        <small>{chat.sender}</small>
      </div>
    </>
  );
};

export default ChatList;
