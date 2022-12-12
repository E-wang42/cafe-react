import React from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

function Maps() {
  const center = useMemo(
    () => ({ lat: 29.749331608513017, lng: -95.48638317400662 }),
    []
  );

  return (
    <GoogleMap
      zoom={16}
      center={center}
      mapContainerClassName="h-[16rem] lg:h-[22rem] w-full rounded opacity-80 md:h-[16rem] sm:h-[15.5rem]"
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}

export default Maps;
