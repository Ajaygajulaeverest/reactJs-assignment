import "./css/App.css";
import App2 from "./components/application.js";


function App() {
  return (
    <div>
      <div class="user">
        <h1>Sign-in User</h1>
      </div>
      <div class="details">
        <p>please fill the below deatails</p>
      </div>
      <div class="name1">
        <div class="first">
          <label>First Name</label>
          <input
            type="First name"
            className="form-control"
            placeholder="Enter First name"
          />
        </div>
        <div name="last">
          <label>Last Name</label>
          <input
            type="Last name"
            className="form-control"
            placeholder="Enter Last name"
          />
        </div>
      </div>
      <App2 />
    </div>
  );
}
export default App;
