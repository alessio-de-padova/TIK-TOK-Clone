import React from "react";

import CreateVideo from "../../components/CreateVideo";
import Header from "../../components/Header";

const Create = () => {
  return (
    <>
      <Header isShow={false} />
      <CreateVideo />
    </>
  );
};

export default Create;
