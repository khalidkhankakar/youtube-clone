export const Button_Array = ["All", "Mixes", "Music", "Javascript", "Java", "Movies", "Coding", "Football", "CR7", "FIFA", "News", "Laliga", "Nasa", "Data science"];


export const getRandomQuery = () => {
    const myArray = [
        'funny cats music videos cooking tutorials',
        'travel vlogs science documentaries fitness workouts',
        'coding tutorials movie trailers DIY crafts',
        'gaming news space exploration nature photography TED talks',
        'art and painting historical documentaries financial advice book reviews',
        'virtual reality gaming healthy recipes yoga and meditation fashion hauls',
        'technology news car reviews life hacks documentary films',
        'travel tips motivational speeches wildlife conservation',
        'home gardening sports highlights unboxing videos',
        'astronomy discoveries mindfulness meditationapp development comic book reviews',
        'cultural cuisine musical instrument tutorials science experiments',
        'sustainable living historical mysteries fitness challenges',
        'movie trivia crafting ideas gaming walkthroughs sustainability trends',
        'personal finance tips self-help books celebrity gossip',
        'dance tutorials political analysi wildlife photography',
        'virtual travel experiences robotics innovations baking recipes movie soundtracks',
        'space travelphilosophy discussions travel adventures',
        'health and wellness indie music artificial intelligence',
        'gardening hacks olympic sports highlights toy reviews',
        'architecture documentaries entrepreneurial success stories historical reenactments',
        'magic tricks space telescopes mind-bending puzzles',
        'celebrity interviewswilderness survival virtual museum tours',
        'cryptocurrency insightsurban exploration classic literature summaries',
        'home improvement projects gourmet cooking digital art tutorials',
        'psychology lecturesDIY woodworking adventure travel',
        'movie plot analysisvintage fashion electric car technology',
      ];
    const randomIndex = Math.floor(Math.random() * myArray.length);
    const randomItem = myArray[randomIndex];
    return randomItem
}


const headers = {
    'X-RapidAPI-Key': process.env.YOUTUBE_SECRET_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
}


export const SearchVideos = async (query) => {
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${query}&part=snippet%2Cid&maxResults=50`;
    const options = {
        method: 'GET',
        headers: headers,
        cache: 'force-cache'
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        return false
    }
}


export const VideoComments = async (videoId) => {
    const url = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${videoId}&maxResults=100`;
    const options = {
        method: 'GET',
        headers: headers
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        return false
    }
}

export const VideoDetails = async (videoId) => {
    const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`;
    const options = {
        method: 'GET',
        headers: headers
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        return false
    }
}

export const ChannelDetails = async (channelId) => {
    const url = `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${channelId}`;
    const options = {
        method: 'GET',
        headers: headers
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        return false
    }
}

export const ChannelVideos = async (channelId) => {
    const url = `https://youtube-v31.p.rapidapi.com/search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=100`;
    const options = {
        method: 'GET',
        headers: headers
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        return false
    }
}

export const SuggestedVideos = async (videoId) => {
    const url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=50`;
    const options = {
        method: 'GET',
        headers: headers
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        return false
    }
}