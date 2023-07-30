
import axios from 'axios';

export const fetchHeadlines = async () => {
    try {
        const response = await axios.get('http://localhost:5000/mockApiResponse');

        return response.data.response.results;
    } catch (error) {
        throw new Error('Error loading data.');
    }

};

