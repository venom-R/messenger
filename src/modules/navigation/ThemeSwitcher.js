import React from 'react';
import PropTypes from 'prop-types';

import { Button, Tooltip } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { THEMES } from '../../constants/themes';
import { themeType } from '../../types';

const { LIGHT, DARK } = THEMES;

const ThemeSwitcher = ({ theme, setTheme }) => {
  const nextTheme = theme === LIGHT ? DARK : LIGHT;
  const title = theme === LIGHT ? 'Dark mode' : 'Light mode';
  return (
    <Tooltip placement="right" title={title}>
      <Button type="link" className="Navigation__btn" onClick={() => setTheme(nextTheme)}>
        <Icon icon={['far', 'moon']} />
      </Button>
    </Tooltip>
  );
};

ThemeSwitcher.propTypes = {
  theme: themeType.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
