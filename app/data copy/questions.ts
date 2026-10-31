
export type Question = {
  id: string;
  category: "Animals" | "Science" | "History" | "Money" | "World";
  question: string;
  a: {
    name: string;
    description: string;
    icon: string;
  };
  b: {
    name: string;
    description: string;
    icon: string;
  };
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
    },
    b: {
      name: "Venus",
      description: "Our bright neighbour",
      icon: "🟠",
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
];
