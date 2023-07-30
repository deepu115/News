import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component Tests', () => {
    it('should render the Header component', () => {
        render(
            <App />
        );

        const headerElement = screen.getByText('News Summary');
        expect(headerElement).toBeInTheDocument();
    });

    it('should render the Footer component', () => {
        render(
            <App />
        );

        const footerElement = screen.getByText('© 2023 News Summary. All rights reserved.');
        expect(footerElement).toBeInTheDocument();
    });

    it('should render the NewsPage component for the / route', () => {
        render(
            <App />
        );

        const newsPageElement = screen.getByText('Loading...');
        expect(newsPageElement).toBeInTheDocument();
    });
});
