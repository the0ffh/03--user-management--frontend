import { render } from '@testing-library/react';
import { Page } from '../Page';

describe('Page', () => {
  it('renders page', () => {
    const { container } = render(<Page />);

    expect(container).toBeInTheDocument();
  });

  it('should render content', () => {
    const { getByText } = render(
      <Page>
        <div>lorem ipsum</div>
      </Page>,
    );

    expect(getByText('lorem ipsum')).toBeInTheDocument();
  });
});
