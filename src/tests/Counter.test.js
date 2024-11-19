import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count_element = screen.getByTestId('count');
  expect(count_element).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const adder_button = screen.getByText('+');
  fireEvent.click(adder_button);

  const count_element = screen.getByTestId('count');
  expect(count_element).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decreaser_button = screen.getByText('-');
  fireEvent.click(decreaser_button);

  const count_element = screen.getByTestId('count');
  expect(count_element).toHaveTextContent('-1');
});
