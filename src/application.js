
export default function App2() {
    return (
      <div >
        <div class= "name2">
        <div class='email'>
          <p >Email </p>
        <input  class="textholder" type='text'  maxLength = "30" placeholder='abc@gmail.com'/>
        </div>
        <div class="number">
        <p >Phone Number</p>
        <input class="textholder" type="number"  maxLength ="15" placeholder='+91'/>
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