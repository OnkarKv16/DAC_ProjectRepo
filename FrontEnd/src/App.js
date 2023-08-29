// import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLogin from "./components/AdminLogin";
import AdminProfile from "./components/AdminProfile";
import AllSellers from "./components/AllSellers";
import CustomerLogin from "./components/CustomerLogin";
import CustomerProfile from "./components/CustomerProfile";
import RegCustomer from "./components/RegCustomer";


function App() {
  return (
    <>
  
    <div className="App">
     
      {/* <Header /> */}
      <BrowserRouter>
        <NavBar />
       
      
        <Routes>
        <Route path="/alogin" element={<AdminLogin />} />
        <Route path="/aprofile" element={<AdminProfile />} />
        <Route path="/sellers" element={<AllSellers />} />
        <Route path="/clogin" element={<CustomerLogin />} />
        <Route path="/cprofile" element={<CustomerProfile />} />
        <Route path="/customers" element={<AllCustomers />} />
        <Route path="/register" element={<RegCustomer />} />
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
