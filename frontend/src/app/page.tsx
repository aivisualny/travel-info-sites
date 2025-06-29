'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { LatLngExpression } from 'leaflet';
import { activitiesData, Activity } from '../data/activities';
import { categories } from '../data/categories';
import { continents } from '../data/continents';
import ActivityDetailCard from './components/ActivityDetailCard';

const MapComponent = dynamic(() => import('./components/Map'), {
  ssr: false,
});

export default function Home() {
  const [mapCenter, setMapCenter] = useState<LatLngExpression>([20, 0]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeContinent, setActiveContinent] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mobile sidebar states
  const [isContinentSidebarOpen, setIsContinentSidebarOpen] = useState(false);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

  const filteredActivities = useMemo(() => {
    let result = activitiesData;
    if (activeContinent) result = result.filter(act => act.continent === activeContinent);
    if (activeCategory) result = result.filter(act => act.category === activeCategory);
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      result = result.filter(act =>
        act.activity.toLowerCase().includes(lowercasedQuery) ||
        act.location.toLowerCase().includes(lowercasedQuery) ||
        act.country.toLowerCase().includes(lowercasedQuery)
      );
    }
    return result;
  }, [activeContinent, activeCategory, searchQuery]);

  const handleSelectActivity = (activity: Activity) => {
    setMapCenter(activity.coords);
    setSelectedActivity(activity);
    if (window.innerWidth < 1024) { // On mobile, open filter sidebar to show details
        setIsFilterSidebarOpen(true);
    }
  };

  const handleBackToList = () => setSelectedActivity(null);
  
  const ContinentSidebar = () => (
    <div className="space-y-2">
      <button onClick={() => { setActiveContinent(null); setSelectedActivity(null); }} className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${!activeContinent ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}>🌐 전체</button>
      {continents.map(con => <button key={con.name} onClick={() => { setActiveContinent(con.name); setSelectedActivity(null); }} className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${activeContinent === con.name ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-200'}`}>{con.emoji} {con.name}</button>)}
    </div>
  );

  const FilterSidebar = () => (
    selectedActivity ? <ActivityDetailCard activity={selectedActivity} onBack={handleBackToList} /> : <>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">검색 🔎</h2>
        <input type="search" placeholder="액티비티, 도시, 국가명 검색..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <h2 className="text-xl font-bold mb-4">카테고리</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={() => setActiveCategory(null)} className={`px-3 py-1.5 text-base rounded-full border transition-colors ${!activeCategory ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white hover:bg-gray-200 text-gray-700 border-gray-300'}`}>🌐 전체 보기</button>
        {categories.map(cat => <button key={cat.name} onClick={() => setActiveCategory(cat.name)} className={`px-3 py-1.5 text-base rounded-full border transition-colors ${activeCategory === cat.name ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white hover:bg-gray-200 text-gray-700 border-gray-300'}`}>{cat.emoji} {cat.name}</button>)}
      </div>
      <hr className="my-4" />
      <h2 className="text-xl font-bold mb-4">액티비티 목록 ({filteredActivities.length})</h2>
      <div className="space-y-3">
        {filteredActivities.length > 0 ? filteredActivities.map(activity => <div key={activity.id} className="rounded-lg p-3 shadow-md bg-white hover:shadow-lg hover:ring-2 hover:ring-blue-400 transition-all cursor-pointer text-base font-sans" onClick={() => handleSelectActivity(activity)}><h3 className="font-semibold text-gray-800 text-lg">{activity.activity}</h3><p className="text-base text-gray-600">{activity.location}</p></div>) : <p className="text-center text-gray-500 mt-8 text-base">선택한 조건에 맞는 액티비티가 없습니다.</p>}
      </div>
    </>
  );

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Mobile Sidebar Toggles */}
      <div className="lg:hidden absolute top-4 left-4 z-20 space-y-2">
        <button onClick={() => setIsContinentSidebarOpen(!isContinentSidebarOpen)} className="p-2 bg-white rounded-full shadow-lg"><span className="text-2xl">🌏</span></button>
      </div>
       <div className="lg:hidden absolute top-4 right-4 z-20">
        <button onClick={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)} className="p-2 bg-white rounded-full shadow-lg"><span className="text-2xl">⚙️</span></button>
      </div>

      {/* Mobile Continent Sidebar */}
      <div className={`lg:hidden absolute top-0 left-0 h-full w-64 bg-gray-100 p-4 z-30 transform transition-transform ${isContinentSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <h2 className="text-xl font-bold mb-4">대륙 선택</h2>
        <ContinentSidebar />
      </div>
      {(isContinentSidebarOpen || isFilterSidebarOpen) && <div className="lg:hidden absolute inset-0 bg-black bg-opacity-50 z-20" onClick={() => { setIsContinentSidebarOpen(false); setIsFilterSidebarOpen(false); }}></div>}

      {/* Mobile Filter Sidebar */}
       <div className={`lg:hidden absolute top-0 right-0 h-full w-80 bg-gray-50 p-4 z-30 transform transition-transform overflow-y-auto ${isFilterSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <main className="flex h-full bg-white text-gray-800">
        {/* Desktop Continent Sidebar */}
        <div className="hidden lg:block w-[12%] p-4 bg-gray-100 overflow-y-auto border-r">
          <h2 className="text-xl font-bold mb-4">대륙 선택</h2>
          <ContinentSidebar />
        </div>

        <div className="w-full lg:w-[68%] h-full relative p-2">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <MapComponent center={mapCenter} activities={filteredActivities} selectedActivity={selectedActivity} onMarkerClick={handleSelectActivity} />
          </div>
        </div>
        
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block w-[20%] p-4 bg-gray-50 overflow-y-auto border-l">
          <FilterSidebar />
        </div>
      </main>
    </div>
  );
}
