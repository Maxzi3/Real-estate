import React from 'react'
import { ClipLoader } from "react-spinners";


const Spinner = ({loading}) => {
    const override = {
      display: "block",
      margin: "100px auto",
    };
  return (
    <div>
      <ClipLoader
        color="#6dda72"
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </div>
  );
}

export default Spinner
