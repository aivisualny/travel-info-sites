'use client';

import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import Image from 'next/image';
import Link from 'next/link';
import { Activity } from '@/data/activities';
import { useEffect } from 'react';

// Leaflet's default icon path issue with Webpack
// This manually sets the paths for the marker icons
const defaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

const highlightedIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapProps {
  center: LatLngExpression;
  activities: Activity[];
  selectedActivity: Activity | null;
  onMarkerClick: (activity: Activity) => void;
}

const MapEvents = ({ center }: { center: LatLngExpression }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, map.getZoom());
  }, [center, map]);
  return null;
};

const MapComponent = ({ center, activities, selectedActivity, onMarkerClick }: MapProps) => {
  return (
    <MapContainer 
      center={center} 
      zoom={2} 
      style={{ height: '100%', width: '100%' }}
      maxBounds={[[-90, -180], [90, 180]]}
      worldCopyJump={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        noWrap={true}
      />
      <MapEvents center={center} />
      {activities.map((activity) => (
        <Marker 
          key={activity.id} 
          position={activity.coords} 
          icon={selectedActivity?.id === activity.id ? highlightedIcon : defaultIcon}
          eventHandlers={{
            click: () => {
              onMarkerClick(activity);
            },
          }}
        >
          <Tooltip permanent={false} direction="top" offset={[0, -41]}>
            <div className="w-40 h-28 relative">
              <Image
                src={activity.imageUrl}
                alt={activity.activity}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-xs p-1 w-full rounded-b-md">
                {activity.activity}
              </div>
            </div>
          </Tooltip>
          <Popup>
            <div className="text-center">
              <span className="font-semibold">{activity.activity}</span> at {activity.location}<br /> 
              <button onClick={() => onMarkerClick(activity)} className="mt-1 text-blue-600 hover:underline">
                우측에서 자세히 보기
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent; 