import React from 'react';
import mockNewsData from '../mockNewsData.json';

const Headlines = () => {
    return (
        <div>

            {mockNewsData.mockApiResponse.response.results.map((headline) => (
                <div key={headline.id}>
                    <img src={headline.fields.thumbnail} alt={headline.webTitle} />
                    <h2>{headline.fields.headline}</h2>
                </div>
            ))}
        </div>
    );
};

export default Headlines;
