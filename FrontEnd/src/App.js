// import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <>
  
    <div className="App">
     
      {/* <Header /> */}
      <BrowserRouter>
        <NavBar />
       
      
        <Routes>
         
        </Routes>
        <ToastContainer />
      </BrowserRouter>
     
      <Partner/>
      <Order/> 
      <Footer/>
    </div>
    </>
  );
}

export default App;
