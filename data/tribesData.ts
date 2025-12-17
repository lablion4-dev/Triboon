export interface Tribe {
  id: string;
  name: string;
  country: string;
  region: string;
  population: string;
  language: string;
  description: string;
  history: string;
  culture: string;
  traditions: string[];
  art: string[];
  gallery: string[];
  guardian: string; // Reference to main mask image
}

export interface Country {
  id: string;
  name: string;
  region: string;
  tribes: Tribe[];
}

export const AFRICAN_REGIONS = [
  { id: 'west', name: 'West Africa', description: 'Home to the great kingdoms and vibrant cultures' },
  { id: 'east', name: 'East Africa', description: 'Cradle of humanity and diverse ethnic groups' },
  { id: 'central', name: 'Central Africa', description: 'Rainforest peoples and ancient traditions' },
  { id: 'southern', name: 'Southern Africa', description: 'Bushmen, Zulu, and rich cultural heritage' },
  { id: 'north', name: 'North Africa', description: 'Berber, Tuareg, and desert nomads' }
];

export const COUNTRIES: Country[] = [
  // West Africa
  {
    id: 'nigeria',
    name: 'Nigeria',
    region: 'west',
    tribes: [
      {
        id: 'yoruba',
        name: 'Yoruba',
        country: 'Nigeria',
        region: 'West Africa',
        population: '40+ million',
        language: 'Yoruba',
        description: 'The Yoruba people are one of the largest ethnic groups in Africa, renowned for their complex religious beliefs, sophisticated art, and influential kingdoms.',
        history: 'The Yoruba civilization dates back to 500 BCE, with major kingdoms like Oyo, Ife, and Benin. They developed advanced bronze casting, textile arts, and a complex pantheon of gods.',
        culture: 'Yoruba culture centers around Ifa divination, the Orisha pantheon, and the concept of destiny (ori). They are famous for their masked performances, textile weaving, and bronze casting.',
        traditions: ['Ifa Divination', 'Gelede Masking', 'Egungun Ancestral Rites', 'Ayan Agba Drumming'],
        art: ['Bronze Casting', 'Carved Doors', 'Textile Weaving', 'Mask Making', 'Beadwork'],
        gallery: ['yoruba-mask-1', 'yoruba-bronze-1', 'yoruba-textile-1'],
        guardian: 'yoruba-guardian'
      },
      {
        id: 'hausa',
        name: 'Hausa',
        country: 'Nigeria',
        region: 'West Africa',
        population: '30+ million',
        language: 'Hausa',
        description: 'The Hausa people are predominantly Muslim merchants and traders who built powerful city-states across West Africa.',
        history: 'The Hausa city-states emerged around 1000 CE, with notable kingdoms like Kano, Zaria, and Katsina. They became centers of Islamic learning and trans-Saharan trade.',
        culture: 'Hausa culture blends Islamic traditions with indigenous African customs. They are renowned for leather working, architecture, and commercial expertise.',
        traditions: ['Durbar Festivals', 'Islamic Learning', 'Traditional Crafts', 'Commercial Networks'],
        art: ['Leather Working', 'Architecture', 'Calligraphy', 'Metal Work', 'Textile Printing'],
        gallery: ['hausa-leather-1', 'hausa-architecture-1', 'hausa-crafts-1'],
        guardian: 'hausa-guardian'
      },
      {
        id: 'igbo',
        name: 'Igbo',
        country: 'Nigeria',
        region: 'West Africa',
        population: '25+ million',
        language: 'Igbo',
        description: 'The Igbo are known for their democratic traditions, elaborate masquerade ceremonies, and sophisticated legal systems.',
        history: 'The Igbo developed without centralized kingdoms, instead maintaining village democracies and age-grade systems. They were central to the anti-colonial resistance.',
        culture: 'Igbo culture emphasizes individual achievement, collective decision-making, and spiritual connection to ancestors. Famous for their masquerade traditions.',
        traditions: ['Mmanwu Masquerades', 'Age-Grade Systems', 'Yam Festivals', 'Igbo Traditional Religion'],
        art: ['Mask Making', 'Bronze Work', 'Textile Arts', 'Wood Carving', 'Body Scarification'],
        gallery: ['igbo-mask-1', 'igbo-bronze-1', 'igbo-textile-1'],
        guardian: 'igbo-guardian'
      }
    ]
  },
  {
    id: 'ghana',
    name: 'Ghana',
    region: 'west',
    tribes: [
      {
        id: 'ashanti',
        name: 'Ashanti',
        country: 'Ghana',
        region: 'West Africa',
        population: '5+ million',
        language: 'Twi',
        description: 'The Ashanti Empire was one of the most powerful kingdoms in West Africa, known for their gold work and sophisticated political system.',
        history: 'Founded by Osei Tutu in 1670, the Ashanti Empire controlled vast territories through military conquest and diplomatic alliances. They controlled gold trade routes.',
        culture: 'Ashanti culture revolves around the Golden Stool, divine kingship, and elaborate court ceremonies. Known for their gold craftsmanship and kente cloth.',
        traditions: ['Golden Stool Ceremonies', 'Akan Royal Courts', 'Adinkra Symbolism', 'Akan Traditional Religion'],
        art: ['Gold Working', 'Kente Weaving', 'Stool Carving', 'Adinkra Printing', 'Brass Casting'],
        gallery: ['ashanti-gold-1', 'ashanti-kente-1', 'ashanti-stool-1'],
        guardian: 'ashanti-guardian'
      }
    ]
  },
  {
    id: 'mali',
    name: 'Mali',
    region: 'west',
    tribes: [
      {
        id: 'mandinka',
        name: 'Mandinka',
        country: 'Mali',
        region: 'West Africa',
        population: '10+ million',
        language: 'Mandinka',
        description: 'The Mandinka people are the descendants of the great Mali Empire builders, known for their oral traditions and Islamic scholarship.',
        history: 'Descendants of the Mali Empire builders, the Mandinka carried forward the legacy of Mansa Musa and the famous university of Timbuktu.',
        culture: 'Mandinka culture emphasizes education, Islamic values, and the preservation of oral histories. Famous for griots and traditional music.',
        traditions: ['Griots Oral Tradition', 'Islamic Scholarship', 'Traditional Music', 'Coming of Age Ceremonies'],
        art: ['Storytelling', 'Traditional Music', 'Calligraphy', 'Wood Carving', 'Pottery'],
        gallery: ['mandinka-griot-1', 'mandinka-music-1', 'mandinka-art-1'],
        guardian: 'mandinka-guardian'
      }
    ]
  },

  // East Africa
  {
    id: 'kenya',
    name: 'Kenya',
    region: 'east',
    tribes: [
      {
        id: 'maasai',
        name: 'Maasai',
        country: 'Kenya',
        region: 'East Africa',
        population: '1.5+ million',
        language: 'Maasai',
        description: 'The Maasai are semi-nomadic pastoralists known for their distinctive customs, jumping dances, and traditional warrior culture.',
        history: 'The Maasai migrated to Kenya and Tanzania in the 15th century, developing a unique lifestyle centered around cattle herding in the savanna.',
        culture: 'Maasai culture is built around the age-set system, cattle wealth, and elaborate rites of passage. Famous for their warrior traditions and jumping dances.',
        traditions: ['Adumu Jumping Dance', 'Age-Set System', 'Cattle Ceremonies', 'Eunoto Graduation'],
        art: ['Beadwork', 'Warrior Weapons', 'Traditional Dress', 'Shield Making', 'Body Painting'],
        gallery: ['maasai-dance-1', 'maasai-beadwork-1', 'maasai-warrior-1'],
        guardian: 'maasai-guardian'
      },
      {
        id: 'kikuyu',
        name: 'Kikuyu',
        country: 'Kenya',
        region: 'East Africa',
        population: '8+ million',
        language: 'Gikuyu',
        description: 'The Kikuyu are Kenya\'s largest ethnic group, known for their agricultural expertise and significant role in Kenya\'s independence movement.',
        history: 'The Kikuyu settled on Mount Kenya\'s slopes around 1500 CE, developing terraced agriculture and a complex social organization around the Mukanda initiation.',
        culture: 'Kikuyu culture emphasizes agriculture, initiation rites, and connection to Mount Kenya. Played crucial roles in Kenya\'s independence movement.',
        traditions: ['Mukanda Initiation', 'Agricultural Ceremonies', 'Mount Kenya Worship', 'Uhuru Movement'],
        art: ['Wood Carving', 'Pottery', 'Traditional Basketry', 'Body Art', 'Musical Instruments'],
        gallery: ['kikuyu-ceremony-1', 'kikuyu-art-1', 'kikuyu-tradition-1'],
        guardian: 'kikuyu-guardian'
      }
    ]
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    region: 'east',
    tribes: [
      {
        id: 'hadzabe',
        name: 'Hadzabe',
        country: 'Tanzania',
        region: 'East Africa',
        population: '1,000-1,300',
        language: 'Hadza',
        description: 'The Hadzabe are one of the last hunter-gatherer societies in Africa, maintaining ancient traditions of survival and spiritual connection to the land.',
        history: 'The Hadzabe are among Africa\'s oldest inhabitants, with archaeological evidence suggesting continuous presence for over 10,000 years in the Lake Eyasi region.',
        culture: 'Hadzabe culture revolves around hunting and gathering, sharing food, and maintaining close ties to the natural world. They use click consonants.',
        traditions: ['Hunter-Gatherer Lifestyle', 'Traditional Hunting', 'Gathering Ceremonies', 'Spiritual Practices'],
        art: ['Traditional Tools', 'Body Painting', 'Traditional Dress', 'Rock Paintings', 'Musical Instruments'],
        gallery: ['hadzabe-hunting-1', 'hadzabe-culture-1', 'hadzabe-tradition-1'],
        guardian: 'hadzabe-guardian'
      }
    ]
  },

  // Southern Africa
  {
    id: 'south-africa',
    name: 'South Africa',
    region: 'southern',
    tribes: [
      {
        id: 'zulu',
        name: 'Zulu',
        country: 'South Africa',
        region: 'Southern Africa',
        population: '12+ million',
        language: 'Zulu',
        description: 'The Zulu people built one of Africa\'s most powerful kingdoms under Shaka Zulu, known for their military prowess and rich cultural traditions.',
        history: 'Under Shaka Zulu (1816-1828), the Zulu created one of the most formidable military powers in African history, controlling much of southeastern Africa.',
        culture: 'Zulu culture emphasizes military valor, cattle wealth, and complex marriage customs. Famous for their warrior traditions and traditional ceremonies.',
        traditions: ['Umhlanga Reed Dance', 'Traditional Warriors', 'Cattle Ceremonies', 'Royal Zulu Ceremonies'],
        art: ['Warrior Shields', 'Traditional Dress', 'Beadwork', 'Warrior Weapons', 'Traditional Pottery'],
        gallery: ['zulu-warrior-1', 'zulu-ceremony-1', 'zulu-culture-1'],
        guardian: 'zulu-guardian'
      },
      {
        id: 'san',
        name: 'San',
        country: 'South Africa',
        region: 'Southern Africa',
        population: '100,000',
        language: 'Khoisan',
        description: 'The San are among the world\'s oldest continuous cultures, renowned for their rock art, click languages, and profound knowledge of the natural world.',
        history: 'The San have lived in Southern Africa for over 20,000 years, creating the world\'s oldest known rock art and developing sophisticated survival techniques.',
        culture: 'San culture centers on shamanistic practices, rock art, and deep spiritual connection to the land. They possess extensive botanical and astronomical knowledge.',
        traditions: ['Rock Art Creation', 'Shamanistic Practices', 'Traditional Healing', 'Hunting Rituals'],
        art: ['Rock Paintings', 'Traditional Tools', 'Body Art', 'Musical Instruments', 'Dance'],
        gallery: ['san-rockart-1', 'san-culture-1', 'san-tradition-1'],
        guardian: 'san-guardian'
      }
    ]
  },

  // Central Africa
  {
    id: 'congo',
    name: 'Democratic Republic of Congo',
    region: 'central',
    tribes: [
      {
        id: 'bantu',
        name: 'Bantu Peoples',
        country: 'Democratic Republic of Congo',
        region: 'Central Africa',
        population: '30+ million',
        language: 'Lingala, Kikongo, Swahili',
        description: 'The Bantu peoples of Central Africa maintain rich traditions of mask-making, sculpture, and spiritual practices in harmony with the rainforest.',
        history: 'The Bantu expansion brought ironworking, agriculture, and complex social systems to Central Africa, creating diverse kingdoms and societies.',
        culture: 'Central African Bantu cultures emphasize mask traditions, ancestral worship, and sophisticated sculpture. Known for their rainforest adaptations.',
        traditions: ['Mask Ceremonies', 'Ancestral Worship', 'Traditional Healing', 'Initiation Rites'],
        art: ['Mask Making', 'Sculpture', 'Traditional Weapons', 'Body Art', 'Musical Instruments'],
        gallery: ['bantu-mask-1', 'bantu-sculpture-1', 'bantu-culture-1'],
        guardian: 'bantu-guardian'
      }
    ]
  },

  // North Africa
  {
    id: 'morocco',
    name: 'Morocco',
    region: 'north',
    tribes: [
      {
        id: 'berber',
        name: 'Berber (Amazigh)',
        country: 'Morocco',
        region: 'North Africa',
        population: '15+ million',
        language: 'Tamazight',
        description: 'The Berber (Amazigh) people are the indigenous inhabitants of North Africa, known for their resilience, carpet weaving, and ancient traditions.',
        history: 'The Berber people have inhabited North Africa for over 4,000 years, developing sophisticated civilizations and maintaining their distinct identity through centuries of foreign rule.',
        culture: 'Amazigh culture emphasizes family, hospitality, and connection to the land. Famous for their carpet weaving, jewelry making, and oral traditions.',
        traditions: ['Seasonal Festivals', 'Carpet Weaving', 'Traditional Crafts', 'Hospitality Customs'],
        art: ['Carpet Weaving', 'Jewelry Making', 'Traditional Architecture', 'Pottery', 'Metal Work'],
        gallery: ['berber-carpet-1', 'berber-jewelry-1', 'berber-culture-1'],
        guardian: 'berber-guardian'
      },
      {
        id: 'tuareg',
        name: 'Tuareg',
        country: 'Morocco',
        region: 'North Africa',
        population: '2+ million',
        language: 'Tamashek',
        description: 'The Tuareg are the "Blue People of the Sahara," renowned for their nomadic lifestyle, camel caravans, and beautiful silver jewelry.',
        history: 'The Tuareg emerged as powerful caravan traders across the Sahara, controlling trans-Saharan trade routes and maintaining independence for centuries.',
        culture: 'Tuareg culture centers around nomadic traditions, camel herding, and the famous silver jewelry worn by men. They are master desert navigators.',
        traditions: ['Camel Caravans', 'Silver Jewelry Making', 'Desert Navigation', 'Poetry and Song'],
        art: ['Silver Jewelry', 'Leather Working', 'Traditional Weapons', 'Musical Instruments', 'Desert Architecture'],
        gallery: ['tuareg-jewelry-1', 'tuareg-caravan-1', 'tuareg-culture-1'],
        guardian: 'tuareg-guardian'
      }
    ]
  }
];

// Search function for the dictionary
export const searchTribes = (query: string): Tribe[] => {
  if (!query.trim()) return [];
  
  const lowercaseQuery = query.toLowerCase();
  const results: Tribe[] = [];
  
  COUNTRIES.forEach(country => {
    country.tribes.forEach(tribe => {
      if (
        tribe.name.toLowerCase().includes(lowercaseQuery) ||
        tribe.country.toLowerCase().includes(lowercaseQuery) ||
        tribe.region.toLowerCase().includes(lowercaseQuery) ||
        tribe.language.toLowerCase().includes(lowercaseQuery) ||
        tribe.description.toLowerCase().includes(lowercaseQuery) ||
        tribe.culture.toLowerCase().includes(lowercaseQuery)
      ) {
        results.push(tribe);
      }
    });
  });
  
  return results;
};

// Get tribes by region
export const getTribesByRegion = (regionId: string): Tribe[] => {
  const country = COUNTRIES.find(c => c.region === regionId);
  return country ? country.tribes : [];
};

// Get tribe by ID
export const getTribeById = (tribeId: string): Tribe | undefined => {
  for (const country of COUNTRIES) {
    const tribe = country.tribes.find(t => t.id === tribeId);
    if (tribe) return tribe;
  }
  return undefined;
};