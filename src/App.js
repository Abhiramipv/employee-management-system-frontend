import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Edit from './pages/Edit';
import View from './pages/View';
import Add from './pages/Add';
import Header from './components/Header';



function App() {
  return (
    <div >
      
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/view/:id' element={<View/>}/>


        
      </Routes>
    </div>
  );
}

export default App;
