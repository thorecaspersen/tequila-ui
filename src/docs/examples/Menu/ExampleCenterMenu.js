import React from 'react';
import Menu from 'tequila-ui/Menu';
import MenuItem from 'tequila-ui/SubComponents/MenuItem';
import MenuDropdownOverlay from 'tequila-ui/SubComponents/MenuDropdownOverlay';
import Sidemenu from 'tequila-ui/Sidemenu';
import MenuHeadline from 'tequila-ui/SubComponents/MenuHeadline';

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

/** center Menu dropdown with mega overlay box */
export default class ExamplemCenterMenu extends React.Component {
  render() {
    return (
      <div
        css={css`
          width: 750px;
        `}
      >
        <Menu>
          <MenuDropdownOverlay titel="C#">
            <Sidemenu
              bg="transparent"
              width="fit-content"
              childMargin="0px 60px 0px 0px"
            >
              <MenuHeadline titel="HEADLINE" marginTop="0px" />
              <MenuItem titel="home" link="#home123" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
            </Sidemenu>
          </MenuDropdownOverlay>
          <MenuDropdownOverlay titel="JS">
            <Sidemenu
              bg="transparent"
              width="fit-content"
              childMargin="0px 60px 0px 0px"
            >
              <MenuHeadline titel="HEADLINE" marginTop="0px" />
              <MenuItem titel="home" link="#home123" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
            </Sidemenu>
          </MenuDropdownOverlay>
          <MenuDropdownOverlay titel="database">
            <Sidemenu
              bg="transparent"
              width="fit-content"
              childMargin="0px 60px 0px 0px"
            >
              <MenuHeadline titel="HEADLINE" marginTop="0px" />
              <MenuItem titel="home" link="#home123" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
            </Sidemenu>
          </MenuDropdownOverlay>
          <MenuDropdownOverlay titel="util">
            <Sidemenu
              bg="transparent"
              width="fit-content"
              childMargin="0px 60px 0px 0px"
            >
              <MenuHeadline titel="HEADLINE" marginTop="0px" />
              <MenuItem titel="home" link="#home123" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
            </Sidemenu>
          </MenuDropdownOverlay>
          <MenuDropdownOverlay titel="terminal">
            <Sidemenu
              bg="transparent"
              width="fit-content"
              childMargin="0px 60px 0px 0px"
            >
              <MenuHeadline titel="HEADLINE" marginTop="0px" />
              <MenuItem titel="home" link="#home123" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuHeadline titel="HEADLINE" />
              <MenuItem titel="asdasdasd" />
              <MenuItem titel="home" link="#home" />
              <MenuItem titel="about" link="#about" />
              <MenuItem titel="asdasdasd" />
            </Sidemenu>
          </MenuDropdownOverlay>
        </Menu>
      </div>
    );
  }
}
