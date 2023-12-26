import "./css/App.css";
import ReactPlayer from "react-player";
import vedio from "./assests/samplevedio.mp4";
import Upload from "./components/application.js";


function App() {
 
  return (
    <div>
      <div>
        <h1>Sample vedio to create account</h1>
        <ReactPlayer
          controls={true}
          url={vedio}
          height="300px"
          width="750px"
        ></ReactPlayer>
      </div>

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
      <Upload />
    </div>
  );
}
export default App;
