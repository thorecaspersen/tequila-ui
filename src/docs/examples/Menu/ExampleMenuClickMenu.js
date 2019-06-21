import React from 'react';
import Menu from 'tequila-ui/Menu';
import MenuItem from 'tequila-ui/SubComponents/MenuItem';
import MenuClickMenu from 'tequila-ui/SubComponents/MenuClickMenu';
import Sidemenu from 'tequila-ui/Sidemenu';
import MenuHeadline from 'tequila-ui/SubComponents/MenuHeadline';
import MenuItemGroup from 'tequila-ui/SubComponents/MenuItemGroup';
import { jsx, css } from '@emotion/core';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

/** Menu CLICK dropdown with mega overlay box */
export default class ExamplemMenuDropboxLay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      child1Value: false,
      child2Value: false
    };
    this.handleChild1Click = this.handleChild1Click.bind(this);
    this.handleChild2Click = this.handleChild2Click.bind(this);
  }

  handleChild1Click() {
    console.log('123');
    const { child2Value } = this.state;
    this.setState({ child1Value: false, child2Value: !child2Value });
  }

  handleChild2Click() {
    const { child1Value } = this.state;
    this.setState({ child2Value: false, child1Value: !child1Value });
  }

  render() {
    return (
      <Menu>
        <MenuItem titel="home" link="#home" />
        <MenuItem titel="about" link="#about" />
        <MenuItem>
          <a href="#contact">contact</a>
        </MenuItem>
        <MenuClickMenu
          titel="ekstra"
          openMenu={this.state.child2Value}
          onClick={this.handleChild1Click}
        >
          <Sidemenu bg="transparent" width="fit-content" childMargin="0px 30px">
            <MenuHeadline titel="HEADLINE" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />

            <MenuItemGroup>
              <MenuItem titel="undermenu1" link="#undermenu1" />
              <MenuItem titel="undermenu2" link="#undermenu2" />
              <MenuItem titel="undermenu3" link="#undermenu3" />
            </MenuItemGroup>
            <MenuHeadline titel="HEADLINE2" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />
          </Sidemenu>
        </MenuClickMenu>
        <MenuClickMenu
          titel="mere"
          openMenu={this.state.child1Value}
          onClick={this.handleChild2Click}
        >
          <Sidemenu bg="transparent" width="fit-content" childMargin="0px 30px">
            <MenuHeadline titel="HEADLINE" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />

            <MenuItemGroup>
              <MenuItem titel="undermenu1" link="#undermenu1" />
              <MenuItem titel="undermenu2" link="#undermenu2" />
              <MenuItem titel="undermenu3" link="#undermenu3" />
            </MenuItemGroup>
            <MenuHeadline titel="HEADLINE2" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />
            <MenuItem titel="home" link="#home" />
            <MenuItem titel="about" link="#about" />
          </Sidemenu>
        </MenuClickMenu>
        <MenuItem titel="about1" link="#about1" />
        <MenuItem titel="about2" link="#about2" />
        <MenuItem titel="about3" link="#about3" />
        <MenuItem titel="about4" link="#about4" />
        <MenuItem titel="about5" link="#about5" />
      </Menu>
    );
  }
}
