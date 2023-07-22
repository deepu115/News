import React from "react";
import mockNewsData from '../mockNewsData.json'

const ArticleSummary = () => {
    return (
        <div>

            {mockNewsData.mockApiResponse.response.results.map((headline) => (
                <div key={headline.id}>

                    <img src={headline.fields.thumbnail} alt={headline.webTitle} />
                    <h2>{headline.fields.headline}</h2>
                    <p>{headline.fields.bodyText}</p>
                </div>
            ))}
        </div>
    );
}
export default ArticleSummary;