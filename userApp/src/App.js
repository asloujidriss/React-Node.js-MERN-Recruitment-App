import logo from './logo.svg';
import './App.css';
import Home from './Views/Home/Home';
import Layout from './Views/Home/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterCandidat from './Views/Register/RegisterCandidat';
import Login from './Views/Login/Login';
import BrowseJob from './Views/Home/BrowseJob/BrowseJob';
import RegisterEntreprise from './Views/Register/RegisterEntreprise';
import JobDetails from './Views/Home/JOBDetails/JobDetails';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route index path="/" element={<Home />} />
     <Route index path="/registerc" element={<RegisterCandidat />} />
     <Route index path="/registerE" element={<RegisterEntreprise />} />
     <Route index path="/login" element={<Login />} />
     <Route index path="/BrowseJob" element={<BrowseJob />} />
     <Route index path="/jobdetails" element={<JobDetails />} />
     </Routes>
     </BrowserRouter>
    </div>

  );
}

export default App;
