import './App.css';
import App2 from './application.js';
import { Welcome } from './componenet';

function App() {
  return (
    <div >
      <div class = "user">
      <h1>Sign-in User
      </h1>
      </div>
      <div class= "details">
      <p>please fill the below deatails
      </p>
      </div>
      <div class="name1">
      <div class="first">
        <p >First Name </p>
        <Welcome name="firstname" /></div>
        <div name="last">
          <p>lastname </p>
        <Welcome name="+last name" />
    </div>
    </div>
    <App2/>
    </div>
  );
  }
export default App;
