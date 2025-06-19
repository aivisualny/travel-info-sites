"use client";
import { useState } from "react";
import Map, { Marker } from "react-map-gl";

const markers = [
  {
    id: "swiss-paragliding",
    title: "스위스 알프스 패러글라이딩",
    lat: 46.8182,
    lng: 8.2275,
  },
  {
    id: "dubai-desert-camp",
    title: "두바이 사막 캠핑",
    lat: 24.4539,
    lng: 54.3773,
  },
  {
    id: "okinawa-diving",
    title: "오키나와 다이빙",
    lat: 26.3344,
    lng: 127.8056,
  },
];

export default function MapPage() {
  const [viewState, setViewState] = useState({
    longitude: 10,
    latitude: 40,
    zoom: 2,
  });
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">지도 기반 액티비티 탐색</h1>
      <div className="w-full max-w-3xl h-96 rounded-xl overflow-hidden shadow">
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={viewState}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          style={{ width: "100%", height: "100%" }}
          onMove={evt => setViewState(evt.viewState)}
        >
          {markers.map((m) => (
            <Marker key={m.id} longitude={m.lng} latitude={m.lat} anchor="bottom">
              <a href={`/activity/${m.id}`} title={m.title}>
                <span className="text-2xl">📍</span>
              </a>
            </Marker>
          ))}
        </Map>
      </div>
    </main>
  );
}

// react-map-gl 스타일 적용을 위해 globals.css에 아래 import 필요:
// import 'mapbox-gl/dist/mapbox-gl.css'; 