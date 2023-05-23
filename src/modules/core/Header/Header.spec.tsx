import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('should render', () => {
    const { container } = render(<Header />);

    expect(container).toBeInTheDocument();
  });

  it('should render children', () => {
    const { container } = render(<Header>la baguette</Header>);

    expect(container).toHaveTextContent('la baguette');
  });
});
