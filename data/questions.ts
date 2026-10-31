
export type Question = {
  id: string;
  category:
  | "Animals"
  | "Science"
  | "History"
  | "Money"
  | "World"
  | "Human"
  | "Technology"
  | "Sports"
  | "Nature"
  | "Society";
  question: string;
  a: { name: string; description: string; icon: string; image?: string };
  b: { name: string; description: string; icon: string; image?: string };
  answer: "a" | "b";
  headline: string;
  statistic: string;
  explanation: string;
  source: string;
  sourceUrl: string;
  year?: string;
};

export const questions: Question[] = [
  {
    id: "mosquito-vs-shark",
    category: "Animals",
    question: "Which kills more humans?",
    a: {
      name: "Shark",
      description: "The ocean predator",
      icon: "🦈",
    },
    b: {
      name: "Mosquito",
      description: "The tiny killer",
      icon: "🦟",
    },
    answer: "b",
    headline: "Tiny insect. Enormous impact.",
    statistic: "610,000",
    explanation:
      "Malaria alone caused an estimated 610,000 deaths worldwide in 2024. Mosquitoes transmit the parasite that causes the disease.",
    source: "World Health Organization — Malaria",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/malaria",
    year: "2024",
  },
  {
    id: "jupiter-vs-planets",
    category: "Science",
    question: "Which has more mass?",
    a: {
      name: "Jupiter",
      description: "The giant planet",
      icon: "🪐",
    },
    b: {
      name: "All other planets",
      description: "The remaining seven",
      icon: "🌌",
    },
    answer: "a",
    headline: "One planet outweighs the rest.",
    statistic: "More than 2×",
    explanation:
      "Jupiter has more than twice the mass of all the other planets in our solar system combined.",
    source: "NASA — Jupiter",
    sourceUrl: "https://science.nasa.gov/jupiter/",
  },
  {
    id: "venus-vs-mercury-day",
    category: "Science",
    question: "Which takes longer to rotate once?",
    a: {
      name: "Mercury",
      description: "Closest to the Sun",
      icon: "☿️",
      image:"/illustrations/mercury.svg",
    },
    b: {
      name: "Venus",
      description: "Our bright neighbour",
      icon: "🟠",
      image:"/illustrations/venus.svg",
    },
    answer: "b",
    headline: "A day longer than a year?",
    statistic: "243 Earth days",
    explanation:
      "Venus takes about 243 Earth days to rotate once on its axis. A full orbit around the Sun takes about 225 Earth days.",
    source: "NASA — Venus",
    sourceUrl: "https://science.nasa.gov/venus/",
  },
  {
    id: "nintendo-vs-eiffel-tower",
    category: "History",
    question: "Which was completed or founded first?",
    a: {
      name: "Nintendo",
      description: "The gaming company",
      icon: "🎮",
    },
    b: {
      name: "Eiffel Tower",
      description: "The Paris landmark",
      icon: "🗼",
    },
    answer: "b",
    headline: "The tower came first.",
    statistic: "March vs September 1889",
    explanation:
      "The Eiffel Tower was completed in March 1889. Nintendo was founded in September 1889, originally making Japanese playing cards.",
    source: "Eiffel Tower official website",
    sourceUrl: "https://www.toureiffel.paris/en",
    year: "1889",
  },
  {
    id: "oxford-vs-tenochtitlan",
    category: "History",
    question: "Which existed first?",
    a: {
      name: "Oxford University",
      description: "The historic university",
      icon: "🎓",
    },
    b: {
      name: "Tenochtitlan",
      description: "The Aztec capital",
      icon: "🏛️",
    },
    answer: "a",
    headline: "A university older than an empire's capital.",
    statistic: "1096 vs 1325",
    explanation:
      "Teaching at Oxford existed by 1096. Tenochtitlan, the Aztec capital, was founded in 1325.",
    source: "University of Oxford — History",
    sourceUrl: "https://www.ox.ac.uk/about/organisation/history",
  },

  
  {
    id: "roman-empire-vs-coca-cola",
    category: "History",
    question: "Which is older?",
    a: {
      name: "Roman Empire",
      description: "An ancient superpower",
      icon: "🏛️",
    },
    b: {
      name: "Coca-Cola",
      description: "The famous soft drink",
      icon: "🥤",
    },
    answer: "a",
    headline: "Ancient Rome beats modern soda.",
    statistic: "27 BC vs 1886",
    explanation:
      "The Roman Empire began in 27 BC. Coca-Cola was first served in 1886.",
    source: "Encyclopaedia Britannica — Roman Empire",
    sourceUrl: "https://www.britannica.com/place/Roman-Empire",
  },
  {
    id: "lightning-vs-sun",
    category: "Science",
    question: "Which can reach a higher temperature?",
    a: {
      name: "Lightning",
      description: "A powerful electrical discharge",
      icon: "⚡",
    },
    b: {
      name: "The Sun's surface",
      description: "Our star's visible surface",
      icon: "☀️",
    },
    answer: "a",
    headline: "Lightning can be hotter than the Sun.",
    statistic: "About 30,000 K",
    explanation:
      "A lightning channel can reach around 30,000 Kelvin, several times hotter than the Sun's visible surface at roughly 5,500 Kelvin.",
    source: "NOAA — Lightning",
    sourceUrl: "https://www.noaa.gov/jetstream/lightning",
  },
  {
    id: "sharks-vs-trees",
    category: "Animals",
    question: "Which has an older evolutionary history?",
    a: {
      name: "Sharks",
      description: "Ancient ocean predators",
      icon: "🦈",
    },
    b: {
      name: "Trees",
      description: "The giants of the plant world",
      icon: "🌳",
    },
    answer: "a",
    headline: "Sharks were here before trees.",
    statistic: "About 400 million years",
    explanation:
      "The fossil record of early shark relatives reaches back further than the earliest known trees. The exact dates depend on how scientists define early sharks.",
    source: "Natural History Museum — Shark evolution",
    sourceUrl: "https://www.nhm.ac.uk/discover/sharks.html",
  },
  {
    id: "black-death-vs-road-deaths",
    category: "Society",
    question: "Which caused more deaths?",
    a: {
      name: "Black Death",
      description: "The medieval plague pandemic",
      icon: "☠️",
    },
    b: {
      name: "Road crashes in one year",
      description: "Worldwide traffic deaths",
      icon: "🚗",
    },
    answer: "a",
    headline: "A medieval pandemic on an unimaginable scale.",
    statistic: "Tens of millions",
    explanation:
      "The Black Death killed tens of millions of people across Europe, Asia and North Africa. By comparison, around 1.19 million people die in road crashes worldwide each year.",
    source: "WHO — Road traffic injuries",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries",
  },
  {
    id: "saturn-vs-water",
    category: "Science",
    question: "Which has a lower average density?",
    a: {
      name: "Saturn",
      description: "The ringed planet",
      icon: "🪐",
    },
    b: {
      name: "Water",
      description: "Liquid water",
      icon: "💧",
    },
    answer: "a",
    headline: "Saturn is less dense than water.",
    statistic: "0.687 g/cm³",
    explanation:
      "Saturn's average density is about 0.687 grams per cubic centimetre, lower than liquid water at about 1 gram per cubic centimetre.",
    source: "NASA — Saturn",
    sourceUrl: "https://science.nasa.gov/saturn/",
  },

  
  {
    id: "venus-vs-mercury-temperature",
    category: "Science",
    question: "Which is hotter on average?",
    a: {
      name: "Venus",
      description: "The second planet from the Sun",
      icon: "🟠",
      image: "/illustrations/venus.svg",
    },
    b: {
      name: "Mercury",
      description: "The closest planet to the Sun",
      icon: "☿️",
      image: "/illustrations/mercury.svg",
    },
    answer: "a",
    headline: "The closest planet isn't the hottest.",
    statistic: "About 464°C",
    explanation:
      "Venus is hotter than Mercury because its thick atmosphere traps heat in an extreme greenhouse effect. Venus averages around 464°C, while Mercury's average is much lower.",
    source: "NASA — Solar System Temperatures",
    sourceUrl: "https://science.nasa.gov/resource/solar-system-temperatures/",
  },
  {
    id: "moon-vs-pluto",
    category: "Science",
    question: "Which is wider?",
    a: {
      name: "Earth's Moon",
      description: "Our natural satellite",
      icon: "🌕",
    },
    b: {
      name: "Pluto",
      description: "The dwarf planet",
      icon: "🪐",
    },
    answer: "a",
    headline: "Our Moon is bigger than Pluto.",
    statistic: "3,474 km vs 2,377 km",
    explanation:
      "The Moon has a diameter of about 3,474 kilometres, while Pluto is about 2,377 kilometres wide.",
    source: "NASA — Pluto Facts",
    sourceUrl: "https://science.nasa.gov/dwarf-planets/pluto/facts/",
  },
  {
    id: "peregrine-vs-cheetah",
    category: "Animals",
    question: "Which can reach a higher speed?",
    a: {
      name: "Peregrine Falcon",
      description: "The diving speed champion",
      icon: "🦅",
    },
    b: {
      name: "Cheetah",
      description: "The fastest land animal",
      icon: "🐆",
    },
    answer: "a",
    headline: "The sky beats the savannah.",
    statistic: "Up to 320 km/h",
    explanation:
      "A peregrine falcon can reach around 320 km/h in a hunting dive. A cheetah can reach around 100–103 km/h while sprinting on land.",
    source: "Guinness World Records — Fastest Diving Bird",
    sourceUrl: "https://www.guinnessworldrecords.com/world-records/70929-fastest-bird-diving",
  },
  {
    id: "mariana-trench-vs-everest",
    category: "World",
    question: "Which is farther from sea level?",
    a: {
      name: "Mount Everest",
      description: "The world's highest mountain",
      icon: "🏔️",
    },
    b: {
      name: "Challenger Deep",
      description: "The deepest known ocean point",
      icon: "🌊",
    },
    answer: "b",
    headline: "The ocean goes deeper than Everest rises.",
    statistic: "About 11,000 metres",
    explanation:
      "Challenger Deep in the Mariana Trench is about 11,000 metres below sea level. Mount Everest rises about 8,849 metres above it.",
    source: "NOAA — Mariana Trench",
    sourceUrl: "https://www.fisheries.noaa.gov/pacific-islands/habitat-conservation/mariana-trench-marine-national-monument",
  },
  {
    id: "statue-of-liberty-vs-eiffel-tower",
    category: "History",
    question: "Which weighs more?",
    a: {
      name: "Statue of Liberty",
      description: "New York's famous monument",
      icon: "🗽",
    },
    b: {
      name: "Eiffel Tower",
      description: "Paris's iron landmark",
      icon: "🗼",
    },
    answer: "b",
    headline: "The tower outweighs the statue.",
    statistic: "About 10,100 tonnes",
    explanation:
      "The Statue of Liberty itself weighs about 254 tonnes. The Eiffel Tower's metal structure weighs around 10,100 tonnes.",
    source: "National Park Service — Statue of Liberty Facts",
    sourceUrl: "https://www.nps.gov/stli/learn/statue-of-liberty-facts.htm",
  },
  {
    id: "human-brain-vs-lightbulb",
    category: "Human",
    question: "Which uses more power?",
    a: {
      name: "Human Brain",
      description: "Your body's control centre",
      icon: "🧠",
    },
    b: {
      name: "60-watt Light Bulb",
      description: "A traditional household bulb",
      icon: "💡",
    },
    answer: "b",
    headline: "A light bulb can use more power than your brain.",
    statistic: "60 watts vs about 20 watts",
    explanation:
      "The human brain uses roughly 20 watts of power. A traditional 60-watt incandescent bulb uses about three times as much.",
    source: "BrainFacts — Brain energy use",
    sourceUrl: "https://www.brainfacts.org/",
  },
  {
    id: "human-cells-vs-bacteria",
    category: "Science",
    question: "Which are estimated to be more numerous in your body?",
    a: {
      name: "Human Cells",
      description: "The cells that make you",
      icon: "🧬",
    },
    b: {
      name: "Bacteria",
      description: "The microbes living in and on you",
      icon: "🦠",
    },
    answer: "b",
    headline: "You're not made of human cells alone.",
    statistic: "Roughly 38 trillion vs 30 trillion",
    explanation:
      "One influential estimate puts the number of bacterial cells in and on an average human body at roughly 38 trillion, compared with about 30 trillion human cells. These are estimates, not fixed counts.",
    source: "Nature — Revisiting the ratio of bacterial to host cells",
    sourceUrl: "https://doi.org/10.1007/s40168-016-0228-7",
  },
  {
    id: "sahara-vs-australia",
    category: "World",
    question: "Which has a larger area?",
    a: {
      name: "Sahara Desert",
      description: "The world's largest hot desert",
      icon: "🏜️",
    },
    b: {
      name: "Australia",
      description: "The island continent",
      icon: "🦘",
    },
    answer: "a",
    headline: "A desert bigger than a continent-sized country.",
    statistic: "About 9.2 vs 7.7 million km²",
    explanation:
      "The Sahara covers roughly 9.2 million square kilometres. Australia's total area is about 7.7 million square kilometres.",
    source: "Encyclopaedia Britannica — Sahara",
    sourceUrl: "https://www.britannica.com/place/Sahara-desert-Africa",
  },
  {
    id: "great-wall-vs-earth-circumference",
    category: "World",
    question: "Which is longer?",
    a: {
      name: "Great Wall of China",
      description: "The historic wall system",
      icon: "🧱",
    },
    b: {
      name: "Earth's Circumference",
      description: "Around our planet at the equator",
      icon: "🌍",
    },
    answer: "b",
    headline: "The whole Great Wall can't go around Earth.",
    statistic: "21,196 km vs 40,075 km",
    explanation:
      "The total length of the Great Wall system is about 21,196 kilometres. Earth's equatorial circumference is about 40,075 kilometres.",
    source: "NASA — Earth Facts",
    sourceUrl: "https://science.nasa.gov/earth/facts/",
  },
  {
    id: "cleopatra-vs-moon-landing",
    category: "History",
    question: "Which happened closer to today?",
    a: {
      name: "Cleopatra's Reign",
      description: "The last active ruler of Ptolemaic Egypt",
      icon: "👑",
    },
    b: {
      name: "First Moon Landing",
      description: "Amazing",
      icon: "🚀",
    },
    answer: "b",
    headline: "Cleopatra is ancient history. The Moon landing is much closer.",
    statistic: "30 BC vs 1969",
    explanation:
      "Cleopatra died in 30 BC. The first human Moon landing took place in 1969, nearly two thousand years later.",
    source: "NASA — Apollo 11",
    sourceUrl: "https://www.nasa.gov/mission/apollo-11/",
  },

  
{
  id: "pluto-vs-russia",
  category: "Science",
  question: "Which has a larger surface area?",
  a: {
    name: "Pluto",
    description: "The dwarf planet",
    icon: "🪐",
  },
  b: {
    name: "Russia",
    description: "The world's largest country",
    icon: "🇷🇺",
  },
  answer: "a",
  headline: "Pluto has a larger surface area than Russia.",
  statistic: "Pluto: 17.8 million km². Russia: 17.1 million km².",
  explanation:
    "Despite being a tiny world in the outer Solar System, Pluto's total surface area is slightly larger than Russia's land area.",
  source: "NASA and World Bank",
  sourceUrl: "https://science.nasa.gov/dwarf-planets/pluto/",
},
{
  id: "trees-vs-milky-way-stars",
  category: "Nature",
  question: "Which are more numerous?",
  a: {
    name: "Trees on Earth",
    description: "All the trees across our planet",
    icon: "🌳",
  },
  b: {
    name: "Stars in the Milky Way",
    description: "Our home galaxy",
    icon: "✨",
  },
  answer: "a",
  headline: "Earth has more trees than the Milky Way has stars.",
  statistic: "About 3 trillion trees vs 100–400 billion stars.",
  explanation:
    "Scientists estimate that Earth has roughly 3 trillion trees. The Milky Way is estimated to contain around 100–400 billion stars.",
  source: "Nature and NASA",
  sourceUrl: "https://www.nature.com/articles/nature14967",
},
{
  id: "methuselah-vs-great-pyramid",
  category: "History",
  question: "Which is older?",
  a: {
    name: "Methuselah Tree",
    description: "An ancient bristlecone pine",
    icon: "🌲",
  },
  b: {
    name: "Great Pyramid",
    description: "The pyramid of Giza",
    icon: "🔺",
  },
  answer: "a",
  headline: "A living tree is older than the Great Pyramid.",
  statistic: "Methuselah is over 4,800 years old.",
  explanation:
    "The ancient bristlecone pine known as Methuselah began growing before the Great Pyramid of Giza was built.",
  source: "Guinness World Records",
  sourceUrl: "https://www.guinnessworldrecords.com/",
},
{
  id: "moon-vs-africa",
  category: "Science",
  question: "Which has a larger surface area?",
  a: {
    name: "The Moon",
    description: "Earth's natural satellite",
    icon: "🌕",
  },
  b: {
    name: "Africa",
    description: "The world's second-largest continent",
    icon: "🌍",
  },
  answer: "a",
  headline: "The Moon is larger than Africa by surface area.",
  statistic: "Moon: 37.9 million km². Africa: 30.4 million km².",
  explanation:
    "The Moon's total surface area is around 25% larger than the area of the African continent.",
  source: "NASA and African Union",
  sourceUrl: "https://science.nasa.gov/moon/facts/",
},
{
  id: "humans-vs-wild-mammals-biomass",
  category: "Human",
  question: "Which has more total biomass by carbon mass?",
  a: {
    name: "All Humans",
    description: "The entire human population",
    icon: "🧍",
  },
  b: {
    name: "Wild Mammals",
    description: "All wild mammal species combined",
    icon: "🐘",
  },
  answer: "a",
  headline: "Humans outweigh all wild mammals combined.",
  statistic: "Humans: 0.06 gigatons. Wild mammals: 0.007 gigatons of carbon.",
  explanation:
    "When measured by carbon mass, humans have roughly nine times the biomass of all wild mammals combined. This comparison excludes livestock.",
  source: "Bar-On et al., The biomass distribution on Earth",
  sourceUrl: "https://doi.org/10.1073/pnas.1711842115",
},
{
  id: "earth-equator-vs-sound",
  category: "Science",
  question: "Which moves faster?",
  a: {
    name: "Earth's Equator",
    description: "The ground moving due to Earth's rotation",
    icon: "🌍",
  },
  b: {
    name: "Speed of Sound",
    description: "In air at sea level and 20°C",
    icon: "🔊",
  },
  answer: "a",
  headline: "The ground beneath your feet moves faster than sound.",
  statistic: "About 1,670 km/h vs 1,235 km/h.",
  explanation:
    "Because Earth rotates, a point on the equator travels around the planet at roughly 1,670 km/h. That is faster than sound travels through air at sea level under the stated conditions.",
  source: "PAGASA",
  sourceUrl: "https://www.pagasa.dost.gov.ph/",
},
{
  id: "lightning-vs-sun-surface",
  category: "Science",
  question: "Which reaches a higher temperature?",
  a: {
    name: "Lightning",
    description: "The air inside a lightning channel",
    icon: "⚡",
  },
  b: {
    name: "Sun's Surface",
    description: "The visible photosphere",
    icon: "☀️",
  },
  answer: "a",
  headline: "Lightning can be hotter than the surface of the Sun.",
  statistic: "Lightning: around 30,000 K. Sun: around 5,778 K.",
  explanation:
    "A lightning channel can heat the surrounding air to roughly five times the temperature of the Sun's visible surface.",
  source: "National Weather Service",
  sourceUrl: "https://www.weather.gov/safety/lightning-science",
},
{
  id: "last-mammoths-vs-great-pyramid",
  category: "History",
  question: "Which came later?",
  a: {
    name: "Great Pyramid",
    description: "The ancient Egyptian monument",
    icon: "🔺",
  },
  b: {
    name: "Last Woolly Mammoths",
    description: "The isolated population on Wrangel Island",
    icon: "🦣",
  },
  answer: "b",
  headline: "Woolly mammoths survived after the Great Pyramid was built.",
  statistic: "The last mammoths survived until around 4,000 years ago.",
  explanation:
    "A small population of woolly mammoths survived on Wrangel Island thousands of years after the Great Pyramid was constructed.",
  source: "University of Helsinki",
  sourceUrl: "https://www.helsinki.fi/en",
},
{
  id: "tokyo-vs-australia-population",
  category: "World",
  question: "Which has more people?",
  a: {
    name: "Tokyo",
    description: "The metropolitan urban agglomeration",
    icon: "🇯🇵",
  },
  b: {
    name: "Australia",
    description: "The entire country",
    icon: "🇦🇺",
  },
  answer: "a",
  headline: "Tokyo has more people than the whole of Australia.",
  statistic: "Tokyo: 33.4 million. Australia: 27.8 million.",
  explanation:
    "The comparison uses the UN's 2025 estimate for Tokyo's urban agglomeration and Australia's population at the end of 2025.",
  source: "UN World Urbanization Prospects 2025",
  sourceUrl: "https://population.un.org/wup/",
  year: "2025",
},
{
  id: "baikal-vs-great-lakes",
  category: "Nature",
  question: "Which contains more water?",
  a: {
    name: "Lake Baikal",
    description: "The world's deepest freshwater lake",
    icon: "🌊",
  },
  b: {
    name: "Five Great Lakes",
    description: "North America's famous lake system",
    icon: "🏞️",
  },
  answer: "a",
  headline: "Lake Baikal holds slightly more water than all five Great Lakes combined.",
  statistic: "Baikal: 23,000 km³. Great Lakes: 22,684 km³.",
  explanation:
    "Lake Baikal in Siberia contains an enormous volume of freshwater, slightly exceeding the combined volume of North America's five Great Lakes.",
  source: "USGS and US EPA",
  sourceUrl: "https://www.usgs.gov/",
},
{
  id: "eiffel-vs-hitler",
  category: "History",
  question: "Which came first?",
  a: {
    name: "Eiffel Tower",
    description: "The iconic Paris landmark",
    icon: "🗼",
  },
  b: {
    name: "Hitler's Birth",
    description: "Evil",
    icon: "📅",
  },
  answer: "a",
  headline: "The Eiffel Tower is older than Hitler.",
  statistic: "March 31, 1889 — 20 days before Hitler was born.",
  explanation:
    "The Eiffel Tower was inaugurated on March 31, 1889. Adolf Hitler was born on April 20, 1889. One of the world's most recognizable landmarks is slightly older than one of history's most infamous dictators.",
  source: "Eiffel Tower Official History",
  sourceUrl: "https://www.toureiffel.paris/en/the-monument/history",
  year: "1889",
},



];
