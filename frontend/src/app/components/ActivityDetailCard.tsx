import { Activity } from '@/data/activities';
import Image from 'next/image';

interface ActivityDetailCardProps {
  activity: Activity;
  onBack: () => void;
}

const fallbackImg = '/public/globe.svg';

const ActivityDetailCard = ({ activity, onBack }: ActivityDetailCardProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg animate-fade-in text-base font-sans">
      <button
        onClick={onBack}
        className="mb-4 text-base font-semibold text-blue-600 hover:underline"
      >
        &larr; 목록으로 돌아가기
      </button>
      <div className="w-full h-48 mb-4 relative rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
        <Image
          src={activity.imageUrl}
          alt={activity.activity}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
          onError={(e: any) => { e.target.src = fallbackImg; }}
        />
      </div>
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
  );
};

export default ActivityDetailCard; 