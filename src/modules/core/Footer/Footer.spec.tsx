import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should render', () => {
    const { container } = render(<Footer />);

    expect(container).toBeInTheDocument();
  });

  it('should render current year', () => {
    const { getByText } = render(<Footer />);

    const currentUtcYear = new Date().getUTCFullYear();

    const regex = new RegExp(`${currentUtcYear}`);
    expect(getByText(regex)).toBeInTheDocument();
  });
});
