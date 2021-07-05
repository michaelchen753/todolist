import React from 'react';
import ListItem from './ListItem';
import mockData from '../../mockData';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';



describe('<ListItem /> tests', () => {
    it('should render todo item properly', () => {
      render(<ListItem todo={mockData[0]} />);
      expect(screen.queryByText('Eat breakfast')).toBeInTheDocument();
      expect(screen.getByTestId('btn-toggle')).toBeInTheDocument();
      expect(screen.getByTestId('btn-delete')).toBeInTheDocument();
    });
  });
  it('should render todo items properly', () => {
    render(<ListItem todo={mockData} />);
    mockData.forEach((todo) => expect(screen.getByText(todo.title)).toBeInTheDocument());
  });

  test('title should rendered correctly',()=>{
    render(<ListItem todo={mockData[0]} />);
    const todoTitle = screen.getByTestId('todo-title');
    expect(todoTitle).toHaveTextContent('Eat breakfast');

  })

  test('toggle button should rendered correctly',()=>{
    render(<ListItem todo={mockData[1]}/>);
    userEvent.click(screen.getByTestId('btn-toggle')).toHaveClass('completed');

  })