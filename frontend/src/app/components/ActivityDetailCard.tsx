import { Activity } from '@/data/activities';

interface ActivityDetailCardProps {
  activity: Activity;
  onBack: () => void;
}

const ActivityDetailCard = ({ activity, onBack }: ActivityDetailCardProps) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg animate-fade-in">
      <button
        onClick={onBack}
        className="mb-4 text-sm font-semibold text-blue-600 hover:underline"
      >
        &larr; 목록으로 돌아가기
      </button>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{activity.activity}</h2>
      <p className="text-md text-gray-700 mb-4">{activity.location}, {activity.country}</p>

      <div className="space-y-3 text-gray-800">
        <div>
          <span className="font-semibold">대륙:</span> {activity.continent}
        </div>
        <div>
          <span className="font-semibold">카테고리:</span> {activity.category}
        </div>
        <div>
          <h3 className="font-semibold text-lg mt-4 mb-2 border-b pb-1">✨ 특징</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {activity.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailCard; 