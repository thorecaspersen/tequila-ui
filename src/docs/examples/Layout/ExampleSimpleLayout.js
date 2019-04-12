import React from 'react';
import Layout from 'tequila-ui/Layout';
import Content from 'tequila-ui/SubComponents/Content';
import Header from 'tequila-ui/SubComponents/Header';
import Footer from 'tequila-ui/SubComponents/Footer';

/** simple Layout */
export default class ExampleSimpleLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header bg="#3a85ff" height="100px">
          <h1>header</h1>
        </Header>
        <Content bg="#a6c7fc">
          <h1>content</h1>
        </Content>
        <Footer height="100px" bg="#6396e8">
          <h1>footer</h1>
        </Footer>
      </Layout>
    );
  }
}
