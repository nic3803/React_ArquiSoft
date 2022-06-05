import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import ContadorMejorado from './components/ContadorMejorado';

function App() {

  return (
    <div>
    <h1> useReducer</h1>

    <hr/>   <ContadorMejorado></ContadorMejorado>   
    <hr/>   <Contador></Contador>
    
     
    
        </div>
  );
}

export default App;
