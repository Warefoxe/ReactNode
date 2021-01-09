import React from "react";

const UserItem = ({ user: { _id, name, email } }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
};

export default UserItem;
