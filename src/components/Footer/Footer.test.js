import { render, screen } from '@testing-library/react';
import Footer from "./index";

test("testing footer component" , () => {
  render(<Footer />);
  
  const msg = screen.getByText( /Copyright Giulia Notaro/i );
  expect(msg).toBeInTheDocument();
});
 