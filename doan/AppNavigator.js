import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './login';
import PB from './App';
import chitiet from './DanhSachNV';
import themphongban from './ThemPhongBan';
import dangky from './register';
const MainNavigator = createStackNavigator({
  Home: {screen: Login},
  phongban:{screen: PB},
  nhanvien:{screen: chitiet},
  thempb:{screen:themphongban},
  dk:{screen:dangky}
});

const App = createAppContainer(MainNavigator);

export default App;
