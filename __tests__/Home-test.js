import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Home from '../app/components/Home';

describe('<Home /> (Snapshot)', () => {
  it('Home component renders a title and a Link', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
