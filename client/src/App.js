import './App.css';
// import Home from './component/Home.js';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Herder from './component/Herder';
import ProductData from './component/ProductData';
import CreateList from './component/CreateList';
import FindProductById from './component/FindProductById';

function App() {
  return (
    <BrowserRouter>
    <Herder />
      <Routes>
        <Route path='/product/adding' element={<ProductData />}/>
        <Route path='/' element={<CreateList />}/>
        <Route path='/find-product' element={<FindProductById />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
