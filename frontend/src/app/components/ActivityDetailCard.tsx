'use client';

import { Activity } from '@/data/activities';
import Image from 'next/image';
import { useState } from 'react';
import ImageGallery from './ImageGallery';

interface ActivityDetailCardProps {
  activity: Activity;
  onBack: () => void;
}

const fallbackImg = '/images/activities/default-activity.jpg';

const ActivityDetailCard = ({ activity, onBack }: ActivityDetailCardProps) => {
  const [showGallery, setShowGallery] = useState(false);

  // 이미지 배열 생성 (메인 이미지 + 추가 이미지들)
  const allImages = activity.imageUrls && activity.imageUrls.length > 0 
    ? [activity.imageUrl, ...activity.imageUrls]
    : [activity.imageUrl];

  const handleImageClick = () => {
    if (allImages.length > 1) {
      setShowGallery(true);
    }
  };

  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-lg animate-fade-in text-base font-sans">
        <button
          onClick={onBack}
          className="mb-4 text-base font-semibold text-blue-600 hover:underline"
        >
          &larr; 목록으로 돌아가기
        </button>
        
        {/* 메인 이미지 */}
        <div 
          className="w-full h-48 mb-4 relative rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={handleImageClick}
        >
          <Image
            src={activity.imageUrl}
            alt={activity.activity}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
            onError={(e: any) => { e.target.src = fallbackImg; }}
          />
          
          {/* 이미지 갤러리 표시 아이콘 */}
          {allImages.length > 1 && (
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
              +{allImages.length - 1} 더보기
            </div>
          )}
        </div>

        {/* 썸네일 갤러리 (추가 이미지들이 있을 때만) */}
        {allImages.length > 1 && (
          <div className="mb-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {allImages.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setShowGallery(true)}
                >
                  <Image
                    src={image}
                    alt={`${activity.activity} 이미지 ${index + 2}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e: any) => {
                      e.target.src = fallbackImg;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <h2 className="text-3xl font-bold text-gray-800 mb-2">{activity.activity}</h2>
        <p className="text-lg text-gray-700 mb-4">{activity.location}, {activity.country}</p>

        <div className="space-y-3 text-gray-800">
          <div>
            <span className="font-semibold">대륙:</span> {activity.continent}
          </div>
          <div>
            <span className="font-semibold">카테고리:</span> {activity.category}
          </div>
          <div>
            <h3 className="font-semibold text-xl mt-4 mb-2 border-b pb-1">✨ 특징</h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1 text-base">
              {activity.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col gap-2">
          <a
            href={`https://www.getyourguide.com/s/?q=${encodeURIComponent(activity.activity)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition text-lg text-center"
          >
            예약하러 가기
          </a>
          <span className="text-gray-500 text-sm">외부 사이트로 이동합니다.</span>
        </div>
      </div>

      {/* 이미지 갤러리 모달 */}
      {showGallery && (
        <ImageGallery
          images={allImages}
          title={activity.activity}
          onClose={() => setShowGallery(false)}
        />
      )}
    </>
  );
};

export default ActivityDetailCard; 