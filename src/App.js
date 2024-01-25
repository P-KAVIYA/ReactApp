import logo from './logo.svg';
import './App.css';
import TestComponent from './components/testComponent';
import TestClassComponent from './components/functionalComponents/testClassComponent';
import Login from './components/functionalComponents/login.js';
import PropsComponent from './components/functionalComponents/propsComponent.jsx';

function App() {
  return (
    <div className="App">
      <TestComponent/>
      <Login/>
      <TestClassComponent />
      <PropsComponent name="folks!!!" course="MERN "/>
      {/* <TestClassComponent/> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TestComponent /> */}
        {/* <TestClassComponent /> */}
        {/* <TestClassComponent/> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}
export default App;
