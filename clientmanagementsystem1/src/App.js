
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Error';
import Home from './components/Home';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AddClientForm from './components/AddClientForm';
import ViewClientList from './components/ViewClientList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/header" element={<Header/>}/>
        <Route path='/dashboard' element={< Dashboard/>} />
        <Route path='/addClient' element={<AddClientForm/>}  />
        <Route path='/edit-client/:id' element={<AddClientForm/>}  />
        <Route path='/viewClient' element={<ViewClientList/>}  />
        <Route path="*" element={<Error />} >

          
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
