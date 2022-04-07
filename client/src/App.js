import './App.css';
// import Home from './component/Home.js';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Herder from './component/Herder';
import ProductData from './component/ProductData';
import CreateList from './component/CreateList';

function App() {
  return (
    <BrowserRouter>
    <Herder />
      <Routes>
        <Route path='/product/adding' element={<ProductData />}/>
        <Route path='/' element={<CreateList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
