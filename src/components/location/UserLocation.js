import React, { useMemo } from "react";
import style from "./userloc.module.css";
import { useJsApiLoader, Marker, GoogleMap } from "@react-google-maps/api";
import { useContext } from "react";
import { Data } from "../data/Context";

export default function UserLocation() {
  const { latlong } = useContext(Data);

  const isloading = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD7TEncv3z9755WNOeoVhIlIUcQOR4wub4",
  });

  const center = useMemo(
    () => ({ lat: +latlong.lat, lng: +latlong.long }),
    [latlong]
  );

  if (!isloading) {
    return <p className={style.main}>loading...</p>;
  }

  return (
    <div className={style.main}>
      {isloading && (
        <GoogleMap zoom={10} center={center} mapContainerClassName={style.map}>
          <Marker position={center} />
        </GoogleMap>
      )}
    </div>
  );
}
