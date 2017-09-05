import React from 'react';
import { shallow } from 'enzyme';

import UserProfile from '../app/components/UserProfile';

describe('<UserProfile />', () => {
  it('User Profile is rendered with the required props', () => {
    const profile = {
      login: 'username',
      avatar_url: 'https://example.com/username.jpg',
      followers: 10,
      following: 5,
      public_repos: 3
    };
    const userProfile = shallow(
      <UserProfile profile={profile} />
    );
    expect(userProfile).toMatchSnapshot();
  });
});