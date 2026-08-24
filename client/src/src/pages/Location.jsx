import React, { useEffect, useState } from "react";

function Location() {

    const [address, setAddress] = useState("");
    console.log("locatin api running")
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const response = await fetch(
                   `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=en`
                );
                const data = await response.json();
                setAddress(data.display_name);
            },
            (error) => {
                console.log(error.message);
            }
        );

    }, []);

    return (
        <>
        <p>
            {address || "Getting location..."}
        </p>
        </>
    );
}

export default Location;