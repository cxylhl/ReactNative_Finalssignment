/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// 项目页面
import App from './page/pokemon_map';

AppRegistry.registerComponent(appName, () => App);
