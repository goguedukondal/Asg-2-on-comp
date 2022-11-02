
import './App.css';
import Name from './Component.js'
import Experience from './Experience'
import Educator from './Educator';
import Skills from './Skills';
import Hobbies from './Hobbies';


function App() {
  return (
    <div className="App">

      <Name/>
      <hr/>
      
      
      <Experience/>
      <hr/>
      <Educator/>
      <hr/>
      <Skills/>
      <hr/>
       <Hobbies/>
      <hr/>

     
      
    </div>
  );
}

export default App;
