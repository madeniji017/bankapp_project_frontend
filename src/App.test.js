import * as React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './LoginComponents/Footer'
describe("Testing App", ()=>{
  it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
})



// test('renders the page', () => {
//   render(<Footer />);
//   const linkElement = screen.getByText('');
//   expect(linkElement).toBeInTheDocument();
// })