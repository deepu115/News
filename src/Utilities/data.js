
import axios from 'axios';

const url = 'https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=78734313-1940-4921-866a-2266df8f928a'
// 'http://localhost:5000/mockApiResponse';
export const fetchHeadlines = async () => {
    try {
        const response = await axios.get(url);

        return response.data.response.results;
    } catch (error) {
        throw new Error('Error loading data.');
    }

};

