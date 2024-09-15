import logo from './logo.svg';
import './App.css';
import Button from './components/Buttons';
import Label from './components/Label';
import Dashboard from './components/Dashboard';
import Range  from './components/Range';
import StockProvider from './providers/StockProvider';

function App() {


  return (
  <StockProvider>
 <Dashboard/>
  </StockProvider> 
  
  );
}

export default App;
