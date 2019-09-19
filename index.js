/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import App from './App';
import HelloWorldApp from './src';

AppRegistry.registerComponent(appName, () => HelloWorldApp);
