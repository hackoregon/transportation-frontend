/* eslint-disable import/no-extraneous-dependencies */
// This should probably be the core component, containing, nav etc

import React from 'react';
import styled from 'styled-components';
import Header from 'react-component-library/src/Navigation/Header';
import TransportationMap from '../Map';

const Container = styled.div`
  min-height: 100%;
  max-width: calc(768px + 16px * 2);
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function App(props) {
  return (
    <Container>
      <Header title="Civic" />
      {React.Children.toArray(props.children)}
      <TransportationMap />
    </Container>
  );
}

App.displayName = 'App';
App.defaultProps = {
  children: <div />,
};

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
