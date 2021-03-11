import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/chat");
  };

  useEffect(() => {
    getUserLocation();
    return () => {};
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(trackPosition);
    } else {
      alert("geolocation is not supported in your browser.");
    }
  };

  const trackPosition = async (position) => {
    const { latitude, longitude } = position.coords;

    try {
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=administrative_area_level_1&key=${process.env.NEXT_PUBLIC_G_KEY}`
      );
      setUserLocation(res.data.results[0].formatted_address);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <Component
      handleLoginChange={(e) => setUsername(e.target.value)}
      username={username}
      userLocation={userLocation}
      handleLogin={handleLogin}
      {...pageProps}
    />
  );
}

export default MyApp;
