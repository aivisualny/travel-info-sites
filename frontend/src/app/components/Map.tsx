'use client';

import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import Image from 'next/image';
import Link from 'next/link';
import { Activity } from '@/data/activities';
import { useEffect, useRef } from 'react';

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

const fallbackImg = '/public/globe.svg'; // public 폴더 내 기본 이미지 사용

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
  const mapRef = useRef<any>(null);

  // 마커 클릭 시, 여백을 두고 부드럽게 이동
  const handleMarkerClick = (activity: Activity) => {
    onMarkerClick(activity);
    if (mapRef.current) {
      const map = mapRef.current;
      // 오른쪽 패널이 가려지는 것을 고려해 x축 offset 적용 (예: 200px)
      const container = map.getContainer();
      const size = map.getSize();
      const point = map.latLngToContainerPoint(activity.coords);
      // x축을 왼쪽으로 150px 이동 (여백)
      const offsetPoint = L.point(point.x - 150, point.y);
      const targetLatLng = map.containerPointToLatLng(offsetPoint);
      map.panTo(targetLatLng, { animate: true });
    }
  };

  return (
    <MapContainer 
      center={center} 
      zoom={2} 
      style={{ height: '100%', width: '100%' }}
      maxBounds={[[-90, -180], [90, 180]]}
      worldCopyJump={false}
      whenCreated={mapInstance => { mapRef.current = mapInstance; }}
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
            click: () => handleMarkerClick(activity),
          }}
        >
          <Tooltip permanent={false} direction="top" offset={[0, -41]}>
            <div className="w-40 h-28 relative flex flex-col items-center justify-center">
              <Image
                src={activity.imageUrl}
                alt={activity.activity}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-md"
                onError={(e: any) => { e.target.src = fallbackImg; }}
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-base p-1 w-full rounded-b-md text-center">
                {activity.activity}
              </div>
            </div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent; 