import { render, screen } from '@testing-library/react';
import Headlines from '../src/Components/Headlines';
import mockNewsData from '../mockNewsData.json';

describe('Headlines Component Tests', () => {
    it('should render headlines with images', () => {
        //Arrange and Act
        render(<Headlines newsDisplay={5} newsData={mockNewsData.mockApiResponse.response.results} />);

        // Assert
        const headlinesWithImages = screen.getAllByTestId('headline-image');
        expect(headlinesWithImages.length).toBe(5);
    });

    it('should render the correct number of headlines', () => {
        //Arrange and Act
        render(<Headlines newsDisplay={10} newsData={mockNewsData.mockApiResponse.response.results} />);

        // Assert
        const headlines = screen.getAllByTestId('headline-title');
        expect(headlines.length).toBe(10);
    });
});
