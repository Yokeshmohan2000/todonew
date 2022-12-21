
import Form from './Form';
import Update from './Update'
import { Routes,Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Form></Form>}></Route>
      <Route path='/Update' element={<Update></Update>}></Route>
      </Routes>
    </div>
  );
}

export default App;
