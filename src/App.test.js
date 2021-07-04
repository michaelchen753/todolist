import React from 'react';
import mockData from './mockData';
import { getByText } from '@testing-library/dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

test('header should be rendered correctly',()=>{
  const { getByText } = render(<App/>);
  const headerEl = getByText(/my todo list/i);
  expect(headerEl.textContent).toBe('My todo list');
})


beforeEach(() => {
  fetchMock.once(JSON.stringify(mockData));
});

describe('<App /> tests', () => {
  it('renders <App />', () => {
    render(<App />);
  });
});

// it('renders <App/>', async ()=>{
//   render(<App/>);
//   await waitForElementToBeRemoved(()=>screen.getByText(/loading.../i));
// });

describe('<App /> tests', () => {
  it('should add a todo item', async () => {
    fetchMock.once(
      JSON.stringify({
        userId: 3,
        id: Math.floor(Math.random() * 100) + 1,
        title: 'Do math homework',
        completed: false,
      })
    );
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    userEvent.type(screen.getByRole('textbox'), 'Do math homework');
    userEvent.click(screen.getByText(/Add new todo/i));
    await waitForElementToBeRemoved(() => screen.getByText(/saving/i));
    expect(screen.getByText(/Do math homework/i)).toBeInTheDocument();
  });
});