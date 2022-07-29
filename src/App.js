import './App.css';
import { FormBook } from './components/FormBook';
import { NavBar } from './components/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar />

      <div className='container mt-4'>
        <FormBook />
      </div>
      
    </div>
  );
}

export default App;