// import logo from './logo.svg';
// import './App.css';
// // import TestComponent from './components/testComponent';
// // import TestClassComponent from './components/functionalComponents/testClassComponent';
// // import Login from './components/functionalComponents/login.js';
// // import PropsComponent from './components/functionalComponents/propsComponent.jsx';
// // import StateComponents from './components/functionalComponents/stateComponent.jsx';
// import NavBar from './components/functionalComponents/classComponent/NavBar';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import About from './components/functionalComponents/classComponent/About';
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<App />}></Route>
//           <Route path="/about" element={<App/>} ></Route>
//           <Route path="/education" element={<App />}></Route>
//           <Route path="/login" element={<App />}></Route>
//         </Routes>
//       </BrowserRouter>
//       <navBar />
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         {/* <TestComponent/><br></br>
//           <Login/>
//           <TestClassComponent />
//           <PropsComponent name="folks!!!" course="MERN "/>
//           <br></br>
//           <br></br>
//           <StateComponents/> */}
//         <NavBar />
//       </header>
//     </div>
//   );
// }
//   export default App;





import React from 'react';
import './App.css';
import NavBar from './components/functionalComponents/classComponent/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/functionalComponents/classComponent/About';
import Education from './components/functionalComponents/classComponent/Education';
import Login from './components/functionalComponents/classComponent/Login';
import Home from './components/functionalComponents/classComponent/Home';
import Footer from './components/functionalComponents/classComponent/Footer';
import Toggl from './components/functionalComponents/classComponent/Toggl';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Toggl/>
        <Footer/>
      </div>
    </BrowserRouter>
    
  );
}
export default App;
