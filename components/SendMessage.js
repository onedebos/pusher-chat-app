
const SendMessage = ({ handleSubmit, handleMessageChange, message }) => {
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-4 items-baseline ">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        className="col-span-3 focus:outline-none focus:ring-1 focus:ring-purple-500 border-2 w-full border-gray-200 rounded-l-md px-2 py-2"
        placeholder="start typing...."
      />
      <button
        type="submit"
        className="bg-purple-500 px-2 rounded-r-md text-white max-w-sm h-full"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
