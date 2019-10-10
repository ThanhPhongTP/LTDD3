import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './login';
import PB from './App';
import chitiet from './DanhSachNV';
const MainNavigator = createStackNavigator({
  Home: {screen: Login},
  phongban:{screen: PB},
  nhanvien:{screen: chitiet}
});

const App = createAppContainer(MainNavigator);

export default App;
