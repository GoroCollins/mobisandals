import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import NavBar from '../components/Common/NavBar';


describe('NavBar', () => {
  test('renders navbar with brand name', () => {
    render(
      <Router> {/* Wrap NavBar with Router component */}
        <NavBar />
      </Router>
    );
    const brandElement = screen.getByText('Awesome Shop');
    expect(brandElement).toBeInTheDocument();
  });

  test('navigates to home page when home link is clicked', () => {
    render(
      <Router> {/* Wrap NavBar with Router component */}
        <NavBar />
      </Router>
    );
    const homeLink = screen.getByText('Home');
    userEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
  });

  // Add more tests as needed for other functionalities
});
