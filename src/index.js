import React, { Component, Fragment } from 'react';
import {View, Text, StatusBar} from 'react-native';

import Home from './components/Home/Home.component';


class HelloWorldApp extends Component {
  constructor(props) {
    super(props);

    this.viewStyle = {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    };
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />

        <View style={this.viewStyle}>
          <Text>Hello, World</Text>
        </View>

        <Home />
      </Fragment>
    );
  }
}

export default HelloWorldApp;
