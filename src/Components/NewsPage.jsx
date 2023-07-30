// NewsPage.js
import { useState, useEffect } from 'react';
import { fetchHeadlines } from '../Utilities/data';
import Headlines from './Headlines';

const NewsPage = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        // Fetch the news data when the component mounts
        const fetchData = async () => {
            try {
                const headlinesData = await fetchHeadlines();
                setNewsData(headlinesData);
            } catch (error) {
                console.error('Error Loading news data:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <Headlines newsData={newsData} />);
};

export default NewsPage;
