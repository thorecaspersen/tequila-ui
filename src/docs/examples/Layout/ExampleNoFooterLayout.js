import React from 'react';
import Layout from 'tequila-ui/Layout';
import Content from 'tequila-ui/SubComponents/Content';
import Header from 'tequila-ui/SubComponents/Header';
import Sidebar from 'tequila-ui/SubComponents/Sidebar';

/** no footer Layout */
export default class ExampleClassicLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header bg="#3a85ff" height="100px">
          <h1>header</h1>
        </Header>
        <Sidebar width="200px" side="left" bg="#dbe7f9">
          <h1>sidebar</h1>
        </Sidebar>
        <Content bg="#a6c7fc">
          <h1>content</h1>
        </Content>
      </Layout>
    );
  }
}
