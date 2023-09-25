// import logo from './logo.svg';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./components/pages/Home";
import Category from "./components/pages/Category";
import Products from "./components/pages/Products";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
import Veiw from "./components/pages/Veiw";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={
              <>
                <Outlet />
              </>
            }>
              <Route path="" element={<Products />} />
              <Route path='add' element={<Add />} />
              <Route path='edit/:id' element={<Edit />} />
              <Route path='veiw/:id' element={<Veiw />} />
            </Route>
            <Route path='category' element={<Category />} />
          </Routes>
        </div>
      </div>
    </div >
  );
}

export default App;
