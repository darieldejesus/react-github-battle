import React from 'react';
import { shallow } from 'enzyme';

import UserProperties from '../app/components/UserProperties';

describe('<UserProperties />', () => {
  it('User Properties is rendered with the required props', () => {
    const profile = {
      login: 'username',
      avatar_url: 'https://example.com/username.jpg',
      followers: 10,
      following: 5,
      public_repos: 3
    };
    const userProperties = shallow(
      <UserProperties profile={profile} />
    );
    expect(userProperties).toMatchSnapshot();
  });
});