
import axios from 'axios';

const apiKey = '78734313-1940-4921-866a-2266df8f928a';
const apiUrl = `https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=${apiKey}`;

export const fetchHeadlines = async (maxHeadlinesToShow) => {
    try {
        const response = await axios.get(apiUrl);
        const headlines = response.data.response.results.slice(0, maxHeadlinesToShow);
        return headlines;
    } catch (error) {
        console.error('Error Loading headlines:', error);
        return [];
    }
};
