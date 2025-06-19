import Image from "next/image";

const activities = [
  {
    id: 'swiss-paragliding',
    title: '스위스 알프스 패러글라이딩',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    location: '스위스, 알프스',
  },
  {
    id: 'dubai-desert-camp',
    title: '두바이 사막 캠핑',
    thumbnail: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    location: 'UAE, 두바이',
  },
  {
    id: 'okinawa-diving',
    title: '오키나와 다이빙',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
    location: '일본, 오키나와',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="w-full h-64 bg-gradient-to-r from-blue-400 to-green-300 flex items-center justify-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">올여름 이색 체험 여행을 떠나보세요!</h1>
      </section>
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">지역별 추천 체험</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((act) => (
            <a
              key={act.id}
              href={`/activity/${act.id}`}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
            >
              <div className="relative w-full h-40">
                <Image
                  src={act.thumbnail}
                  alt={act.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{act.title}</h3>
                <p className="text-gray-500 text-sm">{act.location}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
