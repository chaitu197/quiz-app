// TriviaTrek Quiz Data - Complete Structure with Subtopics
// 20 Topics × 2-3 Subtopics × 20 Questions = ~1,200 Questions

export const quizCategories = [
    {
        id: 'sports', title: 'Sports', description: 'Latest events, records, World Cups, Olympics', icon: '⚽', gradient: 'from-orange-500 to-red-600', color: 'orange',
        subtopics: [
            { id: 'football', name: 'Football', icon: '⚽', description: 'World Cups, leagues, players' },
            { id: 'cricket', name: 'Cricket', icon: '🏏', description: 'Test, ODI, T20, IPL' },
            { id: 'basketball', name: 'Basketball', icon: '🏀', description: 'NBA, players, championships' }
        ]
    },
    {
        id: 'geopolitics', title: 'Geopolitics', description: 'G20, wars, alliances, elections, UN, NATO', icon: '🌍', gradient: 'from-blue-500 to-cyan-600', color: 'blue',
        subtopics: [
            { id: 'organizations', name: 'International Organizations', icon: '🏛️', description: 'UN, NATO, EU, G7, G20' },
            { id: 'conflicts', name: 'Global Conflicts', icon: '⚔️', description: 'Wars, tensions, peace' },
            { id: 'elections', name: 'Elections & Democracy', icon: '🗳️', description: 'Major elections, politics' }
        ]
    },
    {
        id: 'geography', title: 'Maps & Geography', description: 'Capitals, borders, flags, locations', icon: '🗺️', gradient: 'from-green-500 to-emerald-600', color: 'green',
        subtopics: [
            { id: 'countries', name: 'Countries & Capitals', icon: '🏙️', description: 'Nations, capitals, borders' },
            { id: 'physical', name: 'Rivers & Mountains', icon: '⛰️', description: 'Physical geography' },
            { id: 'flags', name: 'Flags & Landmarks', icon: '🚩', description: 'National symbols' }
        ]
    },
    {
        id: 'technology', title: 'Technology & AI', description: 'Latest inventions, companies, breakthroughs', icon: '💻', gradient: 'from-purple-500 to-pink-600', color: 'purple',
        subtopics: [
            { id: 'ai', name: 'Artificial Intelligence', icon: '🤖', description: 'ChatGPT, ML, AI companies' },
            { id: 'programming', name: 'Programming & Software', icon: '👨‍💻', description: 'Languages, frameworks' },
            { id: 'hardware', name: 'Hardware & Gadgets', icon: '📱', description: 'Phones, computers, tech' }
        ]
    },
    {
        id: 'space', title: 'Space & Science', description: 'ISRO, NASA, SpaceX, discoveries', icon: '🚀', gradient: 'from-indigo-500 to-purple-600', color: 'indigo',
        subtopics: [
            { id: 'exploration', name: 'Space Exploration', icon: '🛸', description: 'NASA, SpaceX, missions' },
            { id: 'astronomy', name: 'Astronomy', icon: '🌌', description: 'Planets, stars, galaxies' },
            { id: 'science', name: 'Scientific Discoveries', icon: '🔬', description: 'Physics, chemistry, biology' }
        ]
    },
    {
        id: 'economy', title: 'World Economy & Stocks', description: 'Inflation, currencies, top companies', icon: '💰', gradient: 'from-yellow-500 to-orange-600', color: 'yellow',
        subtopics: [
            { id: 'markets', name: 'Stock Markets', icon: '📈', description: 'Indices, trading, stocks' },
            { id: 'crypto', name: 'Cryptocurrencies', icon: '₿', description: 'Bitcoin, blockchain, DeFi' },
            { id: 'global', name: 'Global Economics', icon: '🌐', description: 'GDP, inflation, trade' }
        ]
    },
    {
        id: 'environment', title: 'Environment & Climate', description: 'COP summits, global warming, wildlife', icon: '🌱', gradient: 'from-teal-500 to-green-600', color: 'teal',
        subtopics: [
            { id: 'climate', name: 'Climate Change', icon: '🌡️', description: 'Global warming, COP' },
            { id: 'energy', name: 'Renewable Energy', icon: '⚡', description: 'Solar, wind, green tech' },
            { id: 'wildlife', name: 'Wildlife & Conservation', icon: '🐾', description: 'Species, forests, oceans' }
        ]
    },
    {
        id: 'current-affairs', title: 'Current Affairs', description: 'Top weekly global news', icon: '📰', gradient: 'from-red-500 to-pink-600', color: 'red',
        subtopics: [
            { id: '2024', name: '2024 Events', icon: '📅', description: 'Major 2024 news' },
            { id: '2023', name: '2023 Events', icon: '📆', description: 'Historical recap' },
            { id: 'breaking', name: 'Breaking News', icon: '🔴', description: 'Recent developments' }
        ]
    },
    {
        id: 'entertainment', title: 'Entertainment', description: 'Oscars, award shows, Netflix, trending artists', icon: '🎬', gradient: 'from-pink-500 to-rose-600', color: 'pink',
        subtopics: [
            { id: 'movies', name: 'Movies & Cinema', icon: '🎥', description: 'Oscars, box office' },
            { id: 'music', name: 'Music & Artists', icon: '🎵', description: 'Grammy, albums, concerts' },
            { id: 'streaming', name: 'Streaming & TV', icon: '📺', description: 'Netflix, series, shows' }
        ]
    },
    {
        id: 'history', title: 'History & Culture', description: 'UNESCO sites, historical events', icon: '🏛️', gradient: 'from-amber-500 to-yellow-600', color: 'amber',
        subtopics: [
            { id: 'ancient', name: 'Ancient History', icon: '🏺', description: 'Civilizations, empires' },
            { id: 'modern', name: 'Modern History', icon: '📜', description: 'World Wars, revolutions' },
            { id: 'culture', name: 'Cultural Heritage', icon: '🎭', description: 'UNESCO sites, traditions' }
        ]
    },
    {
        id: 'literature', title: 'Literature & Books', description: 'Authors, novels, poetry, literary awards', icon: '📚', gradient: 'from-violet-500 to-purple-600', color: 'violet',
        subtopics: [
            { id: 'classic', name: 'Classic Literature', icon: '📖', description: 'Shakespeare, classics' },
            { id: 'modern', name: 'Modern Authors', icon: '✍️', description: 'Contemporary writers' },
            { id: 'poetry', name: 'Poetry & Drama', icon: '🎭', description: 'Poets, plays' }
        ]
    },
    {
        id: 'art', title: 'Art & Artists', description: 'Paintings, sculptures, museums, art movements', icon: '🎨', gradient: 'from-rose-500 to-pink-600', color: 'rose',
        subtopics: [
            { id: 'paintings', name: 'Paintings & Painters', icon: '🖼️', description: 'Da Vinci, Picasso' },
            { id: 'sculpture', name: 'Sculptures & Architecture', icon: '🗿', description: 'Famous works, styles' },
            { id: 'museums', name: 'Museums & Galleries', icon: '🏛️', description: 'Louvre, MoMA' }
        ]
    },
    {
        id: 'music', title: 'Music & Musicians', description: 'Genres, instruments, composers, music history', icon: '🎵', gradient: 'from-fuchsia-500 to-pink-600', color: 'fuchsia',
        subtopics: [
            { id: 'classical', name: 'Classical Music', icon: '🎻', description: 'Composers, symphonies' },
            { id: 'rock', name: 'Rock & Pop', icon: '🎸', description: 'Bands, albums, legends' },
            { id: 'instruments', name: 'Instruments & Theory', icon: '🎹', description: 'Music fundamentals' }
        ]
    },
    {
        id: 'food', title: 'Food & Cuisine', description: 'World cuisines, chefs, cooking techniques', icon: '🍕', gradient: 'from-orange-500 to-amber-600', color: 'orange',
        subtopics: [
            { id: 'cuisines', name: 'World Cuisines', icon: '🌍', description: 'Italian, Chinese, Indian' },
            { id: 'chefs', name: 'Famous Chefs', icon: '👨‍🍳', description: 'Gordon Ramsay, culinary stars' },
            { id: 'techniques', name: 'Cooking Techniques', icon: '🔪', description: 'Methods, ingredients' }
        ]
    },
    {
        id: 'health', title: 'Health & Fitness', description: 'Nutrition, exercise, wellness, medical science', icon: '💪', gradient: 'from-green-500 to-teal-600', color: 'green',
        subtopics: [
            { id: 'nutrition', name: 'Nutrition', icon: '🥗', description: 'Vitamins, diet, healthy eating' },
            { id: 'fitness', name: 'Exercise & Training', icon: '🏋️', description: 'Workouts, fitness' },
            { id: 'medical', name: 'Medical Science', icon: '⚕️', description: 'Diseases, treatments' }
        ]
    },
    {
        id: 'business', title: 'Business & Startups', description: 'Entrepreneurship, companies, business strategies', icon: '💼', gradient: 'from-slate-500 to-gray-600', color: 'slate',
        subtopics: [
            { id: 'startups', name: 'Entrepreneurship', icon: '🚀', description: 'Startups, founders, unicorns' },
            { id: 'companies', name: 'Top Companies', icon: '🏢', description: 'Apple, Google, Amazon' },
            { id: 'strategy', name: 'Business Strategies', icon: '📊', description: 'Management, marketing' }
        ]
    },
    {
        id: 'automobile', title: 'Automobiles & Racing', description: 'Cars, bikes, F1, motorsports, automotive tech', icon: '🏎️', gradient: 'from-red-500 to-orange-600', color: 'red',
        subtopics: [
            { id: 'f1', name: 'Formula 1', icon: '🏁', description: 'Drivers, teams, championships' },
            { id: 'cars', name: 'Cars & Manufacturers', icon: '🚗', description: 'Brands, models, innovations' },
            { id: 'bikes', name: 'Motorcycles & Bikes', icon: '🏍️', description: 'MotoGP, brands' }
        ]
    },
    {
        id: 'fashion', title: 'Fashion & Style', description: 'Designers, trends, fashion weeks, brands', icon: '👗', gradient: 'from-pink-500 to-purple-600', color: 'pink',
        subtopics: [
            { id: 'designers', name: 'Fashion Designers', icon: '✨', description: 'Chanel, Gucci, icons' },
            { id: 'weeks', name: 'Fashion Weeks', icon: '🎪', description: 'Paris, Milan, New York' },
            { id: 'brands', name: 'Trends & Brands', icon: '👜', description: 'Luxury brands, streetwear' }
        ]
    },
    {
        id: 'gaming', title: 'Gaming & Esports', description: 'Video games, esports, gaming industry, consoles', icon: '🎮', gradient: 'from-cyan-500 to-blue-600', color: 'cyan',
        subtopics: [
            { id: 'games', name: 'Video Games', icon: '🕹️', description: 'Popular games, franchises' },
            { id: 'esports', name: 'Esports', icon: '🏆', description: 'Tournaments, teams, players' },
            { id: 'industry', name: 'Gaming Industry', icon: '🎯', description: 'Consoles, companies' }
        ]
    },
    {
        id: 'mythology', title: 'Mythology & Folklore', description: 'Greek, Roman, Norse, Indian mythology', icon: '⚡', gradient: 'from-yellow-500 to-orange-600', color: 'yellow',
        subtopics: [
            { id: 'greek', name: 'Greek Mythology', icon: '🏛️', description: 'Gods, heroes, myths' },
            { id: 'norse', name: 'Norse Mythology', icon: '⚔️', description: 'Odin, Thor, Valhalla' },
            { id: 'world', name: 'World Mythology', icon: '🌍', description: 'Egyptian, Indian, Chinese' }
        ]
    }
];

// Note: Due to file size, the quizData object with all questions will be in a separate file
// This file contains the category structure. Questions are loaded dynamically.

export const quizData = {
    // Questions will be added here
    // Structure: quizData[topicId][subtopicId] = [array of 20 questions]
};
