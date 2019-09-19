import React, { Component } from 'react';
import { TextInput, View ,Text} from 'react-native';

import styles from './Home.component.style';
import TextArea from '../TextArea/TextArea.component';

class Home extends Component {
  render(): React.ReactNode {
    return (
      <View>
        <Text>Please enter your note here:</Text>
        <TextArea />
      </View>
    );
  }
}

export default Home;
