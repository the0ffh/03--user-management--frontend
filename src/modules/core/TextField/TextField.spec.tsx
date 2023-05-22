import { render, act, fireEvent } from '@testing-library/react';
import { TextField } from './TextField';
import { vi } from 'vitest';

/*
 * rather pointless to test at this point, since it is a mui component with additional props required*/
describe('TextField', () => {
  it('should render', () => {
    const { container } = render(
      <TextField onChange={console.log} label="tomato juice" id="tomato" />,
    );

    expect(container).toBeInTheDocument();
  });

  it('should execute onChange', () => {
    const onChangeMock = vi.fn();
    const { getByRole } = render(
      <TextField id="tomato" onChange={onChangeMock} label="tomato juice" />,
    );

    const textbox = getByRole('textbox');

    act(() => {
      fireEvent.change(textbox, {
        target: { value: 'potato' },
      });
    });

    expect(textbox).toHaveValue('potato');

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('potato');
  });
});
