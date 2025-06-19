import Image from 'next/image';

const dummy = {
  id: 'swiss-paragliding',
  title: '스위스 알프스 패러글라이딩',
  description: '유럽 최고의 패러글라이딩 명소 중 하나. 알프스의 절경을 하늘에서 만끽할 수 있습니다.',
  location: '스위스, 알프스',
  thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  bestSeason: '5~9월',
  priceRange: '150~300 CHF',
  bookingUrl: 'https://www.getyourguide.com/',
};

export default function ActivityDetailPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center p-8">
      <div className="w-full max-w-2xl bg-gray-50 rounded-xl shadow p-6">
        <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
          <Image src={dummy.thumbnail} alt={dummy.title} fill className="object-cover" />
        </div>
        <h1 className="text-2xl font-bold mb-2">{dummy.title}</h1>
        <p className="text-gray-600 mb-2">{dummy.location}</p>
        <p className="mb-4">{dummy.description}</p>
        <div className="flex gap-4 mb-4">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">추천 시즌: {dummy.bestSeason}</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">가격대: {dummy.priceRange}</span>
        </div>
        <a href={dummy.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition">예약하러 가기</a>
      </div>
    </main>
  );
} 