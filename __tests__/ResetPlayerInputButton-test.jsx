import React from 'react';
import { shallow } from 'enzyme';

import ResetPlayerInputButton from '../app/components/ResetPlayerInputButton';

describe('<ResetPlayerInputButton />', () => {
  it('Reset button is rendered as expected.', () => {
    const onClick = jest.fn();
    const resetPlayerInputButton = shallow(
      <ResetPlayerInputButton onClick={onClick} />
    );
    expect(resetPlayerInputButton).toMatchSnapshot();
  });
});
