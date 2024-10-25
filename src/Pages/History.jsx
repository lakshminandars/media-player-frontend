import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from "../../services/allAPI";


function History() {
  const [history,setHistory] = useState([]);

  useEffect(() => {
    getHistory()
  },[])

  const getHistory = async () =>{
    const result = await getHistoryAPI();
    if(result.status == 200){
      setHistory(result.data);
    }
    else{
      console.log("API failed");
      console.log(result.message);
    }
  }
  const removeHistory = async(id) => {
    await deleteHistoryAPI(id)
    getHistory()
  }
  
  return (
    <>
    <div style={{backgroundColor:"#E7D4B5", padding:"10px"}}>
      <div className="container   d-flex justify-content-between" >
        <h5 className="text-dark fw-bold fs-1 mt-5">Watch History</h5>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontsize: "25px",
          }}
          to={"/home"}
          className="fw-bold fs-4 mt-5">
          Back To Home <i  class="fa-solid   fa-arrow-rotate"></i>
        </Link>
      </div>
      <table style={{border:"1px", borderColor:"black"}} className="table  mb-5 container shadow w-100" >
        <thead>
          <tr>
            <th className="fs-5" style={{color:"black"}}>#</th>
            <th className="fs-5" style={{color:"black"}}>Caption</th>
            <th className="fs-5" style={{color:"black"}}>URL</th>
            <th className="fs-5" style={{color:"black"}}>TimeStamp</th>
            <th className="fs-5" style={{color:"black"}}>Delete</th>
          </tr>
        </thead>
        <tbody>
            {
              history?.length>0?history.map((video,index) => (
                <tr>
                  <td style={{color:"black"}} className="  fs-5">{index+1}</td>
                  <td style={{color:"black"}} className="  fs-5">{video?.caption}</td>
                  <td><a href={video.link} target="_blank" style={{color:"black"}} className="  fs-5">{video?.link}</a></td>
                  <td style={{color:"black"}} className="  fs-5">{video.timeStamp}</td>
                  <td><button className="btn btn-danger text-light" onClick={()=>removeHistory(video?.id)}><i className="fa-solid fa-trash "></i></button></td>
                
                </tr>
              )):<p className="text-danger">Nothing to display</p>
            } 
        </tbody>
      </table>
      </div>
    </>
  );
}

export default History;
