'use client';

import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import Image from 'next/image';
import Link from 'next/link';
import { Activity } from '@/data/activities';
import { useEffect, useRef, useState } from 'react';
import ImageGallery from './ImageGallery';

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

const fallbackImg = '/images/activities/default-activity.jpg'; // 기본 이미지 경로 수정

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
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryTitle, setGalleryTitle] = useState('');

  // 화면 크기에 따른 적절한 줌 레벨 계산
  const getOptimalZoom = () => {
    if (mapSize.width < 768) return 1; // 모바일
    if (mapSize.width < 1024) return 2; // 태블릿
    return 2; // 데스크톱
  };

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

  // 이미지 갤러리 열기
  const openGallery = (activity: Activity) => {
    const allImages = activity.imageUrls && activity.imageUrls.length > 0 
      ? [activity.imageUrl, ...activity.imageUrls]
      : [activity.imageUrl];
    
    setGalleryImages(allImages);
    setGalleryTitle(activity.activity);
    setShowGallery(true);
  };

  // 지도 컨테이너 크기 감지
  useEffect(() => {
    const updateMapSize = () => {
      if (mapRef.current) {
        const container = mapRef.current.getContainer();
        setMapSize({
          width: container.offsetWidth,
          height: container.offsetHeight
        });
      }
    };

    const resizeObserver = new ResizeObserver(updateMapSize);
    if (mapRef.current) {
      resizeObserver.observe(mapRef.current.getContainer());
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <div 
        className="relative w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <MapContainer 
          center={center} 
          zoom={getOptimalZoom()} 
          style={{ 
            height: '100%', 
            width: '100%',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}
          maxBounds={[[-90, -180], [90, 180]]}
          worldCopyJump={false}
          whenCreated={mapInstance => { mapRef.current = mapInstance; }}
          zoomControl={true}
          scrollWheelZoom={true}
          doubleClickZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            noWrap={true}
            opacity={0.9}
          />
          <MapEvents center={center} />
          {activities.map((activity) => {
            const allImages = activity.imageUrls && activity.imageUrls.length > 0 
              ? [activity.imageUrl, ...activity.imageUrls]
              : [activity.imageUrl];

            return (
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
                      className="rounded-md cursor-pointer"
                      onError={(e: any) => { e.target.src = fallbackImg; }}
                      onClick={() => openGallery(activity)}
                    />
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-base p-1 w-full rounded-b-md text-center">
                      {activity.activity}
                    </div>
                    {allImages.length > 1 && (
                      <div className="absolute top-1 right-1 bg-black bg-opacity-50 text-white text-xs px-1 rounded">
                        +{allImages.length - 1}
                      </div>
                    )}
                  </div>
                </Tooltip>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* 이미지 갤러리 모달 */}
      {showGallery && (
        <ImageGallery
          images={galleryImages}
          title={galleryTitle}
          onClose={() => setShowGallery(false)}
        />
      )}
    </>
  );
};

export default MapComponent; 