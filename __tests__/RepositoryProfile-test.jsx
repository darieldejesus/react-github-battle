import React from 'react';
import { shallow } from 'enzyme';

import RepositoryProfile from '../app/components/RepositoryProfile';

describe('<RepositoryProfile />', () => {
  it('Repository profile is rendered correctly.', () => {
    const props = {
      image: 'https://example.com/image.jpg',
      login: 'profilename',
      name: 'Profile Name',
      position: 1,
      stars: 10,
      url: 'https://example.com/profilename'
    };
    const repositoryProfile = shallow(
      <RepositoryProfile {...props} />
    );
    expect(repositoryProfile).toMatchSnapshot();
  });
});
