import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchHeadlines } from '../Utilities/data';


const Headlines = ({ newsDisplay }) => {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const headlinesData = await fetchHeadlines(newsDisplay);
            setHeadlines(headlinesData);
        };

        fetchData();
    }, [newsDisplay]);

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                {headlines.map((headline) => (
                    <div key={headline.id} className="col-10 col-md-8 mb-4">
                        <div className="card bg-primary text-white">
                            <img
                                src={headline.fields.thumbnail}
                                alt={headline.webTitle}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h2 className="card-title">{headline.fields.headline}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

Headlines.propTypes = {
    newsDisplay: PropTypes.number,
};

Headlines.defaultProps = {
    newsDisplay: 5,
};

export default Headlines;
