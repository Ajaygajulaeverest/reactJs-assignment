// import { Welcome } from "./componenet";
export default function App2() {
  return (
    <div>
      <div  class="name2">
        <div>
          <h3>File Upload using React!</h3>
          <div>
            <input type="file" />
            <button>Upload!</button>
          </div>
        </div>
      </div>
      <div >
        <button type="reset" class="cancel">
          Cancel
        </button>
        <button type="submit" class="submit">
          Create User
        </button>
      </div>
    </div>
  );
}
