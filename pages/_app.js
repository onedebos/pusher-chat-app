import "../styles/globals.css";
import { useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/chat");
  };

  return (
    <Component
      handleLoginChange={(e) => setUsername(e.target.value)}
      username={username}
      handleLogin={handleLogin}
      {...pageProps}
    />
  );
}

export default MyApp;
