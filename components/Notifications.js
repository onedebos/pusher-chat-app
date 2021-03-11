const Notifications = ({ onlineUsers, onlineUsersCount, usersRemoved }) => {
  return (
    <>
      <div>{onlineUsersCount} user(s) online now</div>

      <h2 className="text-purple-500 shadow-sm mt-3 bg-purple-50 py-2 px-2 rounded-sm font-medium">
        Notifications
      </h2>
      <div className="bg-purple-50 rounded-sm pb-2 px-2">
        {/* show online users */}
        {onlineUsers.map((user, id) => (
          <div key={id}>
          <small className="leading-tight">
            {" "}
            <span className="text-purple-500">{user.username}</span> just joined
            the chat from {user.userLocation}!
          </small>
          </div>
        ))}

        {/* show users leaving the chat */}
        {usersRemoved.map((user, id) => (
          <small key={id}>
            {" "}
            <span className="text-purple-500">{user}</span> just left the chat!
          </small>
        ))}
      </div>
    </>
  );
};

export default Notifications;
