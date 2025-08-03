import React from "react";

function Read(props) {
  const users = props.users;
  //   const { setUsers } = props.setUsers;

  const renderUsers = users.map((user, index) => {
    return <li key={index}>{user.name}</li>;
  });

  return (
    <div>
      <h1>User Data</h1>
      <ol>{renderUsers}</ol>
    </div>
  );
}

export default Read;
