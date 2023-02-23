import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Test Button component', () => {
  test('with one word', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
