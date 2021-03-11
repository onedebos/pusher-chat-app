const ChatList = ({ chat, currentUser }) => {
  const flexClasses =
    chat.username !== currentUser ? "flex flex-col justify-end items-end" : "";

  const chatBgClasses =
    chat.username === currentUser
      ? "bg-gray-900 text-white "
      : "bg-purple-200 w-full text-gray-700";

  return (
    <div className={flexClasses}>
      <div
        className={`${chatBgClasses} max-w-xs rounded-md mt-2 px-3 py-3 text-sm`}
      >
        <p>{chat.message}</p>
      </div>
      <div
        className={`${
          chat.username !== currentUser ? "w-full text-right" : ""
        } text-purple-900`}
      >
        <small>{chat.username}</small>
      </div>
    </div>
  );
};

export default ChatList;
