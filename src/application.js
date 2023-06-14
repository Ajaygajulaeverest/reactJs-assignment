import { Welcome } from './componenet';
export default function App2() {
    return (
      <div >
        <div class= "name2">
        <div class='email'>
          <p >Email </p>
          <Welcome name="abc@gmail.com" />
        </div>
        <div class="number">
        <p >Phone Number</p>
        <Welcome name="+91" />
      </div>
      </div>
      <div>
      <button type="reset" class='cancel' >Cancel
      </button>
<button type="submit" class = "submit">Create User</button>
</div>
</div>
    );
    }