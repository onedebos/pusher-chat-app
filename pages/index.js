import Button from "../components/Button";

export default function Login({ handleLogin, handleLoginChange }) {
  return (
    <div className="flex m-auto items-center justify-center flex-col h-screen bg-purple-500">
      <div className="mb-5">
      <h1 className="text-5xl text-white m-auto">Chattr</h1>
      <p className="text-gray-200">your chats, your way</p>
      </div>
      
      <form
        onSubmit={handleLogin}
        className="px-3 py-20 rounded-md w-full max-w-2xl bg-white"
      >
        <p className="text-purple-900 text-center mb-4">
          Enter your name to start:
        </p>
        <div className="max-w-md m-auto flex flex-col justify-center items-center">
          <input
            type="text"
            onChange={handleLoginChange}
            className="border border-1 border-purple-900 rounded-md px-2 py-2 focus:ring-1 focus:ring-purple-500 w-full"
            placeholder="your name"
          />
          <Button text="Sign in to get started" />
        </div>
      </form>
    </div>
  );
}
