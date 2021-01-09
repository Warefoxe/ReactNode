import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../reducers/user-reducer";
import UserItem from "./UserItem";

const ListUser = ({ getUsers, user: { users } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <>
      <div>
        {users.map((user) => (
          <UserItem key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};

export default connect(mapStateToProps, { getUsers })(ListUser);
