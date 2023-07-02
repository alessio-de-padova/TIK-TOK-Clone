import React from "react";

import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";

const User = () => {
  return (
    <div>
      <Header isShow={true} />
      <UserProfile />
    </div>
  );
};

export default User;
