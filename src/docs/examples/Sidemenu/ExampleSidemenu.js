import React from 'react';
import Sidemenu from 'tequila-ui/Sidemenu';
import MenuItem from 'tequila-ui/SubComponents/MenuItem';
import MenuHeadline from 'tequila-ui/SubComponents/MenuHeadline';
import MenuItemGroup from 'tequila-ui/SubComponents/MenuItemGroup';

/** Sidemenu */
export default class ExampleClassicLayout extends React.Component {
  render() {
    return (
      <Sidemenu>
        <MenuHeadline titel="HEADLINE" />
        <MenuItem titel="home" link="#home" />
        <MenuItem titel="about" link="#about" />
        <MenuItem>
          <a href="#contact">contact</a>
        </MenuItem>
        <MenuItemGroup>
          <MenuItem titel="undermenu1" link="#undermenu1" />
          <MenuItem titel="undermenu2" link="#undermenu2" />
          <MenuItem titel="undermenu3" link="#undermenu3" />
        </MenuItemGroup>
        <MenuHeadline titel="HEADLINE2" />
        <MenuItemGroup>
          <MenuItem titel="undermenu4" link="#undermenu3" />
          <MenuItem titel="undermenu5" link="#undermenu4" />
          <MenuItemGroup>
            <MenuItem titel="undermenu6" link="#undermenu5" />
            <MenuItem titel="undermenu7" link="#undermenu6" />
          </MenuItemGroup>
        </MenuItemGroup>
      </Sidemenu>
    );
  }
}
