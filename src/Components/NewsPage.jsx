import { useState, useEffect } from 'react';
import { fetchHeadlines } from '../Utilities/data';
import Headlines from './Headlines';

const NewsPage = () => {
    const [loading, setLoading] = useState(true);
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const headlinesData = await fetchHeadlines();
                setNewsData(headlinesData);
            } catch (error) {
                console.error('Error loading news data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? <div>Loading...</div> : <Headlines newsDisplay={5} newsData={newsData} />}
        </div>
    );
};

export default NewsPage;
