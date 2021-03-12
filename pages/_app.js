import "../styles/globals.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [sender, setSender] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/chat");
  };

  return (
    <>
      <Head>
        <title>Pusher - Public Channels API Demo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Component
      handleLoginChange={(e) => setSender(e.target.value)}
      sender={sender}
      handleLogin={handleLogin}
      {...pageProps}
    />
    </>
  );
}

export default MyApp;