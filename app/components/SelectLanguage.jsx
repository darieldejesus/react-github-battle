import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SelectLanguage = ({ selectedLanguage, updateSelectedLanguage }) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map((lang) => (
        <li
          className={lang === selectedLanguage ? 'selected' : null}
          key={lang}
          onClick={() => updateSelectedLanguage(lang)}>
          {lang}
        </li>
      ))}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  updateSelectedLanguage: PropTypes.func.isRequired,
}

export default SelectLanguage;
