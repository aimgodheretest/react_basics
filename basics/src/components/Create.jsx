import { useState } from "react";

function Create(props) {

    console.log(props);
    

  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const registerUser = {
      fullname,
      age,
    };
    console.log(registerUser);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Register User</h1>
        <input
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          type="text"
          placeholder="Fullname"
          required
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          placeholder="Age"
          required
        />
        <button >Submit</button>
      </form>
    </div>
  );
}

export default Create;
