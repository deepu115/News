import { render, screen, } from '@testing-library/react';
import NewsPage from '../src/Components/NewsPage';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockNewsData from '../mockNewsData.json';

const mockAxios = new MockAdapter(axios);

mockAxios.onGet('http://localhost:5000/mockApiResponse').reply(200, {
    mockApiResponse: {
        response: {
            results: mockNewsData.mockApiResponse.response.results,
        },
    },
});

describe('NewsPage Component Tests', () => {
    it('should render loading message while fetching data', () => {
        //Arrange and Act
        render(<NewsPage />);
        //Assert
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
});
