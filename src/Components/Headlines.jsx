import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Headlines = ({ newsDisplay, newsData }) => {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        // Updated headlines when newsData prop changes
        setHeadlines(newsData.slice(0, newsDisplay));
    }, [newsData, newsDisplay]);

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                {headlines.map((headline) => (
                    <div key={headline.id} className="col-10 col-md-8 mb-4">
                        <div className="card bg-primary text-white">
                            <img
                                src={headline.fields.thumbnail}
                                alt={headline.fields.headline}
                                className="card-img-top"
                                data-testId="headline-image"
                            />
                            <div className="card-body">
                                <h2 className="card-title" data-testId="headline-title">
                                    {headline.fields.headline}
                                </h2>
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
    newsData: PropTypes.arrayOf(PropTypes.object),
};

Headlines.defaultProps = {
    newsDisplay: 10,
    newsData: [],
};

export default Headlines;
