
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Views/Home/Home';
import Layout from './Views/Home/Layout/Layout';
import Login from './Views/Login/Login';
import Candidat from './Views/Home/Candidats/Candidat';
import Responsable from './Views/Home/Responsables/Responsable';
import AddCandidat from './Views/Home/Candidats/AddCandidat';
import AddEntreprise from './Views/Home/Responsables/AddEntreprise';
import Register from './Views/Register/Register';
import UpdateCandidat from './Views/Home/Candidats/UpdateCandidat';
import UpdateEntreprise from './Views/Home/Responsables/UpdateEntreprise';
import Error from './Views/Errors/Error'
import { useEffect } from 'react';


function App() {
 

  const PrivateRoute = ({auth : {isAuthenticated}, children})=>{
    return isAuthenticated ? children : <Navigate to="/Login"/>;
  }

  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route  path ="/" element={<PrivateRoute auth={{ isAuthenticated: localStorage.getItem("isAuthenticated") }}><Home/></PrivateRoute>}>
        <Route index path="/" element={<Layout />} />
        <Route index path="/candidats" element={<Candidat />} />
        <Route index path="/Responsables" element={<Responsable/>} />
        <Route index path="/Addcandidat" element={<AddCandidat/>} />
        <Route index path="/Addentreprise" element={<AddEntreprise/>} />
        <Route index path="/updatecandidat/:id" element={<UpdateCandidat/>} />
        <Route index path="/updateentreprise/:id" element={<UpdateEntreprise/>} />

        </Route>
        <Route path="/Login" element={<Login/>} />
        <Route index path="/register" element={<Register/>} />
        <Route index path="*" element={<Error/>} />

       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
