import './App.css';
import App2 from './application.js';

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
      <input class= "textholder" type='text' maxLength = "30" placeholder='Enter first name'/></div>
<div name="last"><p>lastname </p>
      <input class= "textholder" type='email'  maxLength = "30" placeholder='last name'/>
    </div>
    </div>
    <App2/>
    </div>
  );
  }
export default App;
