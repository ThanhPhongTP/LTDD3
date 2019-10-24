import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './login';
import PB from './App';
//import chitiet from './DanhSachNV';
import themphongban from './ThemPhongBan';
import dangky from './register';
import xoa from './delete';
import dsPhongBan from './TEST';
import dsNhanVien from './DSNhanVien';
import DS from  './DSNV'

const MainNavigator = createStackNavigator({
  Home: {screen: Login},
  phongban:{screen: PB},
  //nhanvien:{screen: chitiet},
  thempb:{screen:themphongban},
  dk:{screen:dangky},
  del:{screen:xoa},
  dspb: {screen: dsPhongBan},
  dsnv: {screen: dsNhanVien},
  ds : {screen: DS},
});

const App = createAppContainer(MainNavigator);

export default App;