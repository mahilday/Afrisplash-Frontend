import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "./index.module.scss";

function Map():JSX.Element {
  return (
    <GoogleMap
      zoom={5}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName={`${styles.google}`}
    >
      <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  );
}

const GoogleMapApi = ():JSX.Element => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) return <div>Loading....</div>;
  return <Map />;
};

export default GoogleMapApi;
