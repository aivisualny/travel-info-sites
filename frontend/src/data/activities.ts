import { LatLngExpression } from 'leaflet';

export interface Activity {
  id: string;
  continent: '아프리카' | '유럽' | '북미' | '중남미' | '아시아' | '오세아니아' | '극지방';
  country: string;
  location: string;
  activity: string;
  category: '익스트림 스포츠' | '고공/항공 액티비티' | '수상/해양 액티비티' | '겨울/빙하 스포츠' | '트레킹 & 하이킹' | '사막/오프로드' | '놀이공원 & 복합 어드벤처' | '도시 익스트림' | '지속가능/윤리적 체험' | 'VR/기술 기반 스포츠' | 'Polar Zone';
  coords: LatLngExpression;
  features: string[];
  imageUrl: string;
}

export const activitiesData: Activity[] = [
  {
    id: 'victoria-falls-bungee',
    continent: '아프리카',
    country: '잠비아/짐바브웨',
    location: '빅토리아 폭포 다리',
    activity: '번지점프',
    category: '익스트림 스포츠',
    coords: [-17.9247, 25.8581],
    features: [
      "111미터 높이에서의 세계 3대 번지점프",
      "거대한 폭포의 물보라 속에서 점프"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1604593923585-1157146599b4?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'interlaken-paragliding',
    continent: '유럽',
    country: '스위스',
    location: '인터라켄',
    activity: '패러글라이딩',
    category: '고공/항공 액티비티',
    coords: [46.6863, 7.8632],
    features: [
      "알프스 봉우리와 호수를 감상하는 비행",
      "전문 파일럿과 함께하는 탠덤 비행"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509316976254-8734e34335a4?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'sydney-surfing',
    continent: '오세아니아',
    country: '호주',
    location: '본다이 비치',
    activity: '서핑',
    category: '수상/해양 액티비티',
    coords: [-33.8915, 151.2767],
    features: [
      "세계적으로 유명한 서핑 스팟",
      "초보자부터 상급자까지 모든 레벨을 위한 강습 제공"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1493774889567-3d96433b3a39?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'coron-bay-wreck-diving',
    continent: '아시아',
    country: '필리핀',
    location: '코론 베이, 팔라완',
    activity: '난파선 다이빙',
    category: '수상/해양 액티비티',
    coords: [11.9981, 120.2006],
    features: [
        "제2차 세계대전 난파선 12곳 이상 탐험",
        "토치만으로 어두운 선체 내부를 탐험",
        "대형 어류와 함께 수영"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1594924846419-f472023f809a?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'ariels-point-cliff-diving',
      continent: '아시아',
      country: '필리핀',
      location: '아리엘스 포인트, 보라카이',
      activity: '절벽 다이빙',
      category: '수상/해양 액티비티',
      coords: [11.9375, 121.8900],
      features: [
          "최대 13미터 높이의 다이빙 플랫폼",
          "장비 없이 즐기는 스릴",
          "자유로운 익스트림 점프"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1589280598237-7933a958869b?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'baho-falls-cliff-diving',
      continent: '아시아',
      country: '베트남',
      location: '바호 폭포, 나트랑 북쪽',
      activity: '절벽 다이빙',
      category: '수상/해양 액티비티',
      coords: [12.3182, 109.1804],
      features: [
          "맑은 물로 둘러싸인 자연환경",
          "바위를 타고 올라가 다이빙",
          "계곡 속 어드벤처 체험"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1532614563853-23b9d88924b8?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'kuala-lumpur-base-jump',
      continent: '아시아',
      country: '말레이시아',
      location: '쿠알라룸푸르',
      activity: '베이스 점프',
      category: '익스트림 스포츠',
      coords: [3.1528, 101.7037],
      features: [
          "300미터 KL 타워에서의 점프",
          "1999년부터 공식 베이스 점프 센터",
          "세계 최대 규모의 아드레날린 스포츠"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1599389239104-953586419894?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'bir-billing-paragliding',
      continent: '아시아',
      country: '인도',
      location: '비르 빌링, 히말라야',
      activity: '패러글라이딩',
      category: '고공/항공 액티비티',
      coords: [32.0426, 76.7215],
      features: [
          "세계 2위의 패러글라이딩 명소",
          "히말라야 상공 30분 비행",
          "저렴한 가격의 체험 ($50 내외)"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1620594033169-4e1a065b535d?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'ayung-river-rafting',
      continent: '아시아',
      country: '인도네시아',
      location: '아융 강, 발리',
      activity: '화이트워터 래프팅',
      category: '수상/해양 액티비티',
      coords: [-8.4920, 115.2621],
      features: [
          "12km 코스의 열대우림 속 래프팅",
          "약 2시간 동안의 항해",
          "자연과 어우러진 복합 관광지"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1508249254148-5d46927a3c32?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'first-glider-grindelwald',
      continent: '유럽',
      country: '스위스',
      location: '베른 고원, 그린델발트',
      activity: '퍼스트 글라이더',
      category: '고공/항공 액티비티',
      coords: [46.6242, 8.0414],
      features: [
          "세계에 8개밖에 없는 행글라이더-집라인 결합",
          "독수리 모양 금속 프레임에 매달려 비행",
          "최고 시속 83km의 하강 체험"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1631242316525-07205463b22b?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'thrill-walk-schilthorn',
      continent: '유럽',
      country: '스위스',
      location: '쉴트호른, 스위스 알프스',
      activity: '스릴 워킹',
      category: '트레킹 & 하이킹',
      coords: [46.5585, 7.8353],
      features: [
          "유리 바닥 산악 도보 체험",
          "500피트 상공에서 계곡을 내려다봄",
          "007 영화 촬영지 회전 레스토랑 연결 터널 포함"
      ],
      imageUrl: 'https://images.unsplash.com/photo-160321769232-9a5d55589164?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'paragliding-tyrol',
      continent: '유럽',
      country: '오스트리아',
      location: '티롤, 오스트리아 알프스',
      activity: '패러글라이딩',
      category: '고공/항공 액티비티',
      coords: [47.2306, 11.3081],
      features: [
          "티롤 마을과 언덕을 조망하는 활공",
          "청정한 공기 속 체험",
          "그림 같은 자연 경관"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1590833289098-a28a1e2f38c3?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'cliff-diving-croatia',
      continent: '유럽',
      country: '크로아티아',
      location: '아드리아해 연안',
      activity: '절벽 다이빙',
      category: '수상/해양 액티비티',
      coords: [42.6400, 18.1100],
      features: [
          "맑은 코브와 바다로 다이빙",
          "지중해의 수정 같은 바다 체험",
          "아름다운 해양 환경"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1598585299833-2415a7293776?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'skiing-chamonix',
      continent: '유럽',
      country: '프랑스',
      location: '샤모니, 프랑스 알프스',
      activity: '스키 및 스노보드',
      category: '겨울/빙하 스포츠',
      coords: [45.9237, 6.8694],
      features: [
          "1924년 동계올림픽 개최지",
          "몽블랑 배경의 전설적인 슬로프",
          "비스키어를 위한 패러글라이딩과 아이스 클라이밍"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1551698223-9c593455a12c?q=80&w=400&auto=format=fit=crop'
  },
  {
      id: 'interlaken-multi-adventure',
      continent: '유럽',
      country: '스위스',
      location: '인터라켄, 스위스 알프스',
      activity: '스카이다이빙, 패러글라이딩, 캐녀닝',
      category: '익스트림 스포츠',
      coords: [46.6863, 7.8632],
      features: [
          "연중 다양한 어드벤처 액티비티 제공",
          "스키, 수상 스포츠 등 계절별 다양한 경험",
          "알프스 중심의 아드레날린 명소"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1534067869499-55639101f37b?q=80&w=400&auto=format=fit=crop'
  },
  {
      id: 'fjord-kayaking-bergen',
      continent: '유럽',
      country: '노르웨이',
      location: '베르겐, 노르웨이 서부',
      activity: '피요르드 카약킹과 하이킹',
      category: '트레킹 & 하이킹',
      coords: [60.3913, 5.3221],
      features: [
          "험준한 피요르드 지형에서의 하이킹",
          "카약으로 즐기는 수상 어드벤처",
          "자연 속 스릴 체험"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1599835709543-855523315758?q=80&w=400&auto=format=fit=crop'
  },
  {
      id: 'kiteskiing-baffin-island',
      continent: '북미',
      country: '캐나다',
      location: '프로비셔 베이, 배핀 아일랜드',
      activity: '카이트 스키',
      category: '겨울/빙하 스포츠',
      coords: [63.7500, -68.5167],
      features: [
          "바다 얼음 위에서의 카이트 스키",
          "피요르드와 해안선 감상",
          "극지방의 모험적인 스키 체험"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1517838586326-b1856b39d14a?q=80&w=400&auto=format=fit=crop'
  },
  {
      id: 'heliskiing-alaska',
      continent: '북미',
      country: '미국',
      location: '추가치 산맥, 알래스카',
      activity: '헬리스키',
      category: '겨울/빙하 스포츠',
      coords: [61.5833, -145.0000],
      features: [
          "헬리콥터로 외딴 산악지 드롭오프",
          "세계 빙하 40%와 풍부한 적설량",
          "진정한 겨울 익스트림 체험"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1585483103342-2b6fb56c3886?q=80&w=400&auto=format=fit=crop'
  },
  {
      id: 'landsailing-nevada',
      continent: '북미',
      country: '미국',
      location: '네바다 사막',
      activity: '랜드 세일링',
      category: '익스트림 스포츠',
      coords: [40.7617, -119.2250],
      features: [
          "건조한 대지에서의 육상 세일링",
          "블랙 록 데저트에서 체험",
          "세계 속도 기록 도전지"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1599423300885-3c0a4421d0a5?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'snowkiting-michigan',
      continent: '북미',
      country: '미국',
      location: '미시간 호수 주변',
      activity: '스노우 카이트',
      category: '겨울/빙하 스포츠',
      coords: [44.3148, -85.6024],
      features: [
          "얼어붙은 호수 위 겨울 익스트림",
          "초겨울의 얕은 물 얼음 지역",
          "광활한 자연에서 즐기는 스노우 카이트"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1587823992926-ac5631e54911?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'multi-adventure-utah',
      continent: '북미',
      country: '미국',
      location: '유타 주',
      activity: '종합 익스트림 스포츠',
      category: '익스트림 스포츠',
      coords: [39.3200, -111.0937],
      features: [
          "스키, 바이킹, 록 클라이밍, 래프팅 등 종합 액티비티",
          "세계적 수준의 스키장과 모압 슬릭록 트레일",
          "사계절 내내 다양한 모험 가능"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1563423984545-a7455d31b0a8?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'aerobatic-flight-vegas',
      continent: '북미',
      country: '미국',
      location: '라스베가스, 네바다',
      activity: '곡예 비행',
      category: '고공/항공 액티비티',
      coords: [36.1699, -115.1398],
      features: [
          "전문 조종사의 곡예 시연",
          "직접 조종 체험 포함",
          "비용 차등 적용 ($2,999~)"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1565427471678-2273d133f380?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'heli-glacier-hiking-juneau',
      continent: '북미',
      country: '미국',
      location: '주노, 알래스카',
      activity: '헬리콥터 빙하 트레킹',
      category: '트레킹 & 하이킹',
      coords: [58.3019, -134.4197],
      features: [
          "빙하 지형 위 트레킹",
          "캐년, 동굴, 크레바스 탐험",
          "초보자부터 전문가까지 가능"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1589922259199-2743a3f55734?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'bungee-jumping-cusco',
      continent: '중남미',
      country: '페루',
      location: '액션 밸리, 쿠스코',
      activity: '번지점프',
      category: '익스트림 스포츠',
      coords: [-13.5320, -71.9675],
      features: [
          "남미 대륙에서 가장 높은 번지점프",
          "쿠스코 근교 익스트림 중심지",
          "압도적인 고도감과 스릴"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1593456939590-b6f7281a8a2a?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'cotopaxi-volcano-climbing',
      continent: '중남미',
      country: '에콰도르',
      location: '코토팍시 화산',
      activity: '화산 정상 등반',
      category: '트레킹 & 하이킹',
      coords: [-0.6808, -78.4378],
      features: [
          "활화산 등반이라는 독특한 경험",
          "위험 요소가 공존하는 모험",
          "에콰도르 안데스의 대표 어드벤처"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1589332356249-14103a3d5f39?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'death-road-biking-bolivia',
      continent: '중남미',
      country: '볼리비아',
      location: '데스 로드, 라파즈~코로이코',
      activity: '산악 자전거',
      category: '익스트림 스포츠',
      coords: [-16.2896, -68.1193],
      features: [
          "'세계에서 가장 위험한 도로' 하강",
          "절벽과 안개 낀 산길의 조합",
          "극한의 MTB 라이딩"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1616790274224-635b71b1d431?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'santander-multi-adventure',
      continent: '중남미',
      country: '콜롬비아',
      location: '산탄데르 주',
      activity: '종합 익스트림 스포츠',
      category: '익스트림 스포츠',
      coords: [7.1347, -73.1250],
      features: [
          "콜롬비아 익스트림 스포츠의 수도",
          "화이트워터 래프팅, 동굴 탐험, 번지점프 등",
          "수아레스 강에서의 래프팅 인기"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1599824642711-b75388583486?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'w-trek-torres-del-paine',
      continent: '중남미',
      country: '칠레',
      location: '토레스 델 파이네 국립공원',
      activity: 'W 트레킹',
      category: '트레킹 & 하이킹',
      coords: [-51.0415, -73.0741],
      features: [
          "며칠간 이어지는 빙하, 산, 호수 코스",
          "야생동물 관찰 가능 (퓨마 포함)",
          "파타고니아의 대표 하이킹 루트"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1520038410233-165567b43936?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'hiking-el-calafate',
      continent: '중남미',
      country: '아르헨티나',
      location: '엘 칼라파테',
      activity: '하이킹',
      category: '트레킹 & 하이킹',
      coords: [-50.3379, -72.2648],
      features: [
          "피츠로이 산 경관 감상",
          "모든 수준의 트레일 제공",
          "하이킹 후 휴식 가능한 마을 분위기"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1589333584397-c6a6662193a9?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'hiking-cascavel-brazil',
      continent: '중남미',
      country: '브라질',
      location: '카스카벨',
      activity: '하이킹과 자연 탐험',
      category: '트레킹 & 하이킹',
      coords: [-24.9578, -53.4591],
      features: [
          "폭포와 강, 야생동물 조망",
          "접근성 좋은 트레일",
          "시립 산림과 라고 지역 포함"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1533279442031-64e322d35848?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'table-mountain-adventure',
    continent: '아프리카',
    country: '남아프리카',
    location: '테이블 마운틴, 케이프타운',
    activity: '종합 어드벤처 스포츠',
    category: '익스트림 스포츠',
    coords: [-33.9628, 18.4098],
    features: [
        "압세일링, 패러글라이딩, 하이킹, 록 클라이밍 등 다양한 액티비티",
        "해발 1,086미터의 평평한 정상",
        "6억 년 된 지형, 국립공원 전체가 어드벤처 스팟"
    ],
    imageUrl: 'https://images.unsplash.com/photo-1590659820393-4585c5314777?q=80&w=400&auto=format&fit=crop'
  },
  {
      id: 'kenya-wildlife-safari',
      continent: '아프리카',
      country: '케냐',
      location: '케냐 전역',
      activity: '야생동물 사파리와 문화 체험',
      category: '트레킹 & 하이킹',
      coords: [0.0236, 37.9062],
      features: [
          "빅5(사자, 코끼리, 버팔로, 표범, 코뿔소) 관찰 가능",
          "지속 가능한 여행과 몰입형 문화 체험 제공",
          "전통적인 아프리카 모험의 상징"
      ],
      imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=400&auto=format&fit=crop'
  },
  {
      "id": "2d1c6e1e-유리다리-걷기-및-스카이워크",
      "continent": "아시아",
      "country": "중국",
      "location": "장가계 국가삼림공원",
      "activity": "유리다리 걷기 및 스카이워크",
      "category": "익스트림 스포츠",
      "coords": [29.1187, 110.4792],
      "features": [
          "430미터 길이의 유리다리",
          "300미터 협곡 아래를 내려다보는 경험",
          "아바타 영화 촬영지"
      ],
      "imageUrl": "https://images.unsplash.com/photo-1598483741130-344c11f43a41?q=80&w=400&auto=format&fit=crop"
  },
  {
      "id": "e9e6b8c1-사막-오프로드-and-낙타-트레킹",
      "continent": "아시아",
      "country": "몽골",
      "location": "고비사막",
      "activity": "사막 오프로드 & 낙타 트레킹",
      "category": "사막/오프로드",
      "coords": [42.5833, 105.0000],
      "features": [
          "광활한 사막 오프로드 체험",
          "밤하늘 별 관측",
          "낙타와 함께하는 트레킹"
      ],
      "imageUrl": "https://images.unsplash.com/photo-1549646440-279f6b4055c5?q=80&w=400&auto=format&fit=crop"
  },
  {
      "id": "a9a8f3d4-고산-도로-로드트립",
      "continent": "아시아",
      "country": "타지키스탄",
      "location": "파미르 하이웨이",
      "activity": "고산 도로 로드트립",
      "category": "사막/오프로드",
      "coords": [38.4667, 72.2500],
      "features": [
          "세계에서 두 번째로 높은 국제도로",
          "아크바이탈 고개 (4,655m)",
          "극한 로드트립"
      ],
      "imageUrl": "https://images.unsplash.com/photo-1627885340801-9b16858e9a2b?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: '트롤퉁가-하이킹',
    continent: '유럽',
    country: '노르웨이',
    location: '오다 지역',
    activity: '트롤퉁가 하이킹',
    category: '트레킹 & 하이킹',
    coords: [60.1200, 6.7400],
    features: [
      '700미터 절벽 위 바위',
      '왕복 28km의 도전적인 코스',
      '세계적으로 유명한 포토 스팟'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '빙하-하이킹-바트나요쿨',
    continent: '유럽',
    country: '아이슬란드',
    location: '바트나요쿨 국립공원',
    activity: '빙하 하이킹과 얼음 동굴 탐험',
    category: '겨울/빙하 스포츠',
    coords: [64.1700, -16.6500],
    features: [
      '유럽 최대 빙하',
      '푸른 얼음 동굴',
      '스노우모빌 체험'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '카미노-델-레이-트레킹',
    continent: '유럽',
    country: '스페인',
    location: '말라가, 안달루시아',
    activity: '카미노 델 레이 트레킹',
    category: '트레킹 & 하이킹',
    coords: [36.9103, -4.7574],
    features: [
      '100미터 높이의 협곡 위 산책로',
      '3km 길이의 목재 트레일',
      '2015년 재건으로 안전 보장'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '세노테-다이빙',
    continent: '북미',
    country: '멕시코',
    location: '유카탄 반도',
    activity: '세노테 다이빙과 스노클링',
    category: '수상/해양 액티비티',
    coords: [20.4229, -87.3130],
    features: [
      '석회암 동굴 민물 다이빙',
      '그란 세노테, 도스 오호스',
      '지하 동굴 탐험'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '빅웨이브-서핑-하와이',
    continent: '북미',
    country: '미국',
    location: '하와이 노스쇼어',
    activity: '빅웨이브 서핑',
    category: '수상/해양 액티비티',
    coords: [21.6756, -158.0421],
    features: [
      '10-15미터 겨울 파도',
      '파이프라인, 선셋 비치',
      '세계 최고의 서핑 성지'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '위슬러-다운힐-마운틴바이크',
    continent: '북미',
    country: '캐나다',
    location: '위슬러',
    activity: '다운힐 마운틴 바이킹',
    category: '산악 스포츠',
    coords: [50.1163, -122.9574],
    features: [
      '200km 트레일',
      '세계 최대 바이크 파크',
      '여름 시즌 인기 액티비티'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '클라우드-포레스트-집라이닝',
    continent: '중남미',
    country: '코스타리카',
    location: '몬테베르데',
    activity: '클라우드 포레스트 집라이닝',
    category: '고공/항공 액티비티',
    coords: [10.3000, -84.8167],
    features: [
      '세계 최장 집라인',
      '열대 구름숲 상공 질주',
      '15개 플랫폼, 2.5km 길이'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '카이트서핑-윈드서핑-플로리아노폴리스',
    continent: '중남미',
    country: '브라질',
    location: '플로리아노폴리스',
    activity: '카이트서핑과 윈드서핑',
    category: '수상/해양 액티비티',
    coords: [-27.5954, -48.5480],
    features: [
      '42개 해변',
      '연중 강한 바람',
      '남미 최고의 수상 스포츠 명소'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '샌드보딩-아타카마',
    continent: '중남미',
    country: '칠레',
    location: '아타카마 사막',
    activity: '샌드보딩 & 천체 관측',
    category: '사막/오프로드',
    coords: [-24.5000, -69.2500],
    features: [
      '세계에서 가장 건조한 사막',
      '4x4 오프로드',
      '세계 최고의 천문 관측지'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '빅토리아-폭포-번지점프',
    continent: '아프리카',
    country: '잠비아/짐바브웨',
    location: '빅토리아 폭포',
    activity: '번지점프',
    category: '익스트림 스포츠',
    coords: [-17.9243, 25.8567],
    features: [
      '111미터 높이 번지점프',
      '폭포 바로 옆 점프',
      '세계 3대 번지점프 명소'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1604593923585-1157146599b4?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '사하라-낙타-샌드보딩',
    continent: '아프리카',
    country: '모로코',
    location: '사하라 사막',
    activity: '낙타 캐러밴 & 샌드보딩',
    category: '사막/오프로드',
    coords: [31.0000, -4.0000],
    features: [
      '에르그 체비 사구 횡단',
      '베르베르족 문화 체험',
      '사막 별 관측과 캠핑'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '치린지-디-범하라-하이킹',
    continent: '아프리카',
    country: '마다가스카르',
    location: '치린지 디 범하라',
    activity: '바위숲 하이킹과 동굴 탐험',
    category: '트레킹 & 하이킹',
    coords: [-17.1000, 45.1667],
    features: [
      '날카로운 석회암 바위숲',
      '세계자연유산',
      '특이종 동물 관찰'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '퀸스타운-어드벤처-종합',
    continent: '오세아니아',
    country: '뉴질랜드',
    location: '퀸스타운',
    activity: '어드벤처 스포츠 종합 체험',
    category: '익스트림 스포츠',
    coords: [-45.0312, 168.6626],
    features: [
      '번지점프 발상지',
      '스카이다이빙, 제트보트, 루지',
      '네비스 스윙 등 종합 익스트림'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '그레이트-배리어-리프-다이빙',
    continent: '오세아니아',
    country: '호주',
    location: '그레이트 배리어 리프',
    activity: '산호초 다이빙',
    category: '수상/해양 액티비티',
    coords: [-18.2871, 147.6992],
    features: [
      '세계 최대 산호초',
      '2,300km에 걸친 시스템',
      '900여 개 섬 탐험'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '베카-상어-다이빙',
    continent: '오세아니아',
    country: '피지',
    location: '베카 라군',
    activity: '상어 다이빙',
    category: '수상/해양 액티비티',
    coords: [-18.3000, 178.1167],
    features: [
      '8종 이상의 야생 상어',
      '직접 상어와 다이빙',
      '세계 유일 상어 다이빙 명소'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '일룰리사트-빙산-카약',
    continent: '극지방',
    country: '그린란드',
    location: '일룰리사트',
    activity: '빙산 사이 카약킹',
    category: 'Polar Zone',
    coords: [69.2167, -51.1000],
    features: [
      '빙피오르드 탐험',
      '도그 슬레딩',
      '유네스코 세계유산 빙산 지대'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '남극-빙하-하이킹',
    continent: '극지방',
    country: '남극',
    location: '남극반도',
    activity: '극지 탐험과 빙하 하이킹',
    category: 'Polar Zone',
    coords: [-64.0000, -56.0000],
    features: [
      '황제펭귄, 바다표범 관찰',
      '극한 빙하 하이킹',
      '지구 최남단 탐험'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '에버랜드',
    continent: '아시아',
    country: '대한민국',
    location: '용인시, 경기도',
    activity: '에버랜드',
    category: '놀이공원 & 복합 어드벤처',
    coords: [37.2946, 127.2025],
    features: [
      '한국 최대 테마파크',
      '99헥타르 규모, T Express 롤러코스터 보유',
      '2,000마리 이상 동물이 있는 주토피아 포함'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '유니버설-스튜디오-싱가포르',
    continent: '아시아',
    country: '싱가포르',
    location: '센토사 섬',
    activity: '유니버설 스튜디오',
    category: '놀이공원 & 복합 어드벤처',
    coords: [1.2540, 103.8238],
    features: [
      '7개 테마존 구성',
      '슈렉, 쥬라기공원, 미라, 배틀스타 갤럭티카 등 인기 IP',
      '연간 970만 관광객 유치'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '디즈니랜드-파리',
    continent: '유럽',
    country: '프랑스',
    location: '파리 근교',
    activity: '디즈니랜드 파리',
    category: '놀이공원 & 복합 어드벤처',
    coords: [48.8708, 2.7798],
    features: [
      '디즈니 캐릭터 테마 어트랙션',
      '퍼레이드 및 영화 기반 라이드',
      '유럽 대표 테마파크'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '유로파파크',
    continent: '유럽',
    country: '독일',
    location: '뤼스트',
    activity: '유로파파크',
    category: '놀이공원 & 복합 어드벤처',
    coords: [48.2675, 7.7217],
    features: [
      '독일 최대 테마파크',
      '13개 롤러코스터, 유로 댄스 페스티벌 개최지',
      '각 유럽 국가 테마존 구성'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '알튼-타워스',
    continent: '유럽',
    country: '영국',
    location: '스태퍼드셔, 잉글랜드',
    activity: '알튼 타워스',
    category: '놀이공원 & 복합 어드벤처',
    coords: [52.9864, -1.8924],
    features: [
      '10개 이상의 대형 롤러코스터',
      '계절 운영: 3월~11월',
      '공포 테마로 유명'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '시더-포인트',
    continent: '북미',
    country: '미국',
    location: '오하이오주, 이리 호수 연안',
    activity: '시더 포인트',
    category: '놀이공원 & 복합 어드벤처',
    coords: [41.4821, -82.6835],
    features: [
      '1870년 개장, 미국에서 두 번째로 오래된 테마파크',
      '다양한 어트랙션과 워터파크 겸비',
      '블루 스트릭, 아토믹 스크램블러 등 유명'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '캐나다스-원더랜드',
    continent: '북미',
    country: '캐나다',
    location: '온타리오주',
    activity: '캐나다스 원더랜드',
    category: '놀이공원 & 복합 어드벤처',
    coords: [43.8430, -79.5393],
    features: [
      '워터파크와 롤러코스터 결합',
      '레이지 리버를 타며 공원 경관 감상 가능',
      '캐나다 최대 테마파크'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '베토-카레로-월드',
    continent: '중남미',
    country: '브라질',
    location: '산타 카타리나주 펜하',
    activity: '베토 카레로 월드',
    category: '놀이공원 & 복합 어드벤처',
    coords: [-26.7754, -48.6181],
    features: [
      '라틴 아메리카 최대 규모 테마파크',
      '9개 테마 구역과 100개 이상 어트랙션',
      '목재 롤러코스터 파이어휩과 동물원 포함'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '식스-플래그스-멕시코',
    continent: '중남미',
    country: '멕시코',
    location: '멕시코시티 틀랄판',
    activity: '식스 플래그스 멕시코',
    category: '놀이공원 & 복합 어드벤처',
    coords: [19.2783, -99.2062],
    features: [
      '슈퍼걸, 원더우먼, X-플라이트 등 어트랙션',
      '세계 최고 펜듈럼 라이드 크라제니티 보유',
      '연간 200만 명 이상 방문'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '판타실란디아',
    continent: '중남미',
    country: '칠레',
    location: '산티아고 오히긴스 공원',
    activity: '판타실란디아',
    category: '놀이공원 & 복합 어드벤처',
    coords: [-33.4579, -70.6620],
    features: [
      '1978년 개장, 라틴 아메리카 인기 놀이공원',
      '마이닝 트레인, 부메랑, 랩터 등 운영',
      '가족 친화적 놀이기구 보유'
    ],
  }
]; 