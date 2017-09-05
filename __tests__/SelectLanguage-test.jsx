import React from 'react';
import { mount } from 'enzyme';

import SelectLanguage from '../app/components/SelectLanguage';

describe('<SelectLanguage />', () => {
  let selectLanguage;
  let language;
  let updateLanguage;

  beforeEach(() => {
    language = 'JavaScript';
    updateLanguage = jest.fn();
    selectLanguage = mount(
      <SelectLanguage
        selectedLanguage={language}
        updateSelectedLanguage={updateLanguage} />
    );
  });

  it('6 languages are rendered', () => {
    expect(selectLanguage.find('li').length).toEqual(6);
  });

  it('JavaScript is the selected language', () => {
    expect(selectLanguage.find('.selected').text()).toEqual('JavaScript');
  });

  it('updateSelectedLanguage is called when choose a language', () => {
    const textLanguageToBeSelected = 'CSS';
    const indexLanguageToBeSelected = 4;
    const li = selectLanguage.find('li').at(indexLanguageToBeSelected);
    li.simulate('click');
    expect(updateLanguage).toBeCalledWith(textLanguageToBeSelected);
  });
});
