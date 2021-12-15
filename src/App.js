import logo from './logo.svg';
import './App.css';
import Logo from './componets/logoComp/logo';
import VegAdd from './componets/addVegComp/addVeg';
import FruitAdd from './componets/addFruitComp/addFruit';
import CanAdd from './componets/addCanComp/addCan';
function App() {
  return (
    <div className="App">
   <Logo/>
   <VegAdd/>
   <FruitAdd/>
   <CanAdd/>
    </div>
  );
}

export default App;
