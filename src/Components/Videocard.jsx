import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deleteVideoAPI } from '../../services/allAPI';



function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () =>{
    setShow(true)
    const{caption,link}=video

    let today= new Date()
    // console.log(new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",
    //   hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today));
    

    let timeStamp=new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",
      hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)

    let videoHistory={caption,link,timeStamp}
    await addHistoryAPI(videoHistory)
  }

  const deleteVideo=async(id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
   }


   const dragstarted=(e,id)=>{
    console.log("drag started...VideoId:"+id);
    e.dataTransfer.setData("VideoId",id)
    
   }

  return (
    <div sm={12} md={6} lg={4}>
      <Card style={{ width: '260px', height:"300px",backgroundColor:"#A0937D" }} className=' mt-2 mb-2' draggable onDragStart={e=>dragstarted(e,video?.id)}>
        <Card.Img height={"200px"} variant="top" src={video?.url} onClick={handleShow} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center text-light text-center'>{video?.caption}</Card.Title>
          {insideCategory?null:  <button onClick={()=>deleteVideo(video?.id)} className='btn btn-danger mt-1 shadow'  >
                          <i className="fa-solid  fa-trash  " style={{fontSize:"14px"}}></i>
                        </button>}
        </Card.Body>
      </Card>

      {/* Modal */}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-dark fw-bold'>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${video?.link}?autoplay=1`}
            frameborder="0" allow="accelerometer; autoplay; 
         clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>

        </Modal.Body>

      </Modal>

   
    </div>
  )
}

 export default VideoCard



