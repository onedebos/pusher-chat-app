import Button from "../components/Button";


export default function Login({handleLogin, handleLoginChange}) {


  return (
    <div className="flex flex-col h-screen bg-purple-500">
    <form onSubmit={handleLogin} className="px-3 py-20 rounded-md w-full max-w-2xl bg-white m-auto">
      <p className="text-purple-900 text-center mb-4">Please enter your name:</p>
      <div className="max-w-md m-auto flex flex-col justify-center items-center">
        <input
          type="text"
          onChange={handleLoginChange}
          className="border border-1 border-black rounded-md px-2 py-2 focus:ring-purple-500 w-full"
          placeholder="your name"
        />
        <Button text="Sign in to get started" />
      </div>
    </form>
    </div>
  );
}
