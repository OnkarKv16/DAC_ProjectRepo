// import Header from "./components/Header";



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
