import React from "react";

import Header from "../../components/Header";
import DetailFeed from "../../components/detailsPage/DetailFeed";

const DetailsPage = () => {
  return (
    <div>

      <Header isShow={true} />
      <DetailFeed />
    </div>
  );
};

export default DetailsPage;
