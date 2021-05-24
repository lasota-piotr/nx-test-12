import { render } from '@testing-library/react';

import SharedLibPublishable from './shared-lib-publishable';

describe('SharedLibPublishable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedLibPublishable />);
    expect(baseElement).toBeTruthy();
  });
});
