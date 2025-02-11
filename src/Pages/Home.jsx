import React, { useState } from "react";
import Add from "../Components/Add";
import View from "../Components/View";
import Category from "../Components/Category";
import { Link } from "react-router-dom";

function Home() {
  const [uploadVideoResponse, setUploadVideoResponse] = useState({});
  return (
    <>
    <div style={{backgroundColor:"#E7D4B5", padding:"10px"}}>
      <div className="container    d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse} />
        </div>
        <Link
          to={"/history"}
          style={{
            textDecoration: "none",
            color: "",
            fontsize: "30px",
            fontWeight: "Bold",
          }}
        >
          <button style={{backgroundColor:"#A0937D"}} className="btn text-light  mt-4 btn-lg">Watch History</button>
        </Link>
      </div>
      
      <div className="container-fluid w-100 mt-5 mb-5 row">
        <div className="all-videos col-lg-9">
          <h1 className="p-3 text-dark fw-bold fs-1">All Videos</h1>
          <View uploadVideoResponse={uploadVideoResponse} />
        </div>
        <div className="all-videos col-lg-3">
        <Category />
        </div>
      </div>
      </div>
      
    </>
  );
}

export default Home;


