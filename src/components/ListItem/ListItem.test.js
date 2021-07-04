import React from 'react';
import ListItem from './ListItem';
import mockData from './mockData';
import { getByText } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';



describe('<ListItem /> tests', () => {
    it('should render todo item properly', () => {
      render(<ListItem todo={mockData[0]} />);
      expect(screen.queryByText(/eat breakfast/i)).toBeInTheDocument();
      expect(screen.getByTestId('close-btn-1')).toBeInTheDocument();
    });
  });