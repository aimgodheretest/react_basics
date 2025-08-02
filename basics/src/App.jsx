import React, { useState } from "react";

function App() {
  // const [users, setUsers] = useState([
  //   { name: "Murli", age: 59 },
  //   { name: "Aman", age: 25 },
  //   { name: "Klaua", age: 19 },
  // ]);
  // const renderName = users.map((user, index) => {
  //   return <li key={index}>Name:{user.name}<br />age:{user.age}</li>;

  // });

  const [Fullname, setFullname] = useState("");
  const [age, setAge] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    const registerUser = { Fullname, age };
    console.log(registerUser);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Register User</h1>
        <input
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          value={Fullname}
          type="text"
          placeholder="Fullname"
        />
        <input
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
          type="number"
          placeholder="Age"
        />
        <button>Submit</button>
      </form>
      <hr />
      <h1>User Data</h1>
      {/* <ol>{renderName}</ol> */}
    </div>
  );
}

export default App;
