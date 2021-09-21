import './App.css';
import logo from './components/pngfind.com-uber-logo-png-545787.png';
import OrderSubmitForm from './components/OrderSubmitForm';

function App() {
  return (
    <div className="App">
      <nav class="logo-line">
        <img src={logo} alert="Uber" width="200" height="70" class="logo"/>
		  </nav>
      <OrderSubmitForm />
    </div>
  );
}

export default App;
