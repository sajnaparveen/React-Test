import logo from './logo.svg';
import './App.css';
import Register from './components/register/Register'
import Login  from './components/login/Login';
import HookTest from './components/HookComp/HookComponent';
import Itemlist from './components/item/item';
// import Itemdetails from './components/itemlist/itemlist';
function App() {
  return ( 
<div className="App">
{/* <Register/> */}
{/* <Login/> */}
{/* <HookTest /> */}
<Itemlist data="sajna"/>
{/* <Itemlist/> */}
</div>
  );
}

export default App;
