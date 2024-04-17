// page.js
"use client";

import Map from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// import classes from "./Page.module.css";

export default function OurMap() {
	const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

	return (
		<main className="h-screen w-full">
			<Map
				mapboxAccessToken={mapboxToken}
				mapStyle="mapbox://styles/mapbox/streets-v12"
				style={{width:"100%", }}
				initialViewState={{ latitude: 48.864716, longitude:2.349014, zoom: 12 }}
				maxZoom={20}
				minZoom={3}
			></Map>
		</main>
	);
}
