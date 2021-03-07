import Link from 'next/link'

const LeftPanel = ({sender}) => (
  <>
    <div className="bg-purple-100 shadow-md h-64 flex flex-col justify-center items-center rounded-md">
      <div className="h-24 w-24 mb-3">
        <img
          className="rounded-full"
          src="https://peterbe.com/avatar.random.png"
        />
      </div>
      <p className="text-purple-500">
        Hello, <span className="font-semibold">{sender}</span>
        <div className="mt-4">
          <Link href="/">
            <a className="text-white bg-purple-500 px-2 py-3 rounded-md w-full">
              Sign out
            </a>
          </Link>
        </div>
      </p>
    </div>

    <div className="mt-10">
      <h2 className="font-semibold text-xl text-green-500">You're online.</h2>
    </div>
  </>
);

export default LeftPanel;
