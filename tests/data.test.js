import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchHeadlines } from '../src/Utilities/data';
import mockNewsData from '../mockNewsData.json';

describe('GET request tests', () => {
    it('should actually make the external data call', async () => {
        const mock = new MockAdapter(axios);

        // Mocking the axios.get function to resolve with the mockNewsData
        mock.onGet('http://localhost:5000/mockApiResponse').reply(200, mockNewsData.mockApiResponse);

        // Act
        const headlinesData = await fetchHeadlines();

        // Assert
        expect(headlinesData).toEqual(mockNewsData.mockApiResponse.response.results);
    });
    it('should give error when failed', async () => {
        const mock = new MockAdapter(axios);

        //Arrange
        mock.onGet('http://localhost:5000/mockApiResponse').reply(500);

        // Act and Assert
        await expect(fetchHeadlines()).rejects.toThrow('Error loading data.');
    });
});
