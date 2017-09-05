import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchPopularRepositories } from '../utils/api';
import Loading from './Loading';
import PopularRepositories from './PopularRepositories';
import SelectLanguage from './SelectLanguage';

/**
 * A section of the page to show the popular repositories
 * and the option to filter by languages.
 */
class Popular extends Component {
  constructor(args) {
    super(args);

    this.state = {
      repositories: null,
      selectedLanguage: 'All'
    };

    this.updateSelectedLanguage = this.updateSelectedLanguage.bind(this);
  }

  /**
   * Choose 'All' as default selection 
   * when the component was just mounted.
   */
  componentDidMount() {
    this.updateSelectedLanguage(this.state.selectedLanguage);
  }

  /**
   * Fetch repositories based on the selected language.
   */
  async updateSelectedLanguage(lang) {
    this.setState(() => ({
      selectedLanguage: lang,
      repositories: null
    }));

    const repositories = await fetchPopularRepositories(lang);
    this.setState(() => ({ repositories }));
  }

  render() {
    const { selectedLanguage, repositories } = this.state;
    return (
      <div>
        <SelectLanguage
          selectedLanguage={selectedLanguage}
          updateSelectedLanguage={this.updateSelectedLanguage}/>
        {!repositories
          ? <Loading /> 
          : <PopularRepositories repositories={repositories}/>}
      </div>
    )
  }
}

export default Popular;
