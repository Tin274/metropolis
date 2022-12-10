import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ stadtName, land, location }) {
    const [center, setCenter] = useState([location.lat, location.lon]);
<<<<<<< HEAD
=======
   
    // setCenter([location.lat, location.lon]);
>>>>>>> 3220037a3d117e392e1acbe5b329490a36c933c9

    return (
        <>
            <MapContainer
                style={{ height: "400px", marginTop: "100px" }}
                center={center}
                zoom={9}
                scrollWheelZoom={true}
                viewreset
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                        <h3>
                            {stadtName},{land}
                        </h3>
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}
