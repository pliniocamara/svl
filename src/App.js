import './App.css';
import BookTable from './components/BookTable';
import { FormBook } from './components/FormBook';
import { NavBar } from './components/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar />

      <div className='container mt-4'>
        <FormBook />
      </div>
      <div className='container mt-4'>
        <BookTable />
      </div>
      
    </div>
  );
}

export default App;