import React from 'react';
import Menu from 'tequila-ui/Menu';
import MenuItem from 'tequila-ui/SubComponents/MenuItem';

/** menu */
export default class ExampleClassicMenu extends React.Component {
  render() {
    return (
      <Menu>
        <MenuItem titel="home" link="#home" />
        <MenuItem titel="about" link="#about" />
        <MenuItem>
          <a href="#contact">contact</a>
        </MenuItem>
        <MenuItem titel="about1" link="#about1" />
        <MenuItem titel="about2" link="#about2" />
        <MenuItem titel="about3" link="#about3" />
        <MenuItem titel="about4" link="#about4" />
        <MenuItem titel="about5" link="#about5" />
      </Menu>
    );
  }
}
