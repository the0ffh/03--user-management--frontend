import { render } from '@testing-library/react';
import { Page } from './Page';

describe('Page', () => {
  it('should render', () => {
    const { container } = render(<Page />);

    expect(container).toBeInTheDocument();
  });

  it('should render children', () => {
    const { getByText, container } = render(
      <Page>
        <div>lorem ipsum</div>
      </Page>,
    );

    expect(getByText('lorem ipsum')).toBeInTheDocument();
    expect(container).toHaveTextContent('lorem ipsum');
    expect(container).not.toHaveTextContent('lipsum orem');
  });
});
