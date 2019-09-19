import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
// import PropTypes from 'prop-types';

import styles from './TextArea.component.style';


class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  onChangeText = (text) => {
    this.setState({
      text: text
    });
  };

  render(): React.ReactNode {
    const {...extraProps} = this.props;

    return (
      <TextInput
        {...extraProps}
        style={[styles.textArea, extraProps.style]}
        multiline={true}
        onChangeText={this.onChangeText}
        value={this.state.text}
      />
    );
  }
}

export default TextArea;
