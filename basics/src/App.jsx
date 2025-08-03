import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  const [users, setUsers] = useState([
    { name: "Murli", age: 59 },
    { name: "Aman", age: 25 },
    { name: "Klaua", age: 19 },
  ]);

  return (
    <div>
      <Create />
      <hr />
      <Read users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
