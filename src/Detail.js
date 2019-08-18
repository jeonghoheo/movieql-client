import React from "react";

const Detail = props => {
  const {
    match: {
      params: { movieId }
    }
  } = props;
  return <div>Detail</div>;
};

export default Detail;
