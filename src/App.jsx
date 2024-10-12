import { BrowserRouter } from 'react-router-dom';
import { About, Contact , Experience , Hero, Navbar ,Tech, Works } from './components';

const App=()=> {
  

  return (
      <BrowserRouter>
      
      <div className="relative z-0 bg-primary">
        <div className="">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        {/* <Tech/>
        <Works/> */}
        {/* <Feedbacks/> */}
        <div className="relative z-0">
         <Contact/>
        </div>
      </div>

      </BrowserRouter>
    )  
}

export default App
