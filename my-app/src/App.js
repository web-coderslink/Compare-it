
import React from "react";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Middle from "./components/body";
import DetailBox from "./components/detail_box";
import "./styles.css";


function App() {
  
  return (
    <BrowserRouter>
       <div>
      <Header />
      <Routes>
      <Route path='/' element={<Middle /> } exact />
    <Route path='/description'element={<DetailBox/>} exact/>
    </Routes>
      <Footer />
    </div>
   
    
    </BrowserRouter>
 
  );
}

export default App;
