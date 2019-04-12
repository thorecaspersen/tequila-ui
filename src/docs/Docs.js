import React from 'react';
import Layout from 'tequila-ui/Layout';
import Content from 'tequila-ui/SubComponents/Content';
import Header from 'tequila-ui/SubComponents/Header';
import Sidebar from 'tequila-ui/SubComponents/Sidebar';
import Sidemenu from 'tequila-ui/Sidemenu';
import MenuHeadline from 'tequila-ui/SubComponents/MenuHeadline';
import MenuItem from 'tequila-ui/SubComponents/MenuItem';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: window.location.hash.substr(1) });
    });
  }

  render() {
    const { route } = this.state;
    const component = route
      ? componentData.filter(data => data.name === route)[0]
      : componentData[0];

    return (
      <div>
        <Layout>
          <Sidebar width="200px">
            <Sidemenu>
              <MenuHeadline titel="COMPONENTS" />
              {componentData.map(data => (
                <MenuItem
                  key={`${data.name}`}
                  titel={data.name}
                  link={`#${data.name}`}
                />
              ))}
            </Sidemenu>
          </Sidebar>
          <Layout>
            <Header bg="#C9B25D" height="70px">
              <h1>TEQUILA UI</h1>
            </Header>
            <Content>
              <ComponentPage component={component} />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
