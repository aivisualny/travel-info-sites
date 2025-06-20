'use client';

import { MapContainer, TileLayer, Marker, useMap, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useRef } from 'react';
import { Activity } from '@/data/activities';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

// Fix for default icon not showing up
// This needs to be done before any markers are created
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
});

interface MapUpdaterProps {
  activity: Activity | undefined;
}

const MapUpdater = ({ activity }: MapUpdaterProps) => {
  const map = useMap();
  useEffect(() => {
    if (activity) {
      map.flyTo(activity.coords as L.LatLngExpression, 6, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [activity, map]);
  return null;
};

interface MapProps {
  activities: Activity[];
  selectedActivityId: string | null;
  onMarkerClick: (id: string) => void;
}

// Highlighted icon
const highlightedIcon = L.icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = ({ activities, selectedActivityId, onMarkerClick }: MapProps) => {
  const router = useRouter();

  const handleDetailView = (id: string) => {
    router.push(`/activity/${id}`);
  };

  return (
    <MapContainer 
      center={[20, 0]} 
      zoom={2} 
      style={{ height: '100%', width: '100%' }}
      className="z-0"
      scrollWheelZoom={true}
      noWrap={true}
      maxBounds={L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180))}
      minZoom={2}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <MapUpdater activity={activities.find(a => a.id === selectedActivityId)} />
      {activities.map((activity) => (
        <Marker
          key={activity.id}
          position={activity.coords as L.LatLngExpression}
          icon={activity.id === selectedActivityId ? highlightedIcon : L.Icon.Default}
          eventHandlers={{
            click: () => {
              onMarkerClick(activity.id);
            },
          }}
        >
          <Tooltip>
            <div style={{ width: '150px', height: '100px', position: 'relative' }}>
              <Image 
                src={activity.imageUrl} 
                alt={activity.activity} 
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
          </Tooltip>
          <Popup>
            <div className="flex flex-col items-center p-1">
              <span className="font-bold text-center mb-2">{activity.activity}</span>
              <Button onClick={() => handleDetailView(activity.id)} size="sm">
                상세 보기
              </Button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map; 